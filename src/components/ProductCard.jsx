import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart, FaEye } from "react-icons/fa";
import { addToCart, toggleWishlist } from "../store/store";
import { translations } from "../data/translations";

export default function ProductCard({ product, type = "explore" }) {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.shop.language);
  const wishlist = useSelector((state) => state.shop.wishlist);
  const t = translations[language];
  const liked = wishlist.some((item) => item.id === product.id);
  const cardClass =
    type === "sale" ? "sale3" : type === "best" ? "best6" : "explore6";
  const imageClass =
    type === "sale" ? "sale4" : type === "best" ? "best7" : "explore7";
  const actionClass =
    type === "sale"
      ? "product-actions"
      : type === "best"
        ? "best8"
        : "explore8";

  return (
    <article className={cardClass}>
      <div className={imageClass}>
        {type === "sale" && <span>-25%</span>}
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} />
        </Link>
        <div className={actionClass}>
          <button
            type="button"
            aria-label={t.wishlist}
            title={t.wishlist}
            onClick={() => dispatch(toggleWishlist(product))}
          >
            {liked ? <FaHeart color="#db4444" /> : <FaRegHeart />}
          </button>
          <Link
            to={`/product/${product.id}`}
            aria-label={t.productDetails}
            title={t.productDetails}
          >
            <FaEye />
          </Link>
        </div>
        <button
          className={type === "sale" ? "" : "product-add-btn"}
          type="button"
          onClick={() => dispatch(addToCart(product))}
        >
          {t.addToCart}
        </button>
      </div>
      <Link className="product-name-link" to={`/product/${product.id}`}>
        {type === "sale" ? <h4>{product.name}</h4> : <h3>{product.name}</h3>}
      </Link>
      <p
        className={
          type === "sale" ? "price" : type === "best" ? "best9" : "explore9"
        }
      >
        ${product.price} {product.oldPrice && <del>${product.oldPrice}</del>}
      </p>
      <p
        className={
          type === "sale" ? "stars" : type === "best" ? "best10" : "explore10"
        }
      >
        {"★".repeat(product.rating)}
        {"☆".repeat(5 - product.rating)} <span>({product.reviews})</span>
      </p>
    </article>
  );
}
