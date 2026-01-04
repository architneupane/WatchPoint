import axios from "axios";
import "../YourCart/YourCart.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin7Line } from "react-icons/ri";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { useCart } from "../../Context/CartContext";

// import EsewaButton from "../../components/EsewaButton/EsewaButton";

function YourCart() {
  const { products, setProducts } = useCart();
  const { subTotal } = useCart();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const deliveryCharge = 100;
  const totalPrice = subTotal + deliveryCharge;

  // const [deliveryDetails, setDeliveryDetails] = useState({
  //   deliveryCity:"",
  //   deliveryAddress: "",
  //   fullName: "",
  //   contactNo: ""
  // })

const handleCheckOut = async () => {
  try {
    const res = await axios.post(
      "http://localhost:8000/api/payments/createorder",
      { amount: totalPrice },
      { withCredentials: true }
    );
    console.log(res.data.data);
    navigate("/delivery-detail");
  } catch (err) {
    console.error("Checkout failed:", err);
  }
};

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

  // const handleDeliveryDetails = () =>{

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
          <div key={item?._id} className="product">
            <div className="img-container">
              <img src={item?.product?.productImage} alt="" />
            </div>
            <div className="product-detail">
              <div className="product-details">
                <div className="details">
                  <h4>{item?.product?.productName}</h4>
                </div>
                <div className="price">
                  <h4>NPR {item?.product?.productPrice}</h4>
                </div>
              </div>

              <div className="options">
                <div className="product-description">
                  <p>{item?.product?.productDescription}</p>
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
        <div className="checkout">
          <button onClick={handleCheckOut}>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default YourCart;
