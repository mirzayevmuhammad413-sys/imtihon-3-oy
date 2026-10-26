
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBSZdoOl4fEF3M2phWfs98o5GRVg5p4XeM",
  authDomain: "imtixon-49060.firebaseapp.com",
  projectId: "imtixon-49060",
  storageBucket: "imtixon-49060.firebasestorage.app",
  messagingSenderId: "857901533353",
  appId: "1:857901533353:web:dc1de61a68b85c6cc201b8",
  measurementId: "G-MJHX90BRXR",
};

const app = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);

export const auth = getAuth(app);

isSupported()
  .then((ok) => {
    if (ok) {
      getAnalytics(app);
    }
  })
  .catch(() => {});
