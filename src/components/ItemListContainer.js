import React from 'react';
import './ItemListContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container mt-3 d-flex justify-content-center align-items-center vh-100">
            <h2 className="colorTexto">{greeting}</h2>
        </div>
    );
};

export default ItemListContainer;