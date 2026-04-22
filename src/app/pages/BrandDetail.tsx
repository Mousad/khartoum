import { useParams, Link } from 'react-router';
import { ChevronLeft } from 'lucide-react';
import { getBrandById, getProductsByBrand } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const BrandDetail = () => {
  const { brandId } = useParams<{ brandId: string }>();
  const brand = brandId ? getBrandById(brandId) : undefined;
  const products = brandId ? getProductsByBrand(brandId) : [];

  if (!brand) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-[#183153] mb-4">Brand not found</h2>
          <Link to="/brands" className="text-[#5433eb]">
            Back to Brands
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header with Back Button */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="px-4 py-4 flex items-center gap-3">
          <Link to="/brands" className="text-[#183153]">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-[#183153]">{brand.name}</h1>
        </div>
      </header>

      {/* Brand Cover & Info */}
      <section className="relative bg-white mb-6">
        <div className="relative h-56">
          <img src={brand.cover} alt={brand.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <img
            src={brand.logo}
            alt={brand.name}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white object-cover shadow-lg"
          />
        </div>
        <div className="pt-16 pb-6 px-4 text-center">
          <h2 className="text-[#183153] mb-2">{brand.name}</h2>
          <p className="text-[#183153] opacity-60 max-w-md mx-auto">{brand.description}</p>
          <div className="mt-4 inline-block px-4 py-1.5 bg-[#f2f9f5] text-[#5433eb] text-sm rounded-full">
            {brand.category}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 pb-8">
        <h2 className="text-[#183153] mb-4">Products ({products.length})</h2>
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
};
