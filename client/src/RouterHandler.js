import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Test from './components/Test';

const RouteHandler = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/test' component={Test}/>
    </Switch>
)

export default RouteHandler;