import { Link } from "react-router-dom";
import { publicUrl } from "@/utils/publicUrl";

export default function NoItems() {
  return (
    <section
      className="flex flex-col items-center text-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 px-6 py-16 mb-10"
      aria-labelledby="empty-cart-title"
    >
      <svg className="w-16 h-16 text-zinc-600" aria-hidden="true">
        <use href={publicUrl("sprite-core.svg#icon-cart")} />
      </svg>
      <h2 id="empty-cart-title" className="text-white text-2xl">
        Your cart is empty
      </h2>
      <p className="text-zinc-400 max-w-sm">
        You haven't added any items yet. Browse our products and find something you like.
      </p>
      <Link
        to="/shop"
        className="bg-emerald-700 text-white rounded px-6 py-3 hover:opacity-80"
      >
        Continue shopping
      </Link>
    </section>
  );
}
