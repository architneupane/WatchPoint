import axios from "axios";

function EsewaButton({ amount }) {

  const handlePayment = () => {
    axios
      .post("http://localhost:8000/api/payments/verify", {
        amount,
      })
      .then((res) => {
        const data = res.data.data
        console.log(data);
        console.log(typeof(data.tax_amount));
        

        const form = document.createElement("form");
        form.setAttribute("method", "post");
        form.setAttribute(
          "action",
          "https://rc-epay.esewa.com.np/api/epay/main/v2/form"
        );

        const fields = {
          tax_amount: data.tax_amount,
          total_amount: data.total_amount,
          transaction_uuid: data.transaction_uuid,
          product_code: data.product_code,
          product_service_charge: 0,
          product_delivery_charge: 0,
          success_url: "https://developer.esewa.com.np/success",
          failure_url: "https://developer.esewa.com.np/failure",
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

        document.body.removeChild(form);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button onClick={handlePayment}>Pay with Esewa</button>
    </div>
  );
}

export default EsewaButton;
