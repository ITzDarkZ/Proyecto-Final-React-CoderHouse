import React from 'react';
import ItemList from '../ItemListContainer/ItemList'
import {useParams} from 'react-router-dom'

const ItemListContainer = ({greeting}) => {

    const parametros = useParams()

    return (
        <div>
            <h1 style={{textAlign: 'center', paddingTop: '15px'}}>{greeting}</h1>
            <ItemList categoria={parametros}/>
        </div>
    );
}

export default ItemListContainer;
