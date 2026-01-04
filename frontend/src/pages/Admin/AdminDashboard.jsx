import React, { useState } from "react";
import "./AdminDashboard.css";
import axios from "axios";

function AdminDashboard() {
  const [productNameForRemove, setProductNameForRemove] = useState({});
  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
    productImage: "",
    productCategory: "",
  });

  const handleChange = (e) => {
    setProductNameForRemove({ [e.target.name]: e.target.value });
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/products/addproduct", formData, {})
      .then((res) => {
        console.log(res?.data?.message);
      })
      .catch((err) => {
        console.log(err?.response?.data?.message);
      });
  };

  const handleRemoveProduct = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/products/removeproduct",
        productNameForRemove,
        {}
      )
      .then((res) => {
        console.log(res?.data?.message);
      })
      .catch((err) => {
        console.log(err?.response?.data?.message);
      });
  };

  return (
    <div className="admin-dashboard">
      <div className="product-listing">
        <h1>Product Listing</h1>

        <form onSubmit={handleAddProduct} className="product-details-form">
          <div className="input-box">
            <label>Product Name</label>
            <input
              type="text"
              name="productName"
              placeholder="Product Name"
              onChange={handleChange}
            />
          </div>

          <div className="input-box">
            <label>Product Description</label>
            <input
              type="text"
              name="productDescription"
              placeholder="Product Description"
              onChange={handleChange}
            />
          </div>

          <div className="input-box">
            <label>Product Price</label>
            <input
              type="number"
              name="productPrice"
              placeholder="Product Price"
              onChange={handleChange}
            />
          </div>

          <div className="input-box">
            <label>Product Image</label>
            <input
              type="text"
              name="productImage"
              placeholder="Product Image URL"
              onChange={handleChange}
            />
          </div>

          <div className="input-box">
            <label>Product Category</label>

            <select
              className="product-category"
              name="productCategory"
              value={formData.productCategory}
              onChange={handleChange}
              required
            >
              <option value="" disabled hidden>
                Choose Product Category
              </option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kids">Kids</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            Add Product
          </button>
        </form>
      </div>

      <div className="admin-right-side">
        <div className="insight-container">
          <h1>Insights</h1>
          <div className="insights">
            <p>Total Registered Users :</p>
            <p>Total Products :</p>
            <p>Total Orders :</p>
          </div>
        </div>

        <div className="product-delete">
          <h1>Product Removing</h1>
          <form onSubmit={handleRemoveProduct} method="post">
            <div className="input-box">
              <label>Product Name</label>
              <input
                type="text"
                name="productNameForRemove"
                placeholder="Product Name"
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="submit-btn">
              Remove Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
