import React from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import {NavigationComponent} from "../components/navigationComponents";
import { makeStyles } from '@material-ui/core/styles';

import {HomePage} from "../pages/homePage/homePage";


const useStyles = makeStyles(theme => ({
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
        },
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3),
        },
    })
);

const AppRouter = () => {
    const classes = useStyles();

    return (
    <div style={{display: 'flex'}}>
        <NavigationComponent/>
        <main className={classes.content}>
            <div className={classes.toolbar} />
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
                    path='/page-speed'
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
                <Redirect from="/" to="/page-speed"/>
            </Switch>
        </main>
    </div>
    );
};

export default AppRouter;