import React, {useState} from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Loader } from './components/Loader'
function App() {
  const [showLoader, setShowLoader] = useState(false);
  return (
    <>
      <BrowserRouter>
        {showLoader ? <Loader /> : null}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
