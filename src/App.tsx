import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductId from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />} >
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<AdminDashboard />} />
          </Route>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;