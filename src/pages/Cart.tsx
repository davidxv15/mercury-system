import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, cartCount } = useCart();

  const orderTotal = cartItems.reduce(
    (total, item) => + item.product.price * item.quantity,
    0
  );
  
  return (
    <div className="space-y-6 p-4">
      <h2 className="mb-6 text-3xl font-semibold text-stone-200">
        Cart
      </h2>

      {cartItems.length === 0 ? (
        <p className="rounded-2xl border border-zinz-700 bg-zinc-800 text-stone-400 text-lg p-6">
          Your cart is empty.
        </p>

        <Link className="mt-4 inline-block rounded-xl bg-sky-600 px-5 py-3 font-medium text-white transition">
            Browse Products
        </Link>

      ) : (
          <section>
            <p className="text-stone-400">Total items: {cartCount}</p>

            {cartItems.map((item) => (
              <article
                key={item.product.id}
                className="rounded-xl border border-zinc-700 bg-zinc-800 p-4">
                <h3 className="text-xl font-semibold text-stone-100">
                  {item.product.name}
                </h3>

                <p className="text-stone-400">
                  Quantity: {item.quantity}
                </p>
                <p className="font-bold text-amber-400">
                  ${item.product.price * item.quantity}
                </p>
              </article>
            ))}
        </section>
      )}

    </div>
  );
}

export default Cart;