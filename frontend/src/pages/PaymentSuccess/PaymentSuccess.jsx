import React from "react";
import { useEffect } from "react";
import axios from "axios";

const PaymentSuccess = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)

    const data = {
     amt: params.get("amt"),
     refId: params.get("refId"),
     oid: params.get("oid")
    }
          
    axios.post('http://localhost:8000/api/payments/verify', data)
    .then((res)=> {res.data})
    .catch((err)=> {err})

  },[]);

  return <div><h1>Payment Success</h1></div>;
}

export default PaymentSuccess;
