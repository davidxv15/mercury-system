import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="space-y-8 p-4">
      <section className="rounded-3xl border border-zinc-700 bg-zinc-800 p-8">
        <p className="mb-3 text-sm uppercase tracking-widest text-sky-400">
          Mercury System
        </p>

        <h1 className="max-w-3xl text-5xl font-bold text-stone-100">
          A modern commerce storefront with an operations dashboard behind it.
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-stone-400">
          Browse products, manage cart flow, and power the business through a connected admin experience.
        </p>

        <div className="mt-6 flex gap-4">
          <Link
            to="/shop"
          className="rounded-xl border border-zinc-600 px-5 py-3 font-medium text-stone-200 transition hover:border-sky-500">
            Shop Products
          </Link>
          <Link
            to="/admin"
          className="rounded-xl border border-zinc-600 px-5 py-3 font-medium text-stone-200 transition hover:border-sky-500">
            View Admin
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-zinc-700 bg-zinc-800 p-5">
          <h2 className="text-xl font-semibold text-stone-100">Storefront</h2>
          <p className="mt-2 text-stone-400">
            Product browsing, cart state, and customer-facing commerce flow.
          </p>
        </article>

        <article className="rounded-2xl border border-zinc-700 bg-zinc-800 p-5">
          <h2 className="text-xl font-semibold text-stone-100">Admin</h2>
          <p className="mt-2 text-stone-400">
            Inventory, orders, metrics, and business operations tooling.
          </p>
        </article>

        <article className="rounded-3xl border border-zinc-700 bg-zinc-800 p-5">
          <h2 className="text-xl">System</h2>
          <p className="mt-2">
            One shared product model powering both customer and operator views.
          </p>
        </article>
      </section>
    </div>
  );
}

export default Home;