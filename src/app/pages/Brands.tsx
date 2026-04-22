import { Link } from 'react-router';
import { brands } from '../data/products';

export const Brands = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="px-4 py-4">
          <h1 className="text-[#5433eb] text-center">Brands</h1>
        </div>
      </header>

      {/* Brands Grid */}
      <section className="px-4 py-6">
        <div className="grid grid-cols-2 gap-6">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              to={`/brands/${brand.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-40">
  <img
    src={brand.cover}
    alt={brand.name}
    className="w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

  {/* اللوجو في النص */}
  <img
    src={brand.logo}
    alt={brand.name}
    className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-1/2 
               w-20 h-20 rounded-full border-4 border-white 
               object-cover shadow-xl"
  />
</div>
             <div className="p-10 pt-16 text-center">
  <h2 className="text-[#183153] mb-2 font-semibold text-lg">
    {brand.name}
  </h2>

  <p className="text-[#183153] text-sm opacity-60 line-clamp-2">
    {brand.description}
  </p>

  <div className="mt-3 inline-block px-3 py-1 bg-[#f2f9f5] text-[#5433eb] text-xs rounded-full">
    {brand.category}
  </div>
</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};
