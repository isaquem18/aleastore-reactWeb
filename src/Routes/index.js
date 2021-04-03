import { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import Feed from '../pages/Feed';

const auth = false;

const PrivateRoute = ({component: Component, ...resto}) => (
    <Route {...resto} render={(props) => ( 
        auth ? (
            <Component {...props} />
        ) : (
            <Redirect to={{pathname: '/', state: {from: props.location}}} />
        )
    )} />
);

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute exact path="/feed" component={Feed} />
        </Switch>
    )
} 
