import React from 'react';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './pages/Cart';
import CartContext, {contextCart} from './components/CartContext/CartContext';

const App = () => {
    return(
        <CartContext>
            <Router>
                <NavBar/>
                <Switch>
                    <Route path='/' exact>
                        <ItemListContainer context={contextCart} />
                    </Route>
                    <Route path='/category/:categoryId'>
                        <ItemListContainer context={contextCart} />
                    </Route>
                    <Route path='/item/:id'>
                        <ItemDetailContainer context={contextCart} />
                    </Route>
                    <Route path='/cart'>
                        <Cart />
                    </Route>
                </Switch>
            </Router>
        </CartContext>
    );
}

export default App;