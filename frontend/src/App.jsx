import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Loader } from "./components/Loader";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading, setPortfolioData } from "./redux/rootSlice";

function App() {
  const dispatch = useDispatch();
  const { loading, portfolioData } = useSelector((state) => state.root);

  const getPortfolioData = async () => {
    dispatch(showLoading());
    try {
      const response = await axios.get("/api/get-portfolio-data");
      dispatch(setPortfolioData(response.data));
    } catch (error) {
      console.log("error,,,,,,,,", error);
    } finally {
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getPortfolioData();
  }, []);

  useEffect(() => {
    console.log(portfolioData);
  }, [portfolioData]);

  return (
    <>
      <BrowserRouter>
        {loading ? <Loader /> : null}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
