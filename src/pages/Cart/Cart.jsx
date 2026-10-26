import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity, removeFromCart } from "../../store/store";
import { translations } from "../../data/translations";
import "../shopPages.css";
export default function Cart() {
  const dispatch = useDispatch();
  const { cart, language } = useSelector((s) => s.shop);
  const t = translations[language];
  const total = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);
  return (
    <main className="shop-page">
      <h1>{t.cart}</h1>
      {!cart.length ? (
        <p>{t.emptyCart}</p>
      ) : (
        <>
          <div className="cart-table">
            <div className="cart-head">
              <span>Product</span>
              <span>{t.price}</span>
              <span>{t.quantity}</span>
              <span>{t.subtotal}</span>
              <span></span>
            </div>
            {cart.map((p) => (
              <div className="cart-row" key={p.id}>
                <Link className="cart-product" to={`/product/${p.id}`}>
                  <img src={p.image} alt={p.name} />
                  <span>{p.name}</span>
                </Link>
                <span>${p.price}</span>
                <input
                  aria-label={t.quantity}
                  type="number"
                  min="1"
                  value={p.quantity}
                  onChange={(e) =>
                    dispatch(
                      changeQuantity({ id: p.id, quantity: e.target.value }),
                    )
                  }
                />
                <strong>${p.price * p.quantity}</strong>
                <button
                  className="text-button"
                  onClick={() => dispatch(removeFromCart(p.id))}
                >
                  {t.remove}
                </button>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h2>
              {t.total}: ${total.toFixed(2)}
            </h2>
            <Link className="shop-button" to="/checkout">
              {t.checkout}
            </Link>
          </div>
        </>
      )}
      <Link className="shop-link" to="/">
        {t.continueShopping}
      </Link>
    </main>
  );
}
