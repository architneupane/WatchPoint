import axios from "axios";
import "../YourCart/YourCart.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin7Line } from "react-icons/ri";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";

function YourCart() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

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
                  <div className="detail-row">
                    <span className="label">Variant:</span>
                    <span className="value">Oversize</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">Size:</span>
                    <span className="value">XL</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">Color:</span>
                    <span className="value">Cream</span>
                  </div>
                </div>

                <div className="price">
                  <h4>NPR {item.product.price}</h4>
                </div>
              </div>

              <div className="options">
                <div className="delete-option">
                  <button onClick={() => handleRemoveToCart(item._id)}>
                    <RiDeleteBin7Line />
                  </button>
                </div>
                <ul>
                  <li>
                    <button>
                      <CiCircleMinus />
                    </button>
                  </li>
                  <li>
                    <p>1</p>
                  </li>
                  <li>
                    <button>
                      <CiCirclePlus />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

     { products.map( item => 
      <div className="summary">
        <h1>Summary</h1>
        <div className="detail-row">
          <span className="lable">
            Subtotal <HiOutlineQuestionMarkCircle />
          </span>
          <span className="value"></span>
        </div>
        <div className="detail-row">
          <span className="lable">Estimated Delivery & Handling</span>
          <span className="value">free</span>
        </div>
        <div className="detail-row">
          <span className="lable">
            Estimated Tases <HiOutlineQuestionMarkCircle />{" "}
          </span>
          <span className="value">7834</span>
        </div>
        <br />
        <br />
        <br />
        <hr />
        <div className="total">
          <span className="lable">Total</span>
          <span className="value">200</span>
        </div>
        <button className="checkout-now">Checkout Now</button>
      </div>
      )}
    </div>
  );
}

export default YourCart;
