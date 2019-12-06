import React from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {history} from '../helpers';
import {alertActions} from '../actions';
import {PrivateRoute} from '../components';
import {HomePage} from '../pages/homePage/homePage';
import {LoginPage} from '../pages/loginPage/loginPage';
import {RegisterPage} from '../pages/registerPage/registerPage';
import Grid from "@material-ui/core/Grid";

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        const {alert} = this.props;
        return (
            <div className="container">
                {/*<Grid xs="12">*/}
                    {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                    <Router history={history}>
                        <Switch>
                            <PrivateRoute exact path="/" component={HomePage}/>
                            <Route path="/login" component={LoginPage}/>
                            <Route path="/register" component={RegisterPage}/>
                            <Redirect from="*" to="/"/>
                        </Switch>
                    </Router>
                {/*</Grid>*/}
            </div>
        );
    }
}

function mapState(state) {
    const {alert} = state;
    return {alert};
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export default connectedApp;
