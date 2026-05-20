import { Link } from "react-router-dom";
import type { Product } from "../types/Product";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
}


function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  return (
    <article className="rounded-2xl border border-zinc-700 bg-zinc-800 p-4 shadow-lg">

      <Link to={`/product/${product.id}`}>
      <img
        src={product.imageUrl}
        alt={product.name}
        className="rounded-xl" />
        </Link>
      
      <div className="space-y-2">
        <p className="text-sm text-sky-400">{product.category}</p>

        <Link to={`/product/${product.id}`}>
        <h3 className="text-lg font-semibold text-stone-100">
          {product.name}
        </h3>
        </Link>

        <p className="text-lg font-bold text-amber-400">${product.price}</p>

        <p className="text-lg font-bold text-amber-400">Stock: {product.stock}</p>

        {product.featured && (
          <p className="inline-block rounded-full bg-amber-500 px-3 py-1 text-xs text-amber-300">
            Featured
          </p>
        )}

        <button
          onClick={() => addToCart(product)}
          className="mt-4 pb-2 w-full rounded-xl bg-red-600 px-4 py-2 font-medium text-sky-200 transition hover:bg-sky-500">
          Add To Cart
        </button>
        
      </div>
    </article>
  );
}

export default ProductCard;