import axios from "axios";
import toast from "react-hot-toast";

function EsewaButton({ deliveryData, amount = 0, orderId }) {
  const handlePayment = async () => {
    try {
      if (!amount || amount <= 0) {
        toast.error("Invalid amount");
      }

      if (!orderId) {
        toast.error("Order ID is missing");
      }

      const response = await axios.post(
        "http://localhost:8000/api/payments/verify",
        {
          deliveryData,
          amount: amount.toString(),
          orderId,
        },
        {
          withCredentials: true,
        }
      );

      const data = response.data.data;

      localStorage.setItem("transaction_uuid", data.transaction_uuid);
      localStorage.setItem("total_amount", data.total_amount);
      localStorage.removeItem("error_message");

      const form = document.createElement("form");
      form.setAttribute("method", "POST");
      form.setAttribute(
        "action",
        "https://rc-epay.esewa.com.np/api/epay/main/v2/form"
      );

      const fields = {
        amount: data.total_amount,
        tax_amount: data.tax_amount,
        total_amount: data.total_amount,
        transaction_uuid: data.transaction_uuid,
        product_code: data.product_code,
        product_service_charge: "0",
        product_delivery_charge: "0",
        success_url: "http://localhost:5173/success",
        failure_url: "http://localhost:5173/failure",
        signed_field_names: "total_amount,transaction_uuid,product_code",
        signature: data.signature,
      };

      for (const key in fields) {
        const input = document.createElement("input");
        input.setAttribute("type", "hidden");
        input.setAttribute("name", key);
        input.setAttribute("value", fields[key]);
        form.appendChild(input);
      }

      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || "Payment initialization failed. Please try again.";
      toast.error(errorMessage);
      console.error("Payment initialization failed:", error);
    }
  };

  return (
    <div >
      <button style={{color: '#3cc850', border: "none" , fontSize: "larger", marginLeft: '140px', marginTop: '10px'}} type="button" onClick={handlePayment}>
      <span>eSewa</span>
      </button>
    </div>
  );
}

export default EsewaButton;
