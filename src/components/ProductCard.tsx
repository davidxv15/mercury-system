import type { Product } from "../types/Product";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="rounded-2xl border border-zinc-700 bg-zinc-800 p-4 shadow-lg">
      <img
        src={product.imageURL}
        alt={product.name}
        className="rouded-xl" />
      
      <div className="space-y-2">
        <p className="text-sm text-sky-400">{product.category}</p>

        <h3 className="text-lg font-semibold text-stone-100">
          {product.name}
        </h3>

        <p className="text-lg font-bold text-amber-400">{product.price}</p>

        <p className="text-lg font-bold text-amber-400">Stock: {product.stock}</p>

        {product.featured && (
          <p className="inline-block rounded-full bg-amber-500 px-3 py-1 text-xs text-amber-300">
            Featured
          </p>
        )}
        
      </div>
    </article>
  );
}

export default ProductCard;