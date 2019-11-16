import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Problem from './views/Problem';

const RouteHandler = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/views/Problem' component={Problem} />
        
    </Switch>
)

export default RouteHandler;