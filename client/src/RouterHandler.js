import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Test from './components/Test';
import Problem from './views/Problem';

const RouteHandler = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/test' component={Test}/>
        <Route path='/problem' component={Problem} />
        
    </Switch>
)

export default RouteHandler;