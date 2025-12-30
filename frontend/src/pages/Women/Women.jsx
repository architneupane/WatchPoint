import React from "react";
import "./Women.css";
import Cards from "../../components/Cards/Cards.jsx";

function Women() {
  return (
    <div className="women">
      <div className="heading">
        <h1>WOMEN WATCH COLLECTION</h1>
        <p>Find the best and latest watches for your style</p>
      </div>
      <Cards />
      <Cards />
    </div>
  );
}

export default Women;
