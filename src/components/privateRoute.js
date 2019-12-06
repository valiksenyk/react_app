import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {Header} from "./header";

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <>
    <Header />
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
    </>
);
