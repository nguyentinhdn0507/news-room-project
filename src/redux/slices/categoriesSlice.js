// categoriesSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoryApi from "../../http/category";

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async ({ page, pageSize }) => {
    try {
      const response = await categoryApi.getAll({ page, pageSize });
      return { articles: response };
    } catch (error) {
      return { error: error.message };
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload.articles;
        state.error = null;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export const selectCategories = (state) => state.categories.categories;
export const selectLoading = (state) => state.categories.loading;
export const selectError = (state) => state.error;

export default categoriesSlice.reducer;
