import { Link } from "react-router";
import { brands } from "../data/products";
import { Instagram, Facebook } from "lucide-react";
import type { Brand } from "../types";

export const Brands = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc]">

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="px-4 py-4">
          <h1 className="text-[#5433eb] text-center font-semibold text-lg">
            Brands
          </h1>
        </div>
      </header>

      <div className="px-4 mb-6">

  <div className="relative h-30 rounded-2xl overflow-hidden">

    {/* الصورة */}
    <img
      src="https://khartoumlights.com/wp-content/uploads/2025/04/connected-store.png"
      className="w-full h-full object-cover"
    />

    {/* طبقة تغميق */}
    <div className="absolute inset-0 bg-black/40" />

    {/* النص */}
    <div className="absolute inset-0 flex items-center justify-center text-center px-4">

      <div className="text-white">

        <h2 className="text-lg font-bold mb-1">
          اكتشف أفضل البراندات
        </h2>

        <p className="text-sm text-white/80">
          تسوق من أقوى العلامات التجارية في مكان واحد
        </p>

      </div>

    </div>

  </div>

</div>

      {/* Grid */}
     <section className="px-4 py-1">

  <div className="grid grid-cols-2 gap-6">

    {brands.map((brand: Brand) => (

      <Link
        key={brand.id}
        to={`/brands/${brand.id}`}
        className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition block"
      >

        {/* Cover */}
        <div className="relative h-30">

          <img
            src={brand.cover}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          {/* Logo */}
          <img
            src={brand.logo}
            className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 
                       w-10 h-10 rounded-full border-4 border-white object-cover shadow-xl"
          />

        </div>

        {/* Content */}
        <div className="pt-6 pb-4 text-center px-3">

          {/* Name */}
          <h2 className="text-[#183153] font-semibold text-base mb-3">
            {brand.name}
          </h2>

          {/* Social */}
          <div className="flex justify-center gap-3">

            {brand.instagram && (
              <a
                href={brand.instagram}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-full bg-[#f2f9f5] hover:bg-pink-100"
              >
                <Instagram size={16} className="text-pink-500" />
              </a>
            )}

            {brand.whatsapp && (
              <a
                href={`https://wa.me/${brand.whatsapp}`}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-full bg-[#f2f9f5] hover:bg-green-100"
              >
                <span className="text-green-500 text-xs font-bold">
                  WA
                </span>
              </a>
            )}

            {brand.facebook && (
              <a
                href={brand.facebook}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-full bg-[#f2f9f5] hover:bg-blue-100"
              >
                <Facebook size={16} className="text-blue-600" />
              </a>
            )}

          </div>

        </div>

      </Link>

    ))}

  </div>

</section>
    </div>
  );
};