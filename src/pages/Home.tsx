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
          <Link>
            Shop Products
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;