import React from 'react';
import CartWidget from './CartWidget';
import './Navbar.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {    return (
    <nav className="navbar navbar-expand-lg navbar-magenta">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">Amimevá Indumentaria</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/category1">Remeras</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/category2">Pantalones</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/category3">Abrigos</a>
                    </li>
                </ul>
            </div>
            <CartWidget />
        </div>
    </nav>
);
};

export default Navbar;