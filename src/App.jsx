import React from 'react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
    return (
        <div>
            <Navbar />
            <ItemListContainer greeting="¡Bienvenidos a Mi Tienda!" />
        </div>
    );
};

export default App;
