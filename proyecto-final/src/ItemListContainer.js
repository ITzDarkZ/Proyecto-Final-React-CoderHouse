import React from 'react';
import ItemCount from './ItemCount'

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <p>{greeting}</p>
            <div className="productos">
                <p>"Articulo con stock"</p>
                <ItemCount inicial="1" stock="20"/>
                <p>"Articulo sin stock"</p>
                <ItemCount inicial="1" stock="0"/>
            </div>
            
        </div>
    );
}

export default ItemListContainer;
