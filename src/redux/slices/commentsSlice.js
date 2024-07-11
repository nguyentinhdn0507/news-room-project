import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import commentsApi from "../../http/comments";

const initialState = {
  comments: [],
  loading: false,
  error: null,
};

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async ({ page, pageSize }) => {
    try {
      const response = await commentsApi.getAllComments({ page, pageSize });
      return response;
    } catch (error) {
      return { error: error.message };
    }
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.loading = false;
        state.comments = action.payload;
        state.error = null;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export const selectComments = (state) => state.comments;
export const selectLoading = (state) => state.comments.loading;
export const selectError = (state) => state.error;

export default commentsSlice.reducer;
