import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { translations } from "../data/translations";
import "./shopPages.css";
export default function Products() {
  const [params] = useSearchParams();
  const query = (params.get("search") || "").toLowerCase();
  const list = products.filter((p) => p.name.toLowerCase().includes(query));
  const language = useSelector((s) => s.shop.language);
  const t = translations[language];
  return (
    <main className="shop-page">
      <h1>{query ? `${t.search}: ${params.get("search")}` : t.ourProducts}</h1>
      {list.length ? (
        <div className="shop-grid product-list-grid">
          {list.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </main>
  );
}
