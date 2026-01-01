import './Cards.css'
import axios from 'axios'

function Cards({products}) {
  
  const handleAddToCart = ((product) =>{
    axios.post('http://localhost:8000/api/carts/addtocart',{
      productId: product._id,
      quantity: 1
    }, {withCredentials: true})
    .then(res => console.log(res.data))
    .catch(err => console.error(err));
  })

  return (
        <div className="cards">
          {products?.map(product => (
            <div key={product._id} className="card">
            <img src={product.image} alt="Image not found" />
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <h4>NPR {product.price}</h4>
            <button onClick={() => handleAddToCart(product)} >Add to Cart</button>
          </div>
          ))}
        </div>
  )
}

export default Cards