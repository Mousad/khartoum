import { Link, useLocation } from 'react-router';
import { Home, Store, ShoppingBag, ShoppingCart, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const BottomNavbar = () => {
  const location = useLocation();
  const { totalItems } = useCart();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/brands', icon: Store, label: 'Brands' },
    { path: '/shop', icon: ShoppingBag, label: 'Shop' },
    { path: '/cart', icon: ShoppingCart, label: 'Cart', badge: totalItems },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto px-2">
        {navItems.map(({ path, icon: Icon, label, badge }) => (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center justify-center flex-1 h-full transition-colors duration-200 relative ${
              isActive(path) ? 'text-[#5433eb]' : 'text-[#183153] opacity-60'
            }`}
          >
            <div className="relative">
              <Icon className="w-6 h-6" strokeWidth={isActive(path) ? 2.5 : 2} />
              {badge !== undefined && badge > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#5433eb] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {badge > 9 ? '9+' : badge}
                </span>
              )}
            </div>
            <span className="text-xs mt-1">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};
