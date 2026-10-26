import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { translations } from "../../data/translations";
import "./NotFound.css";
export default function NotFound() {
  const language = useSelector((s) => s.shop.language);
  const t = translations[language];
  return (
    <main className="container not-found">
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link className="primary-btn" to="/">
        {t.home}
      </Link>
    </main>
  );
}
