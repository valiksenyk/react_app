import React from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {history} from '../helpers';
import {alertActions} from '../actions';
import {PrivateRoute} from '../components';
import {HomePage} from '../pages/homePage/homePage';
import {LoginPage} from '../pages/loginPage/loginPage';
import {RegisterPage} from '../pages/registerPage/registerPage';
import SnackbarComponent from "../components/snackbar";
import AppRouter from "../router/router"
import './App.scss';

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            this.props.clearAlerts();
        });
    }

    closeAlerts = () => {
        this.props.clearAlerts();
    };

    render() {
        const {alert} = this.props;
        return (
            <div className="container">
                <SnackbarComponent open={!!alert.message}
                                   message={alert.message}
                                   close={this.closeAlerts}/>
                <Router history={history}>
                    <Switch>
                        <PrivateRoute path="/" component={AppRouter}/>
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/register" component={RegisterPage}/>
                        <Redirect from="*" to="/"/>
                    </Switch>
                </Router>
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
