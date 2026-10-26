import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useSelector } from "react-redux";
import { auth } from "../../firebase";
import { translations } from "../../data/translations";
import loginImage from "../../assets/bigim11.png";
import "./Login.css";

export default function Login() {
  const language = useSelector((s) => s.shop.language);
  const t = translations[language];
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function run(action) {
    setError("");
    if (!auth) {
      setError("Firebase sozlamasini src/firebase.js fayliga qo‘shing.");
      return;
    }
    setBusy(true);
    try {
      await action();
      navigate("/homePage");
    } catch (e) {
      setError(t.errors[e.code] || t.errors.generic);
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="login-layout">
      <div className="login-picture">
        <img src={loginImage} alt="Shopping" />
      </div>
      <form className="login-form" onSubmit={(e) => {
        e.preventDefault();
        run(() => signInWithEmailAndPassword(auth, email, password));
      }}>
        <h1>Log in to Exclusive</h1>
        <p className="login-subtitle">Enter your details below</p>
        <input
          required type="email" placeholder="Email or Phone Number"
          value={email} onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required type="password" placeholder="Password"
          value={password} onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="auth-error">{error}</p>}
        <div className="login-actions">
          <button disabled={busy}>{busy ? "Loading..." : "Log In"}</button>
          <Link className="forgot-link" to="/signup">Forgot Password?</Link>
        </div>
        <button className="auth-google" type="button" disabled={busy}
          onClick={() => run(() => signInWithPopup(auth, new GoogleAuthProvider()))}>
          {t.googleLogin}
        </button>
        <p className="auth-switch">Don’t have an account? <Link to="/signup">Sign Up</Link></p>
      </form>
    </main>
  );
}
