import React from 'react';
import NavBar from './NavBar'
import ItemListContainer from './ItemListContainer'

const App = () => {
    return(
        <>
            <NavBar/>
            <ItemListContainer greeting="Hola aqui iran los items"/>
        </>
    );
}

export default App;