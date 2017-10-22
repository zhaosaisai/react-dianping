import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'

// import components
import App from 'containers'
import Home from 'containers/Home'
import City from 'containers/City'
import Detail from 'containers/Detail'
import Search from 'containers/Search'
import User from 'containers/User'
import Login from 'containers/Login'
import NotFound from 'containers/404'

// set route
export const getRoute = (hashType) => {
    return (
        <Router history={hashType}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="/city" component={City}/>
                <Route path="/detail/:id" component={Detail}/>
                <Route path="/user" component={User}/>
                <Route path="/login(/:toWhere(/:other))" component={Login}/>
                <Route path="/search/:type(/:keyword)" component={Search}/>
                <Route path="*" component={NotFound}/>
            </Route>
        </Router>
    )
} 