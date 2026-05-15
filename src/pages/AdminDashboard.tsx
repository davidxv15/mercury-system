import { products } from "../data/products";

function AdminDashboard() {
  const totalProducts = products.length;
  const totalStock = products.reduce((total, product) => total + product.stock, 0);
  const featuredProducts = products.filter((product) => product.featured).length;

  return (
    <div className="space-y-6 p-4">
      <h2 className="text-3xl font-semibold text-stone-200">
        Admin Dashboard
      </h2>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-zinc-700 bg-zinc-800 p-5">
          <p className="text-sm text-stone-400">Products</p>
          <h3 className="text-3xl font-bold text-stone-100">{totalProducts}</h3>
        </article>

        <article className="rounded-2xl border border-zinc-700 bg-zinc-800 p-5">
          <p className="text-sm text-stone-400">Total Stock</p>
          <h3 className="text-3xl font-bold text-stone-100">{totalStock}</h3>
        </article>

        <article className="rounded-2xl border border-zinc-700 bg-zinc-800 p-5">
          <p className="text-sm text-stone-400">Featured</p>
          <h3 className="text-3xl font-bold text-stone-100">{featuredProducts}</h3>
        </article>
      </section>

      <section className="rounded-2xl border border-zinc-700 bg-zinc-800 p-5">
        <h3 className="mb-4 text-xl font-semibold text-stone-100">
          Inventory Snapshot
        </h3>

        <div className="space-y-3">
          {/* mapping over data to render UI component */}
          {products.map((product) => (
            <article
              key={product.id}
              className="flex items-center justify-between rounded-xl bg-zinc-900 p-4">
              <div>
                <h4 className="font-semibold text-stone-100">
                  
                </h4>
              </div>
            </article>
          ))}
        </div>

        
      </section>

    </div>
  );
}

export default AdminDashboard;