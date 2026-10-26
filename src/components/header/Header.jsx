import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../store/store";
import { translations } from "../../data/translations";
import "./header.css";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { language, wishlist, cart } = useSelector((state) => state.shop);
  const [search, setSearch] = useState("");
  const [showUserMenu, setShowUserMenu] = useState(false);
  const t = translations[language];
  async function handleLogout() {
    try {
      await signOut(auth);
      setShowUserMenu(false);
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Logout error:", error);
    }
  }

  function submitSearch(e) {
    e.preventDefault();
    navigate(`/products?search=${encodeURIComponent(search)}`);
  }
  return (
    <header className="header1">
      <div className="header2">
        <p>
          {t.saleText} <a href="#products">{t.shopNow}</a>
        </p>
        <div className="header3">
          <select
            aria-label="Language"
            value={language}
            onChange={(e) => dispatch(setLanguage(e.target.value))}
          >
            <option value="en">English</option>
            <option value="ru">Русский</option>
            <option value="uz">O‘zbekcha</option>
          </select>
        </div>
      </div>
      <div className="header4">
        <Link className="brand-name" to="/">
          Exclusive
        </Link>
        <nav className="header5">
          <NavLink to="/" end>
            {t.home}
          </NavLink>
          <NavLink to="/contact">{t.contact}</NavLink>
          <NavLink to="/about">{t.about}</NavLink>
          <NavLink to="/signup">{t.signup}</NavLink>
        </nav>
        <div className="header6">
          <form className="header7" onSubmit={submitSearch}>
            <input
              type="search"
              placeholder={t.search}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" aria-label="Search">
              ⌕
            </button>
          </form>
          <Link className="header8" to="/wishlist" aria-label={t.wishlist}>
            ♡{wishlist.length > 0 && <small>{wishlist.length}</small>}
          </Link>
          <Link className="header9" to="/cart" aria-label={t.cart}>
            🛒
            {cart.length > 0 && (
              <small>
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </small>
            )}
          </Link>
          <div className="user-menu-wrap">
            <button
              className="user-icon"
              type="button"
              aria-label="Account menu"
              onClick={() => setShowUserMenu(!showUserMenu)}
            >
              ♟
            </button>
            {showUserMenu && (
              <div className="user-dropdown">
                <Link to="/account" onClick={() => setShowUserMenu(false)}>♙ <span>Manage My Account</span></Link>
                <Link to="/account" onClick={() => setShowUserMenu(false)}>▣ <span>My Order</span></Link>
                <Link to="/account" onClick={() => setShowUserMenu(false)}>⊗ <span>My Cancellations</span></Link>
                <Link to="/account" onClick={() => setShowUserMenu(false)}>☆ <span>My Reviews</span></Link>
                <button type="button" onClick={handleLogout}>⇥ <span>Logout</span></button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
