import './Cards.css'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

function Cards() {
  const [ProductName, setProductName] = useState("")
  const [ProductDescription, setProductDescription] = useState("")
  const [ProductPrice, setProductPrice] = useState("")
  const [ProductImage, setProductImage] = useState("")

  useEffect(()=>{
    axios.get('http://localhost:8000/api/products/allproducts',
      {withCredentials: true}
    )
    .then(res =>{
      setProductName(res.data.data.name)
      console.log(res.data)
      setProductDescription(res.data.data.description)
      setProductPrice(res.data.data.price)
      setProductImage(res.data.data.image)
    })
  })

  // const handleAddToCart = (e)=>{
  //   e.preventDefault()
  //   axios.post('http://localhost:8000/api/users/AddToCart',
      
  //   )
  // }

  return (
        <div className="cards">
          <div className="card">
            {/* <img src={ProductImage} alt="Image not found" /> */}
            <h4>{ProductName}</h4>
            <p>{ProductDescription}</p>
            <h4>NPR {ProductPrice}</h4>
            <button >Add to Cart</button>
          </div>
          <div className="card">
            <img src="watch5.jpg" alt="" />
            <h4>Mini Focus Women Watches 0043L</h4>
            <p>Watchpoint presents years warranty and 3 days money-back guarantee.</p>
            <h4>NPR 2900.00</h4>
            <button >Add to Cart</button>
          </div>
          <div className="card">
            <img src="watch6.jpg" alt="" />
            <h4>Skmei 9296 Silver</h4>
            <p>Stainless Steel Material and Best for Casual Looks.</p>
            <h4>NPR 2900.00</h4>
            <button>Add to Cart</button>
          </div>
            <div className="card">
            <img src="watch6.jpg" alt="" />
            <h4>Skmei 9296 Silver</h4>
            <p>Stainless Steel Material and Best for Casual Looks.</p>
            <h4>NPR 2900.00</h4>
            <button>Add to Cart</button>
          </div>
        </div>
  )
}

export default Cards