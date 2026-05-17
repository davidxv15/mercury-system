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
}