import React from 'react';
//import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemListContainer/ItemList'

const ItemListContainer = ({greeting}) => {


    return (
        <div>
            <h1 style={{textAlign: 'center', paddingTop: '15px'}}>{greeting}</h1>
            <ItemList/>
        </div>
    );
}


/*
            <div className="productos">
                <p>"Articulo con stock"</p>
                <ItemCount inicial="1" stock="20"/>
                <p>"Articulo sin stock"</p>
                <ItemCount inicial="1" stock="0"/>
                <h1>Lista de items</h1>
            </div>
*/

export default ItemListContainer;
