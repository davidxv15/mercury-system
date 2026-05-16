import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, cartCount } = useCart();

  const orderTotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <div className="space-y-6 p-4">
      <h2 className="text-3xl font-semibold text-stone-200">Cart</h2>

      {cartItems.length === 0 ? (
        <section className="rounded-2xl border border-zinc-700 bg-zinc-800 p-6">
          <p className="text-stone-400">Your cart is empty.</p>

          <Link
            to="/shop"
            className="mt-4 inline-block rounded-xl bg-sky-600 px-5 py-3 font-medium text-white transition hover:bg-sky-500"
          >
            Browse Products
          </Link>
        </section>
      ) : (
        <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <article
                key={item.product.id}
                className="rounded-2xl border border-zinc-700 bg-zinc-800 p-5"
              >
                <h3 className="text-xl font-semibold text-stone-100">
                  {item.product.name}
                </h3>

                <p className="text-stone-400">Quantity: {item.quantity}</p>

                <p className="font-bold text-amber-400">
                  Subtotal: ${item.product.price * item.quantity}
                </p>
              </article>
            ))}
          </div>

          <aside className="h-fit rounded-2xl border border-zinc-700 bg-zinc-800 p-5">
            <h3 className="text-xl font-semibold text-stone-100">
              Order Summary
            </h3>

            <p className="mt-3 text-stone-400">Items: {cartCount}</p>

            <p className="mt-2 text-2xl font-bold text-amber-400">
              Total: ${orderTotal}
            </p>

            <button className="mt-5 w-full rounded-xl bg-sky-600 px-5 py-3 font-medium text-white transition hover:bg-sky-500">
              Checkout
            </button>
          </aside>
        </section>
      )}
    </div>
  );
}

export default Cart;