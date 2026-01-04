import React, { useEffect, useState } from "react";
import "./Men.css";
import Cards from "../../components/Cards/Cards.jsx";
import axios from "axios";

function Men() {
  const[products, setProducts] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:8000/api/products/allproducts?productCategory=men')
    .then(res => {setProducts(res.data.data)
      console.log(res.data.data)})
   },[])

  return (
    <div className="men">
      <div className="heading">
        <h1>MEN WATCH COLLECTION</h1>
        <p>Find the best and latest watches for your style</p>
      </div>
      <Cards products={products}/>
    </div>
  );
}

export default Men;
