import { products } from "../data/products";

function AdminDashboard() {
  const totalProducts = products.length;
  const totalStock = products.reduce((total, product) => total + product.stock, 0);
  
  return (
    <div className="p-4">
      <h2 className="text-3xl font-semibold text-stone-200">
        Admin
      </h2>
    </div>
  );
}

export default AdminDashboard;