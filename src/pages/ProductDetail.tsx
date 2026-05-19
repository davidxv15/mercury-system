import { Link, useParams } from "react-router-dom"
import { products } from "../data/products"
import { useCart } from "../context/CartContext"

function ProductDetail() {
  const { productId } = useParams();
  const { addToCart } = useCart();

  const product = products.find((item) => item.id === productId);

  if (!product) {
    return (
      <div className="p-4">
        <h2 className="text3xl font-semibold text-stone-200">
          Prodcuct not found.
        </h2>

        <Link
          to="/shop"
          className="mt-4 inline-block text-sky-400">
          Back to shop
        </Link>

      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="h-96 w-full rounded-2xl object-cover" />
      
      <section className="rounded-2xl border">
        <p className="text-sm text-sky-400">{product.category}</p>

        <h2 className="mt-2 text-4xl font-bold text-stone-100">
          {product.name}
        </h2>

        <p className="mt-4 text-4 text-3xl font-bold text-amber-400">
          ${product.price}
        </p>

        <p className="mt-3 text-stone-400">Stock: {product.stock}</p>

      </section>

    </div>
  )
}