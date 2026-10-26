import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import {
  FaMobileAlt,
  FaDesktop,
  FaCamera,
  FaHeadphones,
  FaGamepad,
} from "react-icons/fa";
import { BsSmartwatch } from "react-icons/bs";
import img1 from "../../assets/img1.png";
import big1 from "../../assets/bigimg1.png";
import big2 from "../../assets/bigimg2.png";
import big3 from "../../assets/bigimg3.png";
import big4 from "../../assets/bigimg4.png";
import big5 from "../../assets/bigimg5.png";
import { products } from "../../data/products";
import { translations } from "../../data/translations";
import ProductCard from "../../components/ProductCard";
import "swiper/css";
import "swiper/css/pagination";
import "./home.css";

export default function Home() {
  const language = useSelector((state) => state.shop.language);
  const t = translations[language];
  return (
    <>
      <section className="section1">
        <aside className="aside1">
          <a href="#products">
            Woman’s Fashion <span>›</span>
          </a>
          <a href="#products">
            Men’s Fashion <span>›</span>
          </a>
          <a href="#products">Electronics</a>
          <a href="#products">Home & Lifestyle</a>
          <a href="#products">Medicine</a>
          <a href="#products">Sports & Outdoor</a>
          <a href="#products">Baby’s & Toys</a>
          <a href="#products">Groceries & Pets</a>
          <a href="#products">Health & Beauty</a>
        </aside>
        <div className="swiper1">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            className="swiper2"
          >
            {[
              {
                label: " iPhone 14 Series",
                title: (
                  <>
                    Up to 10%
                    <br />
                    off Voucher
                  </>
                ),
              },
              {
                label: "Samsung Galaxy Series",
                title: (
                  <>
                    Up to 20%
                    <br />
                    off Voucher
                  </>
                ),
              },
              {
                label: "New Electronics",
                title: (
                  <>
                    Special
                    <br />
                    Offers
                  </>
                ),
              },
            ].map((item) => (
              <SwiperSlide key={item.label}>
                <div className="swiper3">
                  <div className="swiper4">
                    <p>{item.label}</p>
                    <h1>{item.title}</h1>
                    <a href="#products">{t.shopNow} →</a>
                  </div>
                  <img src={img1} alt={item.label} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="section2">
        <div className="sale1">
          <p className="sale2">{t.today}</p>
          <h1>{t.flashSales}</h1>
          <div className="functional-products sale-products">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} type="sale" />
            ))}
          </div>
          <div className="sale5">
            <Link to="/products">{t.viewAll}</Link>
          </div>
        </div>
      </section>

      <div className="cat1">
        <div className="cat2">
          <p>
            <span></span> {t.categories}
          </p>
          <div className="cat3">
            <h1>{t.browseCategory}</h1>
          </div>
        </div>
        <div className="cat5">
          <div className="cat6">
            <FaMobileAlt />
            <p>Phones</p>
          </div>
          <div className="cat6">
            <FaDesktop />
            <p>Computers</p>
          </div>
          <div className="cat6">
            <BsSmartwatch />
            <p>SmartWatch</p>
          </div>
          <div className="cat6 active">
            <FaCamera />
            <p>Camera</p>
          </div>
          <div className="cat6">
            <FaHeadphones />
            <p>HeadPhones</p>
          </div>
          <div className="cat6">
            <FaGamepad />
            <p>Gaming</p>
          </div>
        </div>
      </div>

      <div className="best1" id="products">
        <div className="best2">
          <div>
            <p className="best3">
              <span></span> {t.thisMonth}
            </p>
            <h1>{t.bestSelling}</h1>
          </div>
          <Link className="best4" to="/products">
            {t.viewAll}
          </Link>
        </div>
        <div className="best5 functional-products">
          {products.slice(4, 8).map((product) => (
            <ProductCard key={product.id} product={product} type="best" />
          ))}
        </div>
      </div>

      <div className="big1">
        <img src={big1} alt="Featured promotion" />
      </div>

      <div className="explore1">
        <p className="explore2">
          <span></span> {t.ourProducts}
        </p>
        <div className="explore3">
          <h1>{t.exploreProducts}</h1>
        </div>
        <div className="explore5 functional-products">
          {products.slice(8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="explore14">
          <Link to="/products">{t.viewAll}</Link>
        </div>
      </div>

      <div className="arrival1">
        <p className="arrival2">
          <span></span> {t.featured}
        </p>
        <h1>{t.newArrival}</h1>
        <div className="arrival3">
          <div className="arrival4">
            <img src={big2} alt="PlayStation 5" />
            <div className="arrival5">
              <h3>PlayStation 5</h3>
              <p>Black and White version of the PS5 coming out on sale.</p>
              <a href="#products">{t.shopNow}</a>
            </div>
          </div>
          <div className="arrival6">
            <div className="arrival7">
              <img src={big3} alt="Women's Collections" />
              <div className="arrival8">
                <h3>Women's Collections</h3>
                <p>Featured woman collections that give you another vibe.</p>
                <a href="#products">{t.shopNow}</a>
              </div>
            </div>
            <div className="arrival9">
              <div className="arrival10">
                <img src={big4} alt="Speakers" />
                <div className="arrival8">
                  <h3>Speakers</h3>
                  <p>Amazon wireless speakers</p>
                  <a href="#products">{t.shopNow}</a>
                </div>
              </div>
              <div className="arrival10">
                <img src={big5} alt="Perfume" />
                <div className="arrival8">
                  <h3>Perfume</h3>
                  <p>GUCCI INTENSE OUD EDP</p>
                  <a href="#products">{t.shopNow}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="arrival11">
          <div className="arrival12">
            <div className="arrival13"></div>
            <h4>
              {t.freeDelivery === "Free delivery for all orders over $140"
                ? "FREE AND FAST DELIVERY"
                : language === "ru"
                  ? "БЕСПЛАТНАЯ БЫСТРАЯ ДОСТАВКА"
                  : "BEPUL VA TEZKOR YETKAZISH"}
            </h4>
            <p>{t.freeDelivery}</p>
          </div>
          <div className="arrival12">
            <div className="arrival13"></div>
            <h4>{t.customerService}</h4>
            <p>Friendly 24/7 customer support</p>
          </div>
          <div className="arrival12">
            <div className="arrival13"></div>
            <h4>{t.moneyBack}</h4>
            <p>We return money within 30 days</p>
          </div>
        </div>
      </div>
    </>
  );
}
