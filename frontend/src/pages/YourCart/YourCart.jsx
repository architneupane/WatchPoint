import axios from "axios";
import "../YourCart/YourCart.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin7Line } from "react-icons/ri";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";

function YourCart() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  const deliveryCharge = 100;
  const totalPrice = products.reduce(
    (total, item) => total + item.product.price,
    0
  );

  const handleRemoveToCart = (itemId) => {
    axios
      .post(
        "http://localhost:8000/api/carts/removecartitem",
        { itemId },
        { withCredentials: true }
      )
      .then((res) => {
        setProducts((prev) => prev.filter((item) => item._id !== itemId));
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users/verify", { withCredentials: true })
      .then(() => {
        navigate("/cart");
      })
      .catch(() => {
        navigate("/login");
        console.log("User not Authenticate");
      });
  }, [navigate]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/carts/getcartitems", {
        withCredentials: true,
      })
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="cart">
      <div className="your-cart">
        <h1>Your Cart</h1>
        {products.map((item) => (
          <div key={item._id} className="product">
            <div className="img-container">
              <img src={item.product.image} alt="" />
            </div>
            <div className="product-detail">
              <div className="product-details">
                <div className="details">
                  <h4>{item.product.name}</h4>
                </div>

                <div className="price">
                  <h4>NPR {item.product.price}</h4>
                </div>
              </div>

              <div className="options">
                <div className="product-description">
                  <p>{item.product.description}</p>
                </div>
                <div>
                  <button onClick={() => handleRemoveToCart(item._id)}>
                    <RiDeleteBin7Line />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="summary">
        <h1 className="summary-heading">Summary</h1>
        <div className="detail-row">
          <span className="lable">
            Subtotal <HiOutlineQuestionMarkCircle />
          </span>
          <span className="value">{totalPrice}</span>
        </div>
        <div className="detail-row">
          <span className="lable">Delivery & Handling Charge</span>
          <span className="value">{deliveryCharge}</span>
        </div>
        <hr />
        <div className="total">
          <span className="lable">Total</span>
          <span>{totalPrice + deliveryCharge}</span>
        </div>

        <div className="delivery-details">
          <h1>Delivery Details</h1>
          <div>
            <span>Address Details</span> <br />
            <select className="city-list" name="city">
              <option value="" disabled selected>
                Choose a City
              </option>
              <option value="">Kathmandu</option>
              <option value="">Bhaktapur</option>
              <option value="">Lalitpur</option>
              <option value="">Butwal</option>
              <option value="">Pokhara</option>
            </select>
            <input
              className="delivery-address"
              type="text"
              name="delivery-address"
              placeholder="Address"
            />
          </div>

          <div className="reciever-details">
            <span>Reciever Details</span>
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
                  name="contactNumber"
                  placeholder="Contact Number"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="checkout">
          <button className="cash-on-delivery" >Cash On Delivery</button>
          <button className="esewa">eSewa</button>
        </div>
      </div>
    </div>
  );
}

export default YourCart;
