import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { products, brands } from '../data/products';

const bannerImages = [
  'https://i.pinimg.com/736x/61/17/e8/6117e8615ee06d54e5a81e261249983a.jpg',
  'https://i.pinimg.com/webp/736x/a5/76/45/a57645d2469bae6b0e1e07ff9d9b6959.webp',
  'https://i.pinimg.com/1200x/ca/e9/1a/cae91a5bc4b74f734aacae67adf56535.jpg',
 
];

export const Home = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  const trendingProducts = products.slice(0, 8);
  const featuredBrands = brands.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Header */}
    <header className="bg-[#2a2e30] shadow-sm sticky top-0 z-40">
  <div className="px-4 py-4 flex justify-center">
    <img
      src="https://khartoumlights.com/wp-content/uploads/2025/04/connected-store-2-1.png"
      alt="Khartoum Lights"
      className="h-7 object-contain"
    />
  </div>
</header>

      {/* Banner Carousel */}
      <section className="relative bg-white mb-">
        <div className="relative h-180 overflow-hidden">
          {bannerImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentBanner ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img src={image} alt={`Banner ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-end">
  <div className="p-6 md:p-10 text-white text-right max-w-lg">
    
    <h2 className="text-4xl md:text-4xl font-bold mb-4 leading-snug">
      اكتشف عالم من الإبداع والتسوق مع <span className="text-[#f8c538]">Khartoum</span> Lights 
    </h2>

    <p className="text-sm md:text-lg text-white/90 mb-6">
      منصة تجمع أفضل البراندات المحلية في مكان واحد — منتجات مميزة، جودة عالية، وتجربة تسوق فريدة تناسب كل الأذواق.
    </p>

    <button className="bg-[#f8c538] text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">
      تسوق الآن
    </button>

  </div>
</div>
              </div>
            </div>
          ))}
        
          
        </div>
        
      </section>
      <section className="bg-[#40635f] overflow-hidden mb-6">
  <div className="whitespace-nowrap animate-marquee py-3">

    <span className="mx-8 text-white font-semibold">
      🔥 خصومات تصل إلى 50% على أحدث المنتجات
    </span>

    <span className="mx-8 text-white font-semibold">
      🚚 توصيل سريع لجميع المناطق
    </span>

    <span className="mx-8 text-white font-semibold">
      🛍️ اكتشف براندات محلية مميزة
    </span>

    <span className="mx-8 text-white font-semibold">
      💳 الدفع عند الاستلام متاح
    </span>

    {/* تكرار عشان الحركة تبقى smooth */}
    <span className="mx-8 text-white font-semibold">
      🔥 خصومات تصل إلى 50% على أحدث المنتجات
    </span>

    <span className="mx-8 text-white font-semibold">
      🚚 توصيل سريع لجميع المناطق
    </span>

  </div>
</section>

      {/* Featured Brands */}
      <section className="px-4 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[#183153]">Featured Brands</h2>
          <Link to="/brands" className="text-[#5433eb] text-sm">
            View All
          </Link>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {featuredBrands.map((brand) => (
            <Link
              key={brand.id}
              to={`/brands/${brand.id}`}
              className="flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow w-40"
            >
              <div className="h-24 overflow-hidden">
                <img src={brand.cover} alt={brand.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-3 text-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-12 h-12 rounded-full mx-auto -mt-8 border-2 border-white object-cover mb-2"
                />
                <h3 className="text-[#183153] text-sm">{brand.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending Products */}
      <section className="px-4 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[#183153]">Trending Now</h2>
          <Link to="/shop" className="text-[#5433eb] text-sm">
            Shop All
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="px-4 mb-8">
        <h2 className="text-[#183153] mb-4">Upcoming Events</h2>
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-[#5433eb] text-white rounded-xl p-4 text-center min-w-[60px]">
              <div className="text-2xl">15</div>
              <div className="text-xs">APR</div>
            </div>
            <div>
              <h3 className="text-[#183153] mb-1">Spring Sale</h3>
              <p className="text-[#183153] text-sm opacity-60">Up to 50% off on selected items</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-[#183153] text-white rounded-xl p-4 text-center min-w-[60px]">
              <div className="text-2xl">22</div>
              <div className="text-xs">APR</div>
            </div>
            <div>
              <h3 className="text-[#183153] mb-1">New Collection Launch</h3>
              <p className="text-[#183153] text-sm opacity-60">Exclusive preview for members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 mb-8">
        <h2 className="text-[#183153] mb-4">Shop by Category</h2>
        <div className="grid grid-cols-2 gap-4">
          <Link
            to="/shop?category=clothing"
            className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-4xl mb-2">👕</div>
            <h3 className="text-[#183153]">Clothing</h3>
          </Link>
          <Link
            to="/shop?category=shoes"
            className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-4xl mb-2">👟</div>
            <h3 className="text-[#183153]">Shoes</h3>
          </Link>
          <Link
            to="/shop?category=accessories"
            className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-4xl mb-2">🎒</div>
            <h3 className="text-[#183153]">Accessories</h3>
          </Link>
          <Link
            to="/shop?category=toys"
            className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-4xl mb-2">🧸</div>
            <h3 className="text-[#183153]">Toys</h3>
          </Link>
        </div>
      </section>
    </div>
  );
};
