import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router';
import { Search, Filter, X } from 'lucide-react';
import { products, brands } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string>(searchParams.get('brand') || '');
  const [selectedCategory, setSelectedCategory] = useState<string>(searchParams.get('category') || '');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['clothing', 'shoes', 'accessories', 'toys', 'educational'];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBrand = !selectedBrand || product.brandId === selectedBrand;
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      return matchesSearch && matchesBrand && matchesCategory;
    });
  }, [searchQuery, selectedBrand, selectedCategory]);

  const clearFilters = () => {
    setSelectedBrand('');
    setSelectedCategory('');
    setSearchQuery('');
    setSearchParams({});
  };

  const hasActiveFilters = selectedBrand || selectedCategory;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="px-4 py-4">
          <h1 className="text-[#5433eb] text-center mb-4">Shop</h1>
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#183153] opacity-40" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#f2f9f5] rounded-xl text-[#183153] placeholder-[#183153]/40 outline-none focus:ring-2 focus:ring-[#5433eb]/30"
            />
          </div>
        </div>
      </header>

      {/* Filter Bar */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-[#5433eb] text-white rounded-xl"
          >
            <Filter className="w-4 h-4" />
            <span>Filters</span>
            {hasActiveFilters && (
              <span className="bg-white text-[#5433eb] px-2 py-0.5 rounded-full text-xs">
                {(selectedBrand ? 1 : 0) + (selectedCategory ? 1 : 0)}
              </span>
            )}
          </button>
          {hasActiveFilters && (
            <button onClick={clearFilters} className="text-[#183153] text-sm flex items-center gap-1">
              <X className="w-4 h-4" />
              Clear
            </button>
          )}
        </div>

        {/* Filter Options */}
        {showFilters && (
          <div className="mt-4 space-y-4">
            {/* Brand Filter */}
            <div>
              <h3 className="text-[#183153] mb-2 text-sm">Brand</h3>
              <div className="flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <button
                    key={brand.id}
                    onClick={() => setSelectedBrand(selectedBrand === brand.id ? '' : brand.id)}
                    className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
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

            {/* Category Filter */}
            <div>
              <h3 className="text-[#183153] mb-2 text-sm">Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(selectedCategory === category ? '' : category)}
                    className={`px-3 py-1.5 rounded-full text-sm capitalize transition-colors ${
                      selectedCategory === category
                        ? 'bg-[#5433eb] text-white'
                        : 'bg-[#f2f9f5] text-[#183153]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="px-4 py-3 text-[#183153] text-sm opacity-60">
        {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
      </div>

      {/* Products Grid */}
      <section className="px-4 pb-8">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[#183153] opacity-60">No products found</p>
            {hasActiveFilters && (
              <button onClick={clearFilters} className="mt-4 text-[#5433eb]">
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
