import React, { useState } from 'react';
import '../../styles/checkout.css';
import { useCart } from '../../context/cartContext';
import { CiDeliveryTruck } from "react-icons/ci";
import { Link } from 'react-router-dom';

function Checkout() {
    const { setCart } = useCart();
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        setCart([]);
        setOrderPlaced(true);
    }

    return (
        <div>
            {orderPlaced ? (
                <div>
                    <div className="alert alert-success" role="alert">
                        Order placed successfully!
                    </div>
                    <Link to='/'>
                        <div style={{ textAlign: 'center' }}>
                            <button id='after-order-btn'>Continue Shopping</button>
                        </div>
                    </Link>
                </div>
            ) : (
                <div id='checkout-container'>
                    <h3>Delivery Details <CiDeliveryTruck /></h3>
                    <form onSubmit={handlePlaceOrder}>
                        <div className="mb-3">
                            <label htmlFor="checkout-name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="checkout-name" name="name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="checkout-phone" className="form-label">Phone Number</label>
                            <input type="tel" className="form-control" id="checkout-phone" name="phone" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="checkout-address" className="form-label">Address</label>
                            <input type="text" className="form-control" id="checkout-address" name="address" required />
                        </div>
                        <br />
                        <button style={{ width: '100%' }} type="submit" className="btn btn-dark">Place Order</button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Checkout;
