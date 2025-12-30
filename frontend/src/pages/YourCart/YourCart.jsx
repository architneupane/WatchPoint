import axios from "axios"
import "../YourCart/YourCart.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin7Line } from "react-icons/ri";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";


function YourCart() {

  const navigate = useNavigate()

  useEffect(()=>{
    axios.get("http://localhost:8000/api/users/verify",
      {withCredentials: true}
    )
    .then(()=>{
      navigate("/cart")
    })
    .catch(()=>{
      navigate("/login")
      console.log("User not Authenticate")
    })
  },[navigate])

  return (
    <div className="cart">
      <div className="your-cart">
        <h1>Your Cart</h1>

        {/* Cards */}
        <div className="product">
          {/* Image of Product */}
          <div className="img-container">
            <img src="watch6.jpg" alt="" />
          </div>
          {/* Product detail */}
          <div className="product-detail">
            <div className="product-details">
              <div className="details">
                <h4>Badacore Tshirt</h4>
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
              {/* Product price */}
              <div className="price">
                <h4>NPR 34979</h4>
              </div>
            </div>

            {/* Product option to delete or add */}
            <div className="options">
              <div className="delete-option">
                <button><RiDeleteBin7Line /></button>
              </div>
              <ul>
                <li>
                  <button><CiCircleMinus /></button>
                </li>
                <li>
                  <p>1</p>
                </li>
                <li>
                  <button><CiCirclePlus /></button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="product">
          {/* Image of Product */}
          <div className="img-container">
            <img src="watch6.jpg" alt="" />
          </div>
          {/* Product detail */}
          <div className="product-detail">
            <div className="product-details">
              <div className="details">
                <h4>Badacore Tshirt</h4>
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
              {/* Product price */}
              <div className="price">
                <h4>NPR 34979</h4>
              </div>
            </div>

            {/* Product option to delete or add */}
            <div className="options">
              <div className="delete-option">
                <button><RiDeleteBin7Line /></button>
              </div>
              <ul>
                <li>
                  <button><CiCircleMinus /></button>
                </li>
                <li>
                  <p>1</p>
                </li>
                <li>
                  <button><CiCirclePlus /></button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="product">
          {/* Image of Product */}
          <div className="img-container">
            <img src="watch6.jpg" alt="" />
          </div>
          {/* Product detail */}
          <div className="product-detail">
            <div className="product-details">
              <div className="details">
                <h4>Badacore Tshirt</h4>
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
              {/* Product price */}
              <div className="price">
                <h4>NPR 34979</h4>
              </div>
            </div>

            {/* Product option to delete or add */}
            <div className="options">
              <div className="delete-option">
                <button><RiDeleteBin7Line /></button>
              </div>
              <ul>
                <li>
                  <button><CiCircleMinus /></button>
                </li>
                <li>
                  <p>1</p>
                </li>
                <li>
                  <button><CiCirclePlus /></button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="summary">
        <h1>Summary</h1>
        <div className="detail-row">
          <span className="lable">Subtotal <HiOutlineQuestionMarkCircle /></span>
          <span className="value">7834</span>
        </div>
        <div className="detail-row">
          <span className="lable">Estimated Delivery & Handling</span>
          <span className="value">free</span>
        </div>
        <div className="detail-row">
          <span className="lable">Estimated Tases <HiOutlineQuestionMarkCircle /> </span>
          <span className="value">7834</span>
        </div><br /><br /><br />
        <hr />
        <div className="total">
          <span className="lable">Total</span>
          <span className="value">200</span>
        </div>
        <button className="checkout-now">
          Checkout Now
        </button>
      </div>
    </div>
  );
}

export default YourCart;
