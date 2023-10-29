import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RestaurantCard from "./components/RestaurantCard";
import { Body } from "./components/Body";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
  //{HeadingComponent()}
  //<HeadingComponent></HeadingComponent>
);
