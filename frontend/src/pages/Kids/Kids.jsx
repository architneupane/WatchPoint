import React from "react";
import "./Kids.css";
import Cards from "../../components/Cards/Cards.jsx";

function Kids() {
  return (
    <div className="kids">
      <div className="heading">
        <h1>KIDS WATCH COLLECTION</h1>
        <p>Find the best and latest watches for your style</p>
      </div>
      <Cards />
      <Cards />
    </div>
  );
}

export default Kids;