import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { translations } from "../../data/translations";
import "./footer.css";
export default function Footer() {
  const language = useSelector((s) => s.shop.language);
  const t = translations[language];
  return (
    <footer className="footer1">
      <div className="footer2">
        <div className="footer3">
          <h3>Exclusive</h3>
          <h4>{t.subscribe}</h4>
          <p>{t.emailOffer}</p>
          <form
            className="footer4"
            onSubmit={(e) => {
              e.preventDefault();
              window.alert(t.orderSuccess);
            }}
          >
            <input type="email" required placeholder={t.email} />
            <button type="submit">▷</button>
          </form>
        </div>
        <div className="footer3">
          <h4>{t.support}</h4>
          <p>111 Bijoy sarani, Dhaka,</p>
          <p>DH 1515, Bangladesh.</p>
          <p className="footer5">exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div className="footer3">
          <h4>{t.account}</h4>
          <Link to="/login">
            {t.login} / {t.signup}
          </Link>
          <Link to="/cart">{t.cart}</Link>
          <Link to="/wishlist">{t.wishlist}</Link>
          <Link to="/">{t.home}</Link>
        </div>
        <div className="footer3">
          <h4>Quick Link</h4>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms Of Use</a>
          <a href="#faq">FAQ</a>
          <Link to="/contact">{t.contact}</Link>
        </div>
        <div className="footer3">
          <h4>Download App</h4>
          <p className="footer6">Save $3 with App New User Only</p>
          <div className="footer7">
            <div className="footer8">QR</div>
            <div className="footer9">
              <button type="button">▶ Google Play</button>
              <button type="button"> App Store</button>
            </div>
          </div>
          <div className="footer10">
            <a href="#facebook">f</a>
            <a href="#x">𝕏</a>
            <a href="#instagram">◎</a>
            <a href="#linkedin">in</a>
          </div>
        </div>
      </div>
      <div className="footer11">
        <p>© Copyright Exclusive 2026. All rights reserved</p>
      </div>
    </footer>
  );
}
