import React, { useEffect, useState } from "react";
import "./Kids.css";
import Cards from "../../components/Cards/Cards.jsx";
import axios from "axios";

function Kids() {

  const[products, setProducts] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:8000/api/products/allproducts?category=Kids')
    .then(res => setProducts(res.data.data))
  },[])

  return (
    <div className="kids">
      <div className="heading">
        <h1>KIDS WATCH COLLECTION</h1>
        <p>Find the best and latest watches for your style</p>
      </div>
      <Cards products={products} />
    </div>
  );
}

export default Kids;