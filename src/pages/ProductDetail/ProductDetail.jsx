import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, toggleWishlist } from "../../store/store";
import { products } from "../../data/products";
import { translations } from "../../data/translations";
import "../shopPages.css";
export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const dispatch = useDispatch();
  const language = useSelector((s) => s.shop.language);
  const t = translations[language];
  if (!product)
    return (
      <main className="shop-page">
        <h1>Product not found</h1>
        <Link to="/">{t.continueShopping}</Link>
      </main>
    );
  return (
    <main className="shop-page">
      <div className="detail-page">
        <img src={product.image} alt={product.name} />
        <div>
          <p className="detail-category">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="detail-rating">
            {"★".repeat(product.rating)}
            {"☆".repeat(5 - product.rating)} ({product.reviews})
          </p>
          <h2>${product.price}</h2>
          <p>Quality product with a simple and modern design.</p>
          <div className="detail-actions">
            <button onClick={() => dispatch(addToCart(product))}>
              {t.addToCart}
            </button>
            <button
              className="secondary"
              onClick={() => dispatch(toggleWishlist(product))}
            >
              {t.wishlist} ♡
            </button>
          </div>
          <hr />
          <p>✓ {t.freeDelivery}</p>
          <p>✓ {t.moneyBack}</p>
        </div>
      </div>
    </main>
  );
}
