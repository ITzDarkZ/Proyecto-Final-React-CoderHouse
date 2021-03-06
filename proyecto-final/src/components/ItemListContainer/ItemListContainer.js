import React from 'react';
import ItemList from '../ItemListContainer/ItemList'
import {useParams} from 'react-router-dom'

const ItemListContainer = ({context}) => {
    const parametros = useParams()
    return (
        <div>
            <ItemList context={context} categoria={Number(parametros.categoryId)}/>
        </div>
    );
}

export default ItemListContainer;
