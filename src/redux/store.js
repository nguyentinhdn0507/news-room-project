import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categoriesSlice";
import commentsReducer from "./slices/commentsSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    comments: commentsReducer,
  },
});

export default store;
