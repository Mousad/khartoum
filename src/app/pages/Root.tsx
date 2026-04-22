import { Outlet } from 'react-router';
import { BottomNavbar } from '../components/BottomNavbar';
import { CartProvider } from '../context/CartContext';

export const Root = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#f2f9f5] pb-20">
        <Outlet />
        <BottomNavbar />
      </div>
    </CartProvider>
  );
};
