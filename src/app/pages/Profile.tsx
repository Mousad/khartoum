import { useState } from "react";
import { User, Store, Mail } from "lucide-react";

type Step = "choose" | "login" | "auth";

export const Profile = () => {
  const [step, setStep] = useState<Step>("choose");
  const [mode, setMode] = useState<"shop" | "store" | null>(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow p-6">

        {/* ================= STEP 1 ================= */}
        {step === "choose" && (
          <div className="text-center space-y-6">

            <h1 className="text-xl font-bold">
              مرحباً 👋 اختر ماذا تريد
            </h1>

            <button
              onClick={() => {
                setMode("shop");
                setStep("login");
              }}
              className="w-full bg-[#5433eb] text-white py-3 rounded-xl flex items-center justify-center gap-2"
            >
              <User size={18} />
              عايز أتسوق
            </button>

            <button
              onClick={() => {
                setMode("store");
                setStep("login");
              }}
              className="w-full bg-black text-white py-3 rounded-xl flex items-center justify-center gap-2"
            >
              <Store size={18} />
              عايز أفتح متجر
            </button>

          </div>
        )}

        {/* ================= STEP 2 LOGIN ================= */}
        {step === "login" && (
          <div className="space-y-4 text-center">

            <h2 className="font-bold">
              تسجيل الدخول
            </h2>

            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full border p-3 rounded-xl"
            />

            <button className="w-full bg-[#5433eb] text-white py-3 rounded-xl flex items-center justify-center gap-2">
              <Mail size={18} />
              دخول بالإيميل
            </button>

            {/* Google */}
            <button className="w-full border py-3 rounded-xl">
              تسجيل بجوجل
            </button>

            {/* Facebook */}
            <button className="w-full bg-blue-600 text-white py-3 rounded-xl">
              تسجيل بفيسبوك
            </button>

            <button
              onClick={() => setStep("auth")}
              className="text-sm text-gray-500"
            >
              متابعة (تجريبي)
            </button>

          </div>
        )}

        {/* ================= STEP 3 AUTH RESULT ================= */}
        {step === "auth" && (
          <div className="text-center space-y-4">

            {mode === "shop" && (
              <>
                <h2 className="font-bold text-green-600">
                  🎉 مرحباً بك في المتجر
                </h2>
                <p>يمكنك الآن التسوق</p>

                <button className="w-full bg-[#5433eb] text-white py-3 rounded-xl">
                  دخول المتجر
                </button>
              </>
            )}

            {mode === "store" && (
              <>
                <h2 className="font-bold text-green-600">
                  🏪 جاهز لإنشاء متجرك
                </h2>
                <p>ابدأ رحلة البيع الآن</p>

                <button className="w-full bg-black text-white py-3 rounded-xl">
                  بدء إنشاء المتجر
                </button>
              </>
            )}

          </div>
        )}

      </div>

    </div>
  );
};