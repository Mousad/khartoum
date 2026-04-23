import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { Search, Filter, X } from 'lucide-react';
import { products, brands } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState(
    searchParams.get('brand') || ''
  );
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') || ''
  );

  const [showFilters, setShowFilters] = useState(false);

  // =========================
  // CATEGORIES
  // =========================
 const categories = [
  'clothing',
  'shoes',
  'accessories',
  'beauty',
  'beauty', // بدل perfume/makeup
];

  // =========================
  // SYNC URL
  // =========================
  useEffect(() => {
    const params = {};

    if (selectedBrand) params.brand = selectedBrand;
    if (selectedCategory) params.category = selectedCategory;

    setSearchParams(params);
  }, [selectedBrand, selectedCategory]);

  // =========================
  // FILTER PRODUCTS
  // =========================
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesBrand =
        !selectedBrand || product.brandId === selectedBrand;

      const matchesCategory =
        !selectedCategory || product.category === selectedCategory;

      return matchesSearch && matchesBrand && matchesCategory;
    });
  }, [searchQuery, selectedBrand, selectedCategory]);

  // =========================
  // CLEAR FILTERS
  // =========================
  const clearFilters = () => {
    setSelectedBrand('');
    setSelectedCategory('');
    setSearchQuery('');
    setSearchParams({});
  };

  const hasActiveFilters = selectedBrand || selectedCategory;

  return (
    <div className="min-h-screen">

      {/* HEADER */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="px-4 py-4">

          <h1 className="text-[#5433eb] text-center mb-4">
            Shop
          </h1>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#183153] opacity-40" />

            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#f2f9f5] rounded-xl outline-none"
            />
          </div>

        </div>
      </header>

      {/* FILTER BAR */}
      <div className="bg-white border-b px-4 py-3">

        <div className="flex items-center justify-between">

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-[#5433eb] text-white rounded-xl"
          >
            <Filter className="w-4 h-4" />
            Filters
          </button>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-[#183153] text-sm flex items-center gap-1"
            >
              <X className="w-4 h-4" />
              Clear
            </button>
          )}

        </div>

        {/* FILTER OPTIONS */}
        {showFilters && (
          <div className="mt-4 space-y-4">

            {/* BRANDS */}
            <div>
              <h3 className="text-[#183153] mb-2 text-sm">Brands</h3>

              <div className="flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <button
                    key={brand.id}
                    onClick={() => {
                      setSelectedBrand(
                        selectedBrand === brand.id ? '' : brand.id
                      );

                      setShowFilters(false);

                      setTimeout(() => {
                        document
                          .getElementById('products-section')
                          ?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className={`px-3 py-1.5 rounded-full text-sm ${
                      selectedBrand === brand.id
                        ? 'bg-[#5433eb] text-white'
                        : 'bg-[#f2f9f5] text-[#183153]'
                    }`}
                  >
                    {brand.name}
                  </button>
                ))}
              </div>
            </div>

            {/* =========================
                CATEGORY (ADDED FIX)
            ========================= */}
            <div>
              <h3 className="text-[#183153] mb-2 text-sm">Categories</h3>

              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(
                        selectedCategory === cat ? '' : cat
                      );

                      setShowFilters(false);

                      setTimeout(() => {
                        document
                          .getElementById('products-section')
                          ?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className={`px-3 py-1.5 rounded-full text-sm capitalize ${
                      selectedCategory === cat
                        ? 'bg-[#5433eb] text-white'
                        : 'bg-[#f2f9f5] text-[#183153]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>

      {/* RESULTS */}
      <div className="px-4 py-3 text-sm text-[#183153] opacity-60">
        {filteredProducts.length} products found
      </div>

      {/* PRODUCTS */}
      <section id="products-section" className="px-4 pb-8">

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="opacity-60">No products found</p>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="mt-4 text-[#5433eb]"
              >
                Clear filters
              </button>
            )}
          </div>

        ) : (
          <div className="grid grid-cols-2 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}

      </section>

    </div>
  );
};