import React from 'react';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './pages/Cart';

const App = () => {
    return(
        <Router>
            <NavBar/>
            <Switch>
                <Route path='/' exact>
                    <ItemListContainer />
                </Route>
                <Route path='/category/:categoryId'>
                    <ItemListContainer />
                </Route>
                <Route path='/item/:id'>
                    <ItemDetailContainer />
                </Route>
                <Route path='/cart'>
                    <Cart />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;