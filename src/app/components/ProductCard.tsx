import { Link, useNavigate } from 'react-router';
import { getBrandById } from '../data/products';
import { useCart } from '../context/CartContext';
import { Check, ShoppingCart  } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  brandId: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image, brandId }) => {
  const { addToCart, isInCart } = useCart();
  const navigate = useNavigate();
  const brand = getBrandById(brandId);
  const inCart = isInCart(id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!inCart) {
      addToCart({ id, name, price, image, brandId, category: '', description: '' });
    }
  };

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
    >
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img src={image} alt={name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-4">
        <h3 className="text-[#183153] line-clamp-2 mb-0 min-h-[3rem]">{name}</h3>
        <div className="flex items-center justify-between">
          <p className="text-[#5433eb]">${price.toFixed(2)}</p>
          <button
            onClick={handleAddToCart}
            className={`flex items-center gap-1 px-2 py-1.5 rounded-full transition-all duration-200 ${
              inCart
                ? 'bg-green-500 text-white'
                : 'bg-[#5433eb] text-white hover:bg-[#4329c9]'
            }`}
          >
            {inCart ? (
              <>
                <Check className="w-3 h-3" />
                
              </>
            ) : (
              <>
                <ShoppingCart className="w-3 h-3" />
               
              </>
            )}
          </button>
        </div>
       
      </div>
    </div>
  );
};
