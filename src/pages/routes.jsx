import React from 'react'
import {Switch, Route, BrowserRouter as Router} from "react-router-dom"
import {Home} from './home/home'
import {Cart} from './cart/cart'
import {Categories} from './Products/Categories'
import {Category} from './Category/category'
import {MisDatos} from './MisDatos/MisDatos'
import {NotFound} from './notfound/notFound'
import {ItemDetailContainer} from '../components/ItemDetailContainer/ItemDetailContainer'
import {ItemListContainer} from '../components/ItemListContainer/ItemListContainer'

export const Routes= ()=>{
    return (
        <Router>
            <Switch>

                <Route exact path='/'>
                    <Home/>
                </Route>

                <Route path='/cart'>
                    <Cart/>
                </Route>

                <Route path='/Category/:categoryId'>
                    <ItemListContainer/>
                </Route>

                <Route path='/Item/:itemId'>
                    <ItemDetailContainer/>
                </Route>

                <Route path='*'>
                    <NotFound/>
                </Route>

            </Switch>
        </Router>
    )
}