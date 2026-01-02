import React from 'react'

function AdminDashboard() {
  return (
    <div>
        <h1>Product Listing</h1>
        <form action="" className='product-details-form'>
            <div className='input-box'>
            <label htmlFor="product-name">Product Name</label>
            <input type="text" name="productName" placeholder='Product Name' />
            </div>

            <div className='input-box'>
            <label htmlFor="product-description">Product Description</label>
            <input type="text" name="productDescription" placeholder='Product Description' />
            </div>

            <div className='input-box'>
            <label htmlFor="product-price">Product Price</label>
            <input type="number" name="productPrice" placeholder='Product Price' />
            </div>

            <div className='input-box'>
            <label htmlFor="product-image">Product Image</label>
            <input type="text" name="productImage" placeholder='Product Image' />
            </div>
            
            <div className='input-box'>
            <label htmlFor="product-category">Product Category</label>
            <select name="product-category" >
                <option value="" disabled selected>Choose Product Category</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
            </select>
            </div>
        </form>
    </div>
  )
}

export default AdminDashboard