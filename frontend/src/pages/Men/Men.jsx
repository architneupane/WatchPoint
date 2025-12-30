import React from "react";
import "./Men.css";
import Cards from "../../components/Cards/Cards.jsx";

function Men() {
  return (
    <div className="men">
      <div className="heading">
        <h1>MEN WATCH COLLECTION</h1>
        <p>Find the best and latest watches for your style</p>
      </div>
      <Cards />
      <Cards />
    </div>
  );
}

export default Men;
