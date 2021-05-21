import React, { useState, useEffect} from 'react'

// Dependencias
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

// React router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Redux
import { Provider } from 'react-redux'
// ReduxData
import store from '../data/redux/store'

// Style
import './index.css'

// Pages
import Home from '../pages/home'
import Buscador from '../pages/searching'
import Productos from '../pages/products'
import Error404 from '../pages/error404'
import Loading from '../components/helpers/loading'
import Cart from '../pages/cart.js'
import Thanks from '../pages/thanks.js'
import Favorite from '../pages/favorite.js'
import User from '../pages/user.js'
import Payment from '../pages/payment.js'

const Index = () => {
    const [load, setLoad] = useState(false)


    useEffect(() => {
        setLoad(true)
    }, [])


    if (!load) {
        return <Loading load={false} />
    } else {
        return (
            <Router>
                <Provider store={store}>
                    <Switch>
                        <Route path='/buscador/:name'>
                            <Buscador />
                        </Route>
                        <Route path='/producto/:id'>
                            <Productos />
                        </Route>
                        <Route path='/carrito/gracias'>
                            <Thanks />
                        </Route>
                        <Route path='/favoritos'>
                            <Favorite />
                        </Route>
                        <Route path='/buscador'>
                            <Buscador />
                        </Route>
                        <Route path='/registro'>
                            <User />
                        </Route>
                        <Route path='/carrito'>
                            <Cart />
                        </Route>
                        <Route path='/pago'>
                            <Payment />
                        </Route>
                        <Route path='/'>
                            <Home />
                        </Route>
                        <Route component={Error404} />
                    </Switch>
                </Provider>
            </Router>
        )
    }
}

export default Index