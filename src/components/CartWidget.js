import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css';


const CartWidget = () => {
    return (
        <div className="d-flex align-items-center">
            <FaShoppingCart className="cart-icon-custom" size={30} />
            <span className="badge bg-light ms-2 colorTexto">7</span>
        </div>
    );
};

export default CartWidget;