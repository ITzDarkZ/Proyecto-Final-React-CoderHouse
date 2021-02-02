import React from 'react';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './pages/Cart';
import CartContext, {contextCart} from './components/CartContext/CartContext';
import CheckOut from './pages/CheckOut'
import Orders from './pages/Orders'

const App = () => {
    return(
        <CartContext>
            <Router>
                <NavBar context={contextCart}/>
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
                    <Route path='/checkout'>
                        <CheckOut />
                    </Route>
                    <Route path='/orders'>
                        <Orders />
                    </Route>
                </Switch>
            </Router>
        </CartContext>
    );
}

export default App;