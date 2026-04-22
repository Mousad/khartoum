import { User, Settings, Heart, Package, LogOut } from 'lucide-react';

export const Profile = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="px-4 py-4">
          <h1 className="text-[#5433eb] text-center">Profile</h1>
        </div>
      </header>

      {/* Profile Section */}
      <div className="bg-white mt-6 mx-4 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-[#5433eb] rounded-full flex items-center justify-center text-white text-2xl">
            KL
          </div>
          <div>
            <h2 className="text-[#183153] mb-1">Khartoum User</h2>
            <p className="text-[#183153] text-sm opacity-60">user@khartoumlights.com</p>
          </div>
        </div>
      </div>

      {/* Menu Options */}
      <div className="mt-6 mx-4 space-y-3">
        <button className="w-full bg-white rounded-2xl p-4 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-[#f2f9f5] rounded-full flex items-center justify-center">
            <Package className="w-5 h-5 text-[#5433eb]" />
          </div>
          <div className="flex-1 text-left">
            <h3 className="text-[#183153]">My Orders</h3>
            <p className="text-[#183153] text-sm opacity-60">View order history</p>
          </div>
        </button>

        <button className="w-full bg-white rounded-2xl p-4 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-[#f2f9f5] rounded-full flex items-center justify-center">
            <Heart className="w-5 h-5 text-[#5433eb]" />
          </div>
          <div className="flex-1 text-left">
            <h3 className="text-[#183153]">Wishlist</h3>
            <p className="text-[#183153] text-sm opacity-60">Your saved items</p>
          </div>
        </button>

        <button className="w-full bg-white rounded-2xl p-4 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-[#f2f9f5] rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-[#5433eb]" />
          </div>
          <div className="flex-1 text-left">
            <h3 className="text-[#183153]">Account Details</h3>
            <p className="text-[#183153] text-sm opacity-60">Manage your information</p>
          </div>
        </button>

        <button className="w-full bg-white rounded-2xl p-4 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-[#f2f9f5] rounded-full flex items-center justify-center">
            <Settings className="w-5 h-5 text-[#5433eb]" />
          </div>
          <div className="flex-1 text-left">
            <h3 className="text-[#183153]">Settings</h3>
            <p className="text-[#183153] text-sm opacity-60">Preferences and privacy</p>
          </div>
        </button>

        <button className="w-full bg-white rounded-2xl p-4 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
          <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center">
            <LogOut className="w-5 h-5 text-red-500" />
          </div>
          <div className="flex-1 text-left">
            <h3 className="text-red-500">Log Out</h3>
            <p className="text-[#183153] text-sm opacity-60">Sign out of your account</p>
          </div>
        </button>
      </div>

      {/* App Info */}
      <div className="mt-8 text-center px-4 pb-8">
        <p className="text-[#183153] opacity-40 text-sm">Khartoum Lights v1.0.0</p>
      </div>
    </div>
  );
};
