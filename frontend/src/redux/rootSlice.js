import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    loading: false,
    portfolioData: null,
    isExpFormShow: false,
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
    showExpForm: (state, action) =>{
      state.isExpFormShow = true;
    },
    hideExpForm: (state, action) =>{
      state.isExpFormShow = false;
    }
  },
});

export default rootSlice.reducer;
export const { showLoading, hideLoading, setPortfolioData, showExpForm, hideExpForm } =
  rootSlice.actions;
