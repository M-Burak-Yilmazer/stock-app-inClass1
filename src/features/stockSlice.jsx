import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  purchases: [],
  brands: [],
  sales: [],
  categories: [],
  loading: false,
  error: false,
  firms: [],
};

const stockSlice = createSlice({
  name: second,
  initialState,
  reducers: {},
});

export const {} = stockSlice.actions;

export default stockSlice.reducer;
