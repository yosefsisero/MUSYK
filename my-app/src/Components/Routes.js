import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Top10 from './Pages/Top10/Top10'


function Routes() {
    return (
        <>
            <BrowserRouter>
           <Switch>
               <Route exact path="/" component={Home}/>
               <Route exact path="/top10" component={Top10}/>
           </Switch>
        </BrowserRouter>
        </>
    )
}

export default Routes
