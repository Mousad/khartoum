import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext'; // 👈 مهم جداً

export function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    address: '',
    notes: '',
  });

  // 🔥 redirect لو السلة فاضية
  useEffect(() => {
    if (items.length === 0 && !isSubmitted) {
      navigate('/cart');
    }
  }, [items, isSubmitted, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      clearCart();
    }, 2000);
  };

  // ================= SUCCESS SCREEN =================
  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">

          <CheckCircle className="w-24 h-24 mx-auto mb-6 text-green-500" />

          <h1 className="text-3xl mb-3">تم استلام طلبك بنجاح</h1>

          <p className="text-gray-600 mb-6">
            شكراً لك! سنتواصل معك قريباً
          </p>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-right mb-6">

            <h2 className="text-xl mb-4">تفاصيل الطلب</h2>

            <div className="space-y-2 text-gray-600 text-sm">

              <p><strong>الاسم:</strong> {formData.name}</p>
              <p><strong>الهاتف:</strong> {formData.phone}</p>
              <p><strong>واتس:</strong> {formData.whatsapp}</p>
              <p><strong>العنوان:</strong> {formData.address}</p>

              {formData.notes && (
                <p><strong>ملاحظات:</strong> {formData.notes}</p>
              )}

              <div className="border-t pt-3 mt-3">
                <p className="text-lg text-red-500">
                  الإجمالي: {totalPrice} جنيه
                </p>
              </div>

            </div>
          </div>

          <button
            onClick={() => navigate('/')}
            className="bg-[#5433eb] text-white px-6 py-3 rounded-lg"
          >
            العودة للرئيسية
          </button>

        </div>
      </div>
    );
  }

  // ================= CHECKOUT FORM =================
  return (
    <div className="min-h-screen p-4">

      <h1 className="text-2xl text-center mb-6">إتمام الطلب</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* FORM */}
        <div className="lg:col-span-2">

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow p-5 space-y-4"
          >

            <input
              placeholder="الاسم الكامل"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full p-3 bg-gray-100 rounded-lg"
            />

            <input
              placeholder="رقم الهاتف"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full p-3 bg-gray-100 rounded-lg"
            />

            <input
              placeholder="رقم الواتساب"
              required
              value={formData.whatsapp}
              onChange={(e) =>
                setFormData({ ...formData, whatsapp: e.target.value })
              }
              className="w-full p-3 bg-gray-100 rounded-lg"
            />

            <textarea
              placeholder="العنوان"
              required
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              className="w-full p-3 bg-gray-100 rounded-lg h-24"
            />

            <textarea
              placeholder="ملاحظات (اختياري)"
              value={formData.notes}
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
              className="w-full p-3 bg-gray-100 rounded-lg h-20"
            />

            <button
              type="submit"
              className="w-full py-3 bg-[#5433eb] text-white rounded-lg"
            >
              تأكيد الطلب
            </button>

          </form>

        </div>

        {/* SUMMARY */}
        <div className="bg-white rounded-2xl shadow p-5 h-fit">

          <h2 className="text-lg mb-4">ملخص الطلب</h2>

          <div className="space-y-2 text-sm">

          {items.map((item) => (
  <div
    key={item.id}
    className="flex justify-between text-sm"
  >
    <span className="text-gray-600">
      {item.name}
    </span>

    <span className="text-[#E53935]">
      {item.price * item.quantity} جنيه
    </span>
  </div>
))}

          </div>

          <div className="border-t mt-4 pt-3 flex justify-between">
            <span>الإجمالي</span>
            <span className="text-red-500">{totalPrice}</span>
          </div>

        </div>

      </div>

    </div>
  );
}