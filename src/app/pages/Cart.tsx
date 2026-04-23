import { Link } from 'react-router';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { getBrandById } from '../data/products';
export const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="px-4 py-4">
            <h1 className="text-[#5433eb] text-center">Shopping Cart</h1>
          </div>
        </header>

        {/* Empty State */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 text-center">
          <ShoppingBag className="w-24 h-24 text-[#183153] opacity-20 mb-4" />
          <h2 className="text-[#183153] mb-2">Your cart is empty</h2>
          <p className="text-[#183153] opacity-60 mb-6">Add some products to get started!</p>
          <Link
            to="/shop"
            className="px-6 py-3 bg-[#5433eb] text-white rounded-xl hover:bg-[#4329c9] transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-32">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="px-4 py-4 flex items-center justify-between">
          <h1 className="text-[#5433eb]">Shopping Cart ({items.length})</h1>
          <button onClick={clearCart} className="text-[#183153] text-sm opacity-60 hover:opacity-100">
            Clear All
          </button>
        </div>
      </header>

      {/* Cart Items */}
      <div className="px-4 py-6 space-y-4">
        {items.map((item) => {
          const brand = getBrandById(item.brandId);
          return (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="flex gap-4 p-4">
                {/* Product Image */}
                <Link to={`/product/${item.id}`} className="flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-xl"
                  />
                </Link>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <Link to={`/product/${item.id}`}>
                    <h3 className="text-[#183153] line-clamp-2 mb-1">{item.name}</h3>
                  </Link>
                  {brand && (
                    <div className="flex items-center gap-1 mb-2">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="w-4 h-4 rounded-full object-cover"
                      />
                      <span className="text-xs text-[#183153] opacity-60">{brand.name}</span>
                    </div>
                  )}
                  <p className="text-[#5433eb]">${item.price.toFixed(2)}</p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center bg-[#f2f9f5] text-[#183153] rounded-lg hover:bg-[#e5f2ec] transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-[#183153] min-w-[2rem] text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center bg-[#f2f9f5] text-[#183153] rounded-lg hover:bg-[#e5f2ec] transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="flex-shrink-0 text-red-500 hover:text-red-600 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>

              {/* Item Subtotal */}
              <div className="px-4 pb-4 flex justify-between items-center">
                <span className="text-sm text-[#183153] opacity-60">Subtotal</span>
                <span className="text-[#183153]">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Price Summary & Checkout - Fixed at Bottom */}
      <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="px-4 py-4">
          {/* Price Breakdown */}
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-[#183153] opacity-60">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-[#183153] opacity-60">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="h-px bg-gray-200 my-2" />
            <div className="flex justify-between text-[#183153]">
              <span>Total</span>
              <span className="text-[#5433eb]">${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          {/* Checkout Button */}
          <Link
  to="/checkout"
  className="block text-center w-full py-4 bg-[#5433eb] text-white rounded-xl hover:bg-[#4329c9] transition-colors"
>
    Checkout
</Link>
        </div>
      </div>
    </div>
  );
};
