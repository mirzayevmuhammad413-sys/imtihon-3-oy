# Exclusive e-commerce React project

## Setup
1. Install Node.js LTS.
2. Open this project folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev`.

## Packages
This project uses React, React Router, Redux Toolkit, React Redux, React Icons, Swiper and Firebase.

## Firebase
`src/firebase.js` is currently a placeholder. Replace it with your Firebase app configuration and export `auth`, for example:

```js
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = { /* your Firebase web config */ };
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

In Firebase Console, enable Authentication > Sign-in method > Email/Password. Google sign-in can be enabled if you want the Google button to work.

## Features
- Redux Toolkit wishlist and cart (saved to localStorage)
- Product detail page
- Product search
- Checkout demo flow
- English, Russian and Uzbek language selector
- Firebase email/password login and registration (after adding your own Firebase config)
