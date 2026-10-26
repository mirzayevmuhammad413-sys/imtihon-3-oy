import { configureStore, createSlice } from "@reduxjs/toolkit";

const read = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
};

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    wishlist: read("shop-wishlist"),
    cart: read("shop-cart"),
    language: localStorage.getItem("shop-language") || "en",
  },
  reducers: {
    toggleWishlist(state, action) {
      const product = action.payload;
      const exists = state.wishlist.some((item) => item.id === product.id);
      state.wishlist = exists
        ? state.wishlist.filter((item) => item.id !== product.id)
        : [...state.wishlist, product];
      localStorage.setItem("shop-wishlist", JSON.stringify(state.wishlist));
    },
    removeWishlist(state, action) {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload,
      );
      localStorage.setItem("shop-wishlist", JSON.stringify(state.wishlist));
    },
    addToCart(state, action) {
      const product = action.payload;
      const found = state.cart.find((item) => item.id === product.id);
      if (found) found.quantity += 1;
      else state.cart.push({ ...product, quantity: 1 });
      localStorage.setItem("shop-cart", JSON.stringify(state.cart));
    },
    changeQuantity(state, action) {
      const { id, quantity } = action.payload;
      const found = state.cart.find((item) => item.id === id);
      if (found) found.quantity = Math.max(1, Number(quantity) || 1);
      localStorage.setItem("shop-cart", JSON.stringify(state.cart));
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem("shop-cart", JSON.stringify(state.cart));
    },
    setLanguage(state, action) {
      state.language = action.payload;
      localStorage.setItem("shop-language", action.payload);
    },
    clearCart(state) {
      state.cart = [];
      localStorage.setItem("shop-cart", "[]");
    },
  },
});

export const {
  toggleWishlist,
  removeWishlist,
  addToCart,
  changeQuantity,
  removeFromCart,
  setLanguage,
  clearCart,
} = shopSlice.actions;
export const store = configureStore({ reducer: { shop: shopSlice.reducer } });
