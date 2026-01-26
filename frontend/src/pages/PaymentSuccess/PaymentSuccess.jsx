import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [countdown, setCountdown] = useState(3);
  const [transactionUUID, setTransactionUUID] = useState(null);


 useEffect(() => {
  const verifyPayment = async () => {
    try {
      const uuid = localStorage.getItem("transaction_uuid");
      const totalAmount = localStorage.getItem("total_amount");

      if (!uuid || !totalAmount) {
        toast.error("Payment data not found");
        navigate("/failure");
        return;
      }

      setTransactionUUID(uuid);

      const orderRes = await axios.get(
        "http://localhost:8000/api/payments/get-orderid",
        { withCredentials: true }
      );

      const orderId = orderRes.data?.data;

      if (!orderId) {
        toast.error("Order ID not found");
        navigate("/failure");
        return;
      }

      const response = await axios.post(
        "http://localhost:8000/api/payments/verify-response",
        {
          orderId,
          transaction_uuid: uuid,
          total_amount: totalAmount,
        },
        { withCredentials: true }
      );

      if (response.status === 200) {
        toast.success("Payment completed successfully!");
        localStorage.removeItem("transaction_uuid");
        localStorage.removeItem("total_amount");
        setLoading(false);
      }
    } catch (error) {
      console.error("Payment verification error:", error);
      toast.error("Payment verification failed");
      navigate("/failure");
    }
  };

  verifyPayment();
}, [navigate]);

  useEffect(() => {
    if (!loading) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      const redirectTimer = setTimeout(() => {
        navigate("/");
      }, 3000);

      return () => {
        clearInterval(timer);
        clearTimeout(redirectTimer);
      };
    }
  }, [loading, navigate]);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {loading ? (
        <div>
          <h1>Processing Payment...</h1>
          <p>Please wait while we verify your payment.</p>
        </div>
      ) : (
        <div>
          <h1>✓ Payment Successful!</h1>
          <p>Thank you for your purchase. Your order has been confirmed.</p>

          {transactionUUID && (
            <p>
              <strong>Transaction ID:</strong> {transactionUUID}
            </p>
          )}

          <p>
            Redirecting to home in <strong>{countdown}</strong> seconds...
          </p>

          <button
            onClick={() => navigate("/")}
            style={{
              padding: "10px 20px",
              marginTop: "20px",
              cursor: "pointer",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          >
            Go to Home Now
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentSuccess;
