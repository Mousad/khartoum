import { useParams, Link, useNavigate } from 'react-router';
import { ChevronLeft } from 'lucide-react';
import { getProductById, getBrandById } from '../data/products';
import { useCart } from '../context/CartContext';

export const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addToCart, isInCart } = useCart();

  const product = productId ? getProductById(productId) : undefined;
  const brand = product ? getBrandById(product.brandId) : undefined;
  const inCart = product ? isInCart(product.id) : false;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-[#183153] mb-4">Product not found</h2>
          <Link to="/shop" className="text-[#5433eb]">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!inCart) {
      addToCart(product);
    } else {
      navigate('/cart');
    }
  };

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="px-4 py-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="text-[#183153]">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-[#183153]">خروج</h1>
        </div>
      </header>

      {/* Product Image */}
      <div className="bg-white">
        <div className="aspect-square overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Product Info */}
      <div className="bg-white mt-2 p-6">
        {/* Brand */}
        {brand && (
          <Link
            to={`/brands/${brand.id}`}
            className="inline-flex items-center gap-2 mb-3 bg-[#f2f9f5] px-3 py-1.5 rounded-full"
          >
            <img src={brand.logo} alt={brand.name} className="w-6 h-6 rounded-full object-cover" />
            <span className="text-[#5433eb] text-sm">{brand.name}</span>
          </Link>
        )}

        {/* Product Name */}
        <h1 className="text-[#183153] mb-3">{product.name}</h1>

        {/* Price */}
        <div className="text-3xl text-[#5433eb] mb-6">${product.price.toFixed(2)}</div>

        {/* Description */}
        <div>
          <h2 className="text-[#183153] mb-2">Description</h2>
          <p className="text-[#183153] opacity-70 leading-relaxed">{product.description}</p>
        </div>

        {/* Product Details */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-[#183153] opacity-60">Category</span>
              <span className="text-[#183153] capitalize">{product.category}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#183153] opacity-60">Product ID</span>
              <span className="text-[#183153]">{product.id.toUpperCase()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Add to Cart Button */}
      <div className="fixed bottom-20 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-lg">
        <button
          onClick={handleAddToCart}
          className={`w-full py-4 rounded-xl text-white transition-colors ${
            inCart ? 'bg-[#183153] hover:bg-[#0f1f35]' : 'bg-[#5433eb] hover:bg-[#4329c9]'
          }`}
        >
          {inCart ? 'View in Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};
