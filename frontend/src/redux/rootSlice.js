import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    loading: false,
    portfolioData: null,
    isReloadData: false, 
  },
  reducers: {
    showLoading: (state, action) => {
      state.loading = true;
    },
    hideLoading: (state, action) => {
      state.loading = false;
    },
    setPortfolioData: (state, action) => {
      state.portfolioData = action.payload;
    },
    setReloadData: (state, action) => {
      state.isReloadData = action.payload;
    },
  },
});

export default rootSlice.reducer;
export const { showLoading, hideLoading, setPortfolioData, setReloadData, setSelectedItemsForEdit} =
  rootSlice.actions;
