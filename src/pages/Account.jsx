import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import "./shopPages.css";

export default function Account() {
  const [user, setUser] = useState(auth.currentUser);
  useEffect(() => onAuthStateChanged(auth, setUser), []);
  return (
    <main className="shop-page">
      <h1>My Account</h1>
      <p>Manage your account details here.</p>
      <div className="account-details">
        <p><strong>Name:</strong> {user?.displayName || "Not provided"}</p>
        <p><strong>Email:</strong> {user?.email || "Not available"}</p>
      </div>
    </main>
  );
}
