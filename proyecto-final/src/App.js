import React from 'react';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const App = () => {
    return(
        <>
            <NavBar/>
            <ItemListContainer greeting="Lista de Productos"/>
        </>
    );
}

export default App;