import React from 'react'
import '../../styles/cart.css'
import { MdDelete } from "react-icons/md";
import { useCart } from '../../context/cartContext';

function CartCards({ img, name, price, id }) {
    // cart global state
    const { setCart } = useCart();
    // Remove only the first matching item so adding the same product twice
    // and removing once doesn't wipe all copies.
    const removeFromCart = (itemId) => {
        setCart(prev => {
            const idx = prev.findIndex(item => item.id === itemId);
            if (idx === -1) return prev;
            return [...prev.slice(0, idx), ...prev.slice(idx + 1)];
        });
    };

    return (
        <div className='container'>
            <div>
                <div className="cart-item">
                    <img className="item-img" src={img} alt="product-img" />
                    <div className="item-details">
                        <span>{name}</span>
                        <p>Price: <span className="item-price">${price}</span></p>

                    </div>
                    <button onClick={() => removeFromCart(id)} className="remove-btn"><MdDelete /></button>
                </div>
                <hr />
            </div>
        </div>

    )
}

export default CartCards