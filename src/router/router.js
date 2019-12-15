import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import {NavigationComponent} from "../components/navigationComponents";

import {HomePage} from "../pages/homePage/homePage";

const AppRouter = () => (
    <div>
        <NavigationComponent />
        <Switch>
            <Route
                exact
                path='/home'
                onUpdate={() => window.scrollTo(0, 0)}
                render={props => {
                    return <HomePage {...props} />
                }}
            />
            <Route
                exact
                path='/computations'
                onUpdate={() => window.scrollTo(0, 0)}
                render={props => {
                }}
            />
            <Route
                exact
                path='/tables'
                onUpdate={() => window.scrollTo(0, 0)}
                render={props => {
                }}
            />
            <Redirect from="/" to="/computations"/>
        </Switch>
    </div>
);

export default AppRouter;