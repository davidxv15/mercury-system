import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

function Shop() {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-semibold text-stone-200">
        Shop
      </h2>

      <section className="grid gap-4 md:grid-col-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product} />
        ))}
    </section>

    </div>
  );
}

export default Shop;