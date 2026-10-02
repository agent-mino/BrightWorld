import React, { useState, useEffect, useRef } from 'react'
import '../../styles/productCard.css'
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useCart } from '../../context/cartContext';

function ProductCards({ src, name, price, id, category }) {
  const { setCart } = useCart();
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  function handleCart() {
    setCart(prev => [...prev, { imageSrc: src, name, price, id, category }]);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setToastVisible(true);
    toastTimerRef.current = setTimeout(() => setToastVisible(false), 2000);
  }

  return (
    <>
      {toastVisible && (
        <div className="cart-toast">
          <span className="cart-toast-check">✓</span> <strong>{name}</strong> added to cart
        </div>
      )}
      <div className="card">
        <img src={src} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p style={{ color: 'grey' }} className="card-rating"><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt /> <span id='card-review'> 124 REVIEWS</span></p>
          <p className="card-text">$ {price} USD</p>
        </div>
      </div>
      <button onClick={handleCart} className="btn btn-product-card btn-sm" data-mdb-ripple-init>ADD TO CART</button>
    </>
  )
}

export default ProductCards
