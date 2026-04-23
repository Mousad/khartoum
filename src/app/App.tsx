import { RouterProvider } from "react-router";
import { router } from "./routes";
import { CartProvider } from "./context/CartContext";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
      <Footer />
    </CartProvider>
  );
}