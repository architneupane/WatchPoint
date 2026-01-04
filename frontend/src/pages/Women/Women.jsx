import React, { useEffect, useState } from "react";
import "./Women.css";
import Cards from "../../components/Cards/Cards.jsx";
import axios from "axios";

function Women() {
 const [products, setProducts] = useState([])

 useEffect(()=>{
  axios.get('http://localhost:8000/api/products/allproducts?productCategory=women')
  .then(res => setProducts(res.data.data))
 },[])

  return (
    <div className="women">
      <div className="heading">
        <h1>WOMEN WATCH COLLECTION</h1>
        <p>Find the best and latest watches for your style</p>
      </div>
      <Cards products={products} />
    </div>
  );
}

export default Women;
