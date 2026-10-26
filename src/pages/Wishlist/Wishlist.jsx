import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeWishlist, addToCart } from "../../store/store";
import { translations } from "../../data/translations";
import "../shopPages.css";
export default function Wishlist() {
  const dispatch = useDispatch();
  const { wishlist, language } = useSelector((s) => s.shop);
  const t = translations[language];
  return (
    <main className="shop-page">
      <h1>
        {t.wishlist} ({wishlist.length})
      </h1>
      {!wishlist.length ? (
        <p>{t.emptyWishlist}</p>
      ) : (
        <div className="shop-grid">
          {wishlist.map((p) => (
            <article className="shop-card" key={p.id}>
              <Link to={`/product/${p.id}`}>
                <img src={p.image} alt={p.name} />
              </Link>
              <h3>{p.name}</h3>
              <p>${p.price}</p>
              <button onClick={() => dispatch(addToCart(p))}>
                {t.addToCart}
              </button>
              <button
                className="secondary"
                onClick={() => dispatch(removeWishlist(p.id))}
              >
                {t.remove}
              </button>
            </article>
          ))}
        </div>
      )}
      <Link className="shop-link" to="/">
        {t.continueShopping}
      </Link>
    </main>
  );
}
