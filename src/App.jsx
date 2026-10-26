import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "./firebase";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Home from "./pages/homePage/Home";
import About from "./pages/About/About";
import Contact from "./pages/contact/Contact";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart from "./pages/Cart/Cart";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout/Checkout";
import NotFound from "./pages/NotFound/NotFound";
import Account from "./pages/Account";

function PrivateRoute({ children, user }) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route
          path="/homePage"
          element={
            <PrivateRoute user={user}>
              <Home />
            </PrivateRoute>
          }
        />

        <Route path="/homepage" element={<Navigate to="/homePage" replace />} />

        <Route
          path="/account"
          element={
            <PrivateRoute user={user}>
              <Account />
            </PrivateRoute>
          }
        />

        <Route
          path="/about"
          element={
            <PrivateRoute user={user}>
              <About />
            </PrivateRoute>
          }
        />

        <Route
          path="/contact"
          element={
            <PrivateRoute user={user}>
              <Contact />
            </PrivateRoute>
          }
        />

        <Route
          path="/wishlist"
          element={
            <PrivateRoute user={user}>
              <Wishlist />
            </PrivateRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <PrivateRoute user={user}>
              <Cart />
            </PrivateRoute>
          }
        />

        <Route
          path="/product/:id"
          element={
            <PrivateRoute user={user}>
              <ProductDetail />
            </PrivateRoute>
          }
        />

        <Route
          path="/products"
          element={
            <PrivateRoute user={user}>
              <Products />
            </PrivateRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <PrivateRoute user={user}>
              <Checkout />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}
