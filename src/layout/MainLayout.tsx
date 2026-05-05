import { Link, Outlet } from "react-router-dom";
import { useCart } from "../context/CartContext";

function MainLayout() {
  const { cartCount } = useCart();
  return (
    <div className="min-h-screen bg-zinc-900 text-amber-600">
      <nav className="flex items-center gap-6 border-b border-zinc-700 px-6 py-4">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
        <Link to="/admin">Admin</Link>
      </nav>

      <main className="p-6">
        <Outlet />
      </main>

    </div>
  );
}

export default MainLayout;