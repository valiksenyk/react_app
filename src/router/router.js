import React from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import {NavigationComponent} from "../components/navigationComponents";
import { makeStyles } from '@material-ui/core/styles';
import { routes } from './routes';

import {HomePage} from '../pages/homePage/homePage';
import {PageSpeed} from '../pages/page-speed/page-speed';


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
        <main className={classes.content} style={{background: 'none'}}>
            <div className={classes.toolbar} />
            <Switch>
                {routes.map(route => (
                    <Route
                        exact
                        path={route.to}
                        onUpdate={() => window.scrollTo(0, 0)}
                        render={props => {
                            return (<route.component {...props} />)
                        }}
                    />
                ))
                }
                <Redirect from="/" to="/page-speed"/>
            </Switch>
        </main>
    </div>
    );
};

export default AppRouter;