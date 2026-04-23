
import { Link } from "react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "../components/ProductCard";
import { products, brands } from "../data/products";
import { useState, useEffect, useMemo } from "react";

const bannerImages = [
  "https://i.pinimg.com/736x/00/78/f4/0078f435f269986d9e3d53258b30bfbc.jpg",
  "https://i.pinimg.com/webp/736x/a5/76/45/a57645d2469bae6b0e1e07ff9d9b6959.webp",
];

// =======================
// 🔥 CATEGORIES DATA
// =======================
const categories = [
  {
    key: "clothing",
    name: "ملابس",
    img: "https://i.pinimg.com/736x/f1/bd/b3/f1bdb3c736d6d87a2c31bc48738c617e.jpg",
  },
  {
    key: "skincare",
    name: "العناية بالبشرة",
    img: "https://dr-roaa-product.com/wp-content/uploads/2025/11/IMG_6213-scaled.jpg",
  },
  {
    key: "accessories",
    name: "إكسسوارات",
    img: "https://i.pinimg.com/736x/6c/f4/67/6cf467101e59dd3f6607b6288ecad6af.jpg",
  },
  {
    key: "makeup",
    name: "شنط ",
    img: "https://i.pinimg.com/736x/9f/c9/fe/9fc9fe91ca8753ca875c5aeb324e435e.jpg",
  },
  {
    key: "perfume",
    name: "عطور",
    img: "https://i.pinimg.com/736x/f1/a9/a2/f1a9a2ad7fb9968003f3d132bb423a0b.jpg",
  },
];

// =======================
// 🔥 CATEGORY CARD
// =======================
const CategoryCard = ({ cat, featured = false }: any) => {
  return (
    <Link
      to={`/shop?category=${cat.key}`}
      className={`relative overflow-hidden rounded-2xl shadow-sm hover:shadow-md transition ${
        featured ? "h-40 col-span-2" : "h-32"
      }`}
    >
      <img
        src={cat.img}
        alt={cat.name}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h3 className="text-white font-semibold text-lg">{cat.name}</h3>
      </div>
    </Link>
  );
};

