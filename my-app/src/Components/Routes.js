import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Buscar from './Pages/Buscar/Buscar'


function Routes() {
    return (
        <>
            <BrowserRouter>
           <Switch>
               <Route exact path="/" component={Home}/>
               <Route exact path="/buscar" component={Buscar}/>
           </Switch>
        </BrowserRouter>
        </>
    )
}

export default Routes
