import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#2a2e30] text-white mt-6">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* About */}
          <div>
            <img
              src="https://khartoumlights.com/wp-content/uploads/2025/04/connected-store-2-1.png"
              alt="logo"
              className="h-8 mb-4"
            />

            <p className="text-sm text-white/70 leading-relaxed">
              Khartoum Lights منصة تجمع أفضل البراندات المحلية في مكان واحد،
              لتجربة تسوق سهلة ومميزة.
            </p>
          </div>

          {/* Links */}
         <div className="flex justify-between gap-10">

  {/* روابط - يمين */}
  <div className="text-right">
    <h3 className="font-semibold mb-4">روابط</h3>
    <ul className="space-y-2 text-sm text-white/70">
      <li>الرئيسية</li>
      <li>المتجر</li>
      <li>البراندات</li>
      <li>البازارات</li>
    </ul>
  </div>

  {/* الأقسام - شمال */}
  <div className="text-left">
    <h3 className="font-semibold mb-4">الأقسام</h3>
    <ul className="space-y-2 text-sm text-white/70">
      <li>ملابس</li>
      <li>إكسسوارات</li>
      <li>مستحضرات تجميل</li>
      <li>عطور</li>
    </ul>
  </div>

</div>

          {/* Contact */}
          <div className="flex justify-center">

  <div className="text-center">

    <h3 className="font-semibold mb-4">تواصل معنا</h3>

    <div className="space-y-3 text-sm text-white/70">

      <div className="flex items-center justify-center gap-2">
        <Phone size={16} /> +201234567890
      </div>

      <div className="flex items-center justify-center gap-2">
        <Mail size={16} /> info@khartoumlights.com
      </div>

      {/* Social */}
      <div className="flex justify-center gap-3 mt-3">

        <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-pink-500 transition">
          <Instagram size={18} />
        </a>

        <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-blue-500 transition">
          <Facebook size={18} />
        </a>

      </div>

    </div>

  </div>

</div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/60">

          © {new Date().getFullYear()} Khartoum Lights. All rights reserved.

        </div>

      </div>

    </footer>
  );
};