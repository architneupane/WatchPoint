import { useCart } from "../../Context/CartContext";
import "../DeliveryDetail/DeliveryDetail.css";
import EsewaButton from "../../components/EsewaButton/EsewaButton";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { useEffect, useState } from "react";
import axios from "axios";

function DeliveryDetail() {
    const {subTotal} = useCart()
    const [orderId, setOrderId] = useState('')
 
    const deliveryCharge = 100;
    const totalPrice = subTotal + deliveryCharge;

    useEffect(()=>{
      axios.get('http://localhost:8000/api/payments/getorderid',{withCredentials: true})
      .then(res => setOrderId(res.data.data._id))
      .catch(err => console.error(err));
    },[])

  return (
    <div className="delivery">
      <form className="delivery-details">
        <h1>Delivery Details</h1>
        <div>
          <h3>Address Details</h3> 
          <select className="city-list" name="deliveryCity">
            <option value="" disabled hidden>
              Choose a City
            </option>
            <option value="Kathmandu">Kathmandu</option>
            <option value="Bhaktapur">Bhaktapur</option>
            <option value="Lalitpur">Lalitpur</option>
            <option value="Butwal">Butwal</option>
            <option value="Pokhara">Pokhara</option>
          </select>
          <input
            className="delivery-address"
            type="text"
            name="deliveryAddress"
            placeholder="Address"
            //   onChange={handleChange}
          />
        </div>

        <div className="reciever-details">
          <h3>Receiver Details</h3>
          <div className="reciever-detail">
            <div>
              <label htmlFor="fullName">Full Name :</label>
              <br />
              <input type="text" name="fullName" placeholder="Full Name" />
            </div>

            <div>
              <label htmlFor="contactNumber">Contact Number :</label> <br />
              <input
                type="number"
                name="contactNo"
                placeholder="Contact Number"
                //   onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="payment" >
            <h1>Payment</h1>
          <div className="payment-method">
            <button className="cash-on-delivery">Cash On Delivery</button>

          </div>
        </div>
      </form>

      <div className="summary">
            <h1 className="summary-heading">Summary</h1>
            <div className="detail-row">
              <span className="lable">
                Subtotal <HiOutlineQuestionMarkCircle />
              </span>
              <span className="value">{subTotal}</span>
            </div>
            <div className="detail-row">
              <span className="lable">Delivery & Handling Charge</span>
              <span className="value">{deliveryCharge}</span>
            </div>
            <hr />
            <div className="total">
              <span className="lable">Total</span>
              <span>{totalPrice}</span>
            </div>
          </div>
            <div className="esewa"><EsewaButton amount={totalPrice} orderId={orderId} /></div>
    </div>
  );
}

export default DeliveryDetail;
