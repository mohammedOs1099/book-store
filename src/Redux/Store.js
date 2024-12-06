import { configureStore } from "@reduxjs/toolkit";
import book from "./BooksSlice.js";
import auth from "./AuthSlice.js";
const store = configureStore({
  reducer: { book, auth }
});
export default store;
