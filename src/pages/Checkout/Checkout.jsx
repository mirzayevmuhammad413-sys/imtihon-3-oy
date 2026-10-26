import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../store/store";
import { translations } from "../../data/translations";
import "../shopPages.css";
export default function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart, language } = useSelector((s) => s.shop);
  const t = translations[language];
  const total = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);
  function submit(e) {
    e.preventDefault();
    dispatch(clearCart());
    window.alert(t.orderSuccess);
    navigate("/");
  }
  return (
    <main className="shop-page">
      <h1>{t.checkout}</h1>
      {!cart.length ? (
        <p>{t.emptyCart}</p>
      ) : (
        <div className="checkout-layout">
          <form className="checkout-form" onSubmit={submit}>
            <label>
              {t.name}
              <input required />
            </label>
            <label>
              {t.email}
              <input required type="email" />
            </label>
            <label>
              Address
              <input required />
            </label>
            <label>
              City
              <input required />
            </label>
            <button className="shop-button">{t.checkout}</button>
          </form>
          <aside className="checkout-summary">
            <h2>
              {t.total}: ${total.toFixed(2)}
            </h2>
            {cart.map((p) => (
              <p key={p.id}>
                {p.name} × {p.quantity} <strong>${p.price * p.quantity}</strong>
              </p>
            ))}
          </aside>
        </div>
      )}
    </main>
  );
}
