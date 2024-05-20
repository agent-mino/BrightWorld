import React from 'react'
import '../../styles/productCard.css'
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { SpotLightProducts } from '../../database/SpotLight';
import { BulbsProducts } from '../../database/Bulbs';
import { ChandelierProducts } from '../../database/Chandelier';
import { DecorationLightsCareProducts } from '../../database/DecorationLights';
import { LampProducts } from '../../database/Lamp';
import { SmartLightsProducts } from '../../database/SmartLights';
import { exclusiveProducts } from '../../database/exclusive';
import { useCart } from '../../context/cartContext';


function ProductCards({ src, name, price, id, category }) {
  // cart global state
  const { cart, setCart } = useCart();

  //handle cart functionality
  function handleCart(id, category) {
    const categoryProducts = {
      'SpotLight': SpotLightProducts,
      'Exclusive': exclusiveProducts,
      'Bulbs': BulbsProducts,
      'Chandeliers': ChandelierProducts,
      'Decoration Lights': DecorationLightsCareProducts,
      'Lamps': LampProducts,
      'Smart Lights': SmartLightsProducts
    };

    const product = categoryProducts[category]?.find(product => product.id === id);
    if (product) {
      setCart([...cart, product]); // Adding product to cart
    } else {
      console.error(`Product not found in category: ${category}`);
    }
  }

  return (
    <>
      <div className="card">
        <img src={src} className="card-img-top" alt="Fissure in Sandstone" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p style={{ color: 'grey' }} className="card-rating"><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /> <span id='card-review'> 124 REVIEWS</span>  </p>
          <p className="card-text">$ {price} USD </p>
        </div>
      </div>
      <button onClick={() => handleCart(id, category)} className="btn btn-product-card btn-sm" data-mdb-ripple-init>ADD TO CART </button>
    </>
  )
}

export default ProductCards