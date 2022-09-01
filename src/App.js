import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Static-components/Navbar";
import Home from "./components/Pages/Home";
import Checkout from "./components/Pages/Checkout";
import Login from "./components/Pages/Login";
import NavbarSecond from "./components/Static-components/NavbarSecond";
import Products from "./components/Pages/Products";
import Footer from "./components/Static-components/Footer";
import RegisterUser from "./components/Pages/RegisterUser";
import GoToTop from "./components/Static-components/GoToTop";
import ProductMap from "./components/Pages/ProductMap";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/login"
            element={
              <Fragment>
                <Login />
                <GoToTop />
              </Fragment>
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/productcheckout"
            element={
              <Fragment>
                <Navbar />
                <NavbarSecond />
                <ProductMap />
                <Footer />
                <GoToTop />
              </Fragment>
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/register"
            element={
              <Fragment>
                <RegisterUser />
                <GoToTop />
              </Fragment>
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/checkout"
            element={
              <>
                <Navbar />
                <NavbarSecond />
                <Checkout />
                <Footer />
                <GoToTop />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/products"
            element={
              <Fragment>
                <Navbar />
                <NavbarSecond />
                <Products />
                <Footer />
                <GoToTop />
              </Fragment>
            }
          />
        </Routes>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Fragment>
                <Navbar />
                <NavbarSecond />
                <Home />
                <Footer />
                <GoToTop />
              </Fragment>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