// =======================
// 🔥 HOME COMPONENT
// =======================
export const Home = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // 🔥 Trending products (مختلط من كل الأقسام)
  const trendingProducts = useMemo(() => {
    const grouped: Record<string, Product[]> = {};

    products.forEach((p) => {
      if (!grouped[p.category]) {
        grouped[p.category] = [];
      }
      grouped[p.category].push(p);
    });

    const result: Product[] = [];
    const categories = Object.keys(grouped);

    let index = 0;

    while (result.length < 8) {
      const cat = categories[index % categories.length];
      const product = grouped[cat]?.shift();

      if (product) result.push(product);

      index++;
    }

    return result;
  }, []);

  // 🔥 Featured brands
  const featuredBrands = useMemo(() => {
    return [...brands].slice(0, 6);
  }, []);

  return (
   
    


    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-[#2a2e30] shadow-sm sticky top-0 z-40">
        <div className="px-4 py-3 flex justify-center">
          <img
            src="https://khartoumlights.com/wp-content/uploads/2025/04/connected-store-2-1.png"
            alt="Khartoum Lights"
            className="h-6 object-contain"
          />
        </div>
      </header>

      {/* Banner */}
      <section className="relative bg-white ">
        <div className="relative h-[670px] overflow-hidden">
          {bannerImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentBanner ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={image} className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-end">
                <div className="p-6 md:p-10 text-white text-right max-w-lg">
                  <h2 className="text-4xl font-bold mb-4">
                    اكتشف عالم التسوق مع{" "}
                    <span className="text-[#f8c538]">Khartoum</span> Lights
                  </h2>

                  <p className="mb-6 text-white/90">
                    منصة تجمع أفضل البراندات في مكان واحد
                  </p>

                  <button className="bg-[#f8c538] text-black px-6 py-3 rounded-lg font-semibold">
                    تسوق الآن
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Marquee */}
      <section className="bg-[#2a2e30] overflow-hidden mb-6">
        <div className="whitespace-nowrap animate-marquee py-3">
          <span className="mx-8 text-white font-semibold"> خصومات 50%</span>
          <span className="mx-8 text-white font-semibold"> توصيل سريع</span>
          <span className="mx-8 text-white font-semibold"> براندات مميزة</span>
          <span className="mx-8 text-white font-semibold">
            {" "}
            الدفع عند الاستلام
          </span>
        </div>
      </section>

      {/* ======================= */}
      {/* 🔥 CATEGORIES SECTION */}
      {/* ======================= */}

      <section className="px-3 mb-8">
        <div className="flex justify-center mb-4">
          <h2 className="text-[#183153]">الأقسام</h2>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {categories.map((cat, index) => (
            <CategoryCard key={cat.key} cat={cat} featured={index === 2} />
          ))}
        </div>
      </section>
      {/* Brands */}
      {/* Trending */}
      <section className="px-4 mb-8">
        <div className="flex justify-between mb-4">
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
      <section className="px-4 mb-8">

  {/* TITLE */}
  <div className="flex justify-center mb-4">
    <h2 className="text-[#183153] font-semibold">
      Featured Brands
    </h2>
  </div>

  {/* SCROLL CONTAINER */}
  <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">

    {featuredBrands.map((brand) => (
      <Link
        key={brand.id}
        to={`/brands/${brand.id}`}
        className="min-w-[140px] bg-white rounded-2xl shadow-sm flex-shrink-0 snap-start hover:scale-105 transition duration-300"
      >

        {/* COVER */}
        <img
          src={brand.cover}
          className="h-24 w-full object-cover rounded-t-2xl"
        />

        {/* CONTENT */}
        <div className="p-3 text-center">

          {/* LOGO */}
          <img
            src={brand.logo}
            className="w-12 h-12 rounded-full mx-auto -mt-6 border-2 border-white bg-white"
          />

          {/* NAME */}
          <h3 className="text-sm mt-1 font-medium text-[#183153]">
            {brand.name}
          </h3>

        </div>

      </Link>
    ))}

  </div>

</section>

      <section className="px-4 my-10">
        <div className="relative rounded-2xl overflow-hidden h-[320px] md:h-[420px]">
          {/* الصورة */}
          <img
            src="https://i.pinimg.com/736x/f1/bd/b3/f1bdb3c736d6d87a2c31bc48738c617e.jpg"
            alt="promo"
            className="w-full h-full object-cover"
          />

          {/* overlay غامق عشان النص يبان */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* النص */}
          <div className="absolute inset-0 flex items-center justify-end text-right p-6 md:p-12">
            <div className="max-w-md text-white">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-snug">
                اكتشفي عالم من الأناقة والتسوق العصري
              </h2>

              <p className="text-sm md:text-base text-white/90 mb-6">
                أفضل البراندات، أحدث التريندات، وتجربة تسوق سهلة في مكان واحد.
                خليك دايمًا مميزة مع Khartoum Lights.
              </p>

              <button className="bg-[#f8c538] text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition">
                تسوق الآن
              </button>
            </div>
          </div>
        </div>
      </section>

     

      <section className="px-4 my-8">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="relative rounded-xl overflow-hidden h-40 group">
            <img
              src="https://i.pinimg.com/736x/f1/bd/b3/f1bdb3c736d6d87a2c31bc48738c617e.jpg"
              className="w-full h-full object-cover group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-3">
              <p className="text-white font-semibold text-sm">ملابس</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-xl overflow-hidden h-40 group">
            <img
              src="https://i.pinimg.com/736x/43/ce/9b/43ce9bc4748a49738144db6957ee1fd8.jpg"
              className="w-full h-full object-cover group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-3">
              <p className="text-white font-semibold text-sm">تجميل</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-xl overflow-hidden h-40 group">
            <img
              src="https://i.pinimg.com/736x/9f/c9/fe/9fc9fe91ca8753ca875c5aeb324e435e.jpg"
              className="w-full h-full object-cover group-hover:scale-105 transition"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-3">
              <p className="text-white font-semibold text-sm">عطور</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-white rounded-2xl overflow-hidden shadow-sm">
          {/* الفيديو */}
          <div className="h-64 md:h-[400px]">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/I5i_b-YcJ84?autoplay=1&mute=1&loop=1&playlist=I5i_b-YcJ84"
              title="Khartoum Lights Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>

          {/* النص */}
          <div className="p-6 md:p-10 text-right">
            <h2 className="text-2xl md:text-3xl font-bold text-[#183153] mb-4">
              اكتشف عالم Khartoum Lights
            </h2>

            <p className="text-[#183153] opacity-70 mb-6 leading-relaxed">
              شاهد فيديو تعريفي عن البراندات والمنتجات، واستمتع بتجربة تسوق
              حديثة وسهلة من مكان واحد.
            </p>

            <button className="bg-[#f8c538] text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition">
              تسوق الآن
            </button>
          </div>
        </div>
      </section>

      <section className="px-4 my-10">
        {/* العنوان */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[#183153] font-bold text-lg">
            البازارات القادمة 🎪
          </h2>
          <button className="text-[#5433eb] text-sm">عرض الكل</button>
        </div>

        {/* الكروت */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <img
              src="https://i.pinimg.com/736x/61/17/e8/6117e8615ee06d54e5a81e261249983a.jpg"
              className="w-full h-40 object-cover"
            />

            <div className="p-4 text-right">
              <h3 className="font-bold text-[#183153] mb-1">
                Bazaar Khartoum Lights
              </h3>

              <p className="text-sm text-gray-500 mb-2">
                📅 25 - 30 أبريل 2026
              </p>

              <p className="text-sm text-gray-500 mb-4">
                📍 الخرطوم - قاعة المعارض
              </p>

              <button className="bg-[#5433eb] text-white px-4 py-2 rounded-xl text-sm">
                احجز الآن
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <img
              src="https://i.pinimg.com/736x/9f/c9/fe/9fc9fe91ca8753ca875c5aeb324e435e.jpg"
              className="w-full h-40 object-cover"
            />

            <div className="p-4 text-right">
              <h3 className="font-bold text-[#183153] mb-1">
                Spring Fashion Bazaar
              </h3>

              <p className="text-sm text-gray-500 mb-2">📅 10 - 15 مايو 2026</p>

              <p className="text-sm text-gray-500 mb-4">
                📍 مول النيل - الخرطوم
              </p>

              <button className="bg-[#f8c538] text-black px-4 py-2 rounded-xl text-sm">
                التفاصيل
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 my-10">
        <h2 className="text-[#183153] font-bold mb-4 text-lg text-right">
          موقعنا 📍 المهندسين
        </h2>

        <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.8!2d31.1986!3d30.0619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458412c8f0b7c3b%3A0x2e8a6c7c6c0f!2z2KfZhNmE2YjZhtmK2Kkg2YTZhNmF2KfZhNmE2YjYp9mI2KfZhNmE!5e0!3m2!1sen!2seg!4v0000000000"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};
