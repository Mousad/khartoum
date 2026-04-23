import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Brands } from "./pages/Brands";
import { BrandDetail } from "./pages/BrandDetail";
import { Shop } from "./pages/Shop";
import { ProductDetail } from "./pages/ProductDetail";
import { Cart } from "./pages/Cart";
import { Profile } from "./pages/Profile";
import { Checkout } from "./pages/Checkout"; // 👈 جديد

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "brands", Component: Brands },
      { path: "brands/:brandId", Component: BrandDetail },
      { path: "shop", Component: Shop },
      { path: "product/:productId", Component: ProductDetail },
      { path: "cart", Component: Cart },
      { path: "profile", Component: Profile },

      // 🆕 Checkout Route
      { path: "checkout", Component: Checkout },
    ],
  },
]);