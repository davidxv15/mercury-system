import { products } from "../data/products";

function AdminDashboard() {
  const totalProducts = products.length;
  const totalStock = products.reduce((total, product) => total + product.stock, 0);
  const featuredProducts = products.filter((product) => product.featured).length;

  return (
    <div className="space-y-6 p-4">
      <h2 className="text-3xl font-semibold text-stone-200">
        Admin
      </h2>

      <section className="grid">
        <article className="rounded-2xl">
          <p className="text-sm text-stone-400">Products</p>
          <h3 className="text-3xl font-bold text-stone-100">{totalProducts}</h3>
        </article>
        
        <article className="rounded-2xl">
          <p className="text-sm text-stone-400">Total Stock</p>
          <h3 className="text-3xl font-bold text-stone-100"></h3>
        </article>
      </section>

    </div>
  );
}

export default AdminDashboard;