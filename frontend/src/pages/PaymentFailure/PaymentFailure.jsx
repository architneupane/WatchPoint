import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function PaymentFailure() {
  const navigate = useNavigate();
  const [transactionUUID, setTransactionUUID] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const uuid = localStorage.getItem("transaction_uuid");
    const error = localStorage.getItem("error_message");
    
    setTransactionUUID(uuid);
    setErrorMessage(error);

    if (error) {
      toast.error(error);
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      navigate("/delivery-detail");
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <div style={{ textAlign: "center", padding: "40px", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div>
        <h1>✗ Payment Failed</h1>
        <p>Unfortunately, your payment could not be processed.</p>
        
        {errorMessage && (
          <div style={{
            backgroundColor: "#fee2e2",
            color: "#991b1b",
            padding: "15px",
            borderRadius: "8px",
            margin: "20px auto",
            border: "1px solid #fecaca",
            maxWidth: "400px",
          }}>
            <h3>Error Details:</h3>
            <p>{errorMessage}</p>
          </div>
        )}

        {transactionUUID && (
          <p>
            <strong>Transaction ID:</strong> {transactionUUID}
          </p>
        )}

        <p>Redirecting to payment page in <strong>{countdown}</strong> seconds...</p>

        <div style={{ marginTop: "20px", display: "flex", gap: "10px", justifyContent: "center" }}>
          <button
            onClick={() => {
              localStorage.removeItem("error_message");
              navigate("/delivery-detail");
            }}
            style={{
              padding: "10px 20px",
              cursor: "pointer",
              backgroundColor: "#ef4444",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          >
            Try Again
          </button>
          <button
            onClick={() => navigate("/")}
            style={{
              padding: "10px 20px",
              cursor: "pointer",
              backgroundColor: "#6b7280",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentFailure;