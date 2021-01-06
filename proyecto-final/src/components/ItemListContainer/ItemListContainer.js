import React from 'react';
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({greeting}) => {


    return (
        <div>
            <p>{greeting}</p>
            <div className="productos">
                <p>"Articulo con stock"</p>
                <ItemCount inicial="1" stock="20"/>
                <p>"Articulo sin stock"</p>
                <ItemCount inicial="1" stock="0"/>
                <h1>Lista de items</h1>
            </div>
            <ItemList/>
        </div>
    );
}

export default ItemListContainer;
