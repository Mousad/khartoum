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

      {/* Grid */}
      <section className="px-4 py-6">
        <div className="grid grid-cols-2 gap-6">

          {brands.map((brand: Brand) => (
            <div
              key={brand.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
            >

              {/* Cover */}
              <div className="relative h-40">
                <img src={brand.cover} className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Logo */}
                <img
                  src={brand.logo}
                  className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 
                             w-20 h-20 rounded-full border-4 border-white object-cover shadow-xl"
                />
              </div>

              {/* Content */}
              <div className="p-6 pt-14 text-center">

                <h2 className="text-[#183153] mb-2 font-semibold text-base">
                  {brand.name}
                </h2>

               

              

                {/* Social */}
                <div className="flex justify-center gap-3 mt-4">

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

                {/* زر */}
                <Link
                  to={`/brands/${brand.id}`}
                  className="block mt-4 bg-[#5433eb] text-white text-sm py-2 rounded-lg hover:bg-indigo-700"
                >
                  عرض المتجر
                </Link>

              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
};