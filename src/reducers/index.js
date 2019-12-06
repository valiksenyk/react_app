import { combineReducers } from 'redux';

import {alert} from './alert.reducer';
import {registration} from './registration.reducer';
import {authentication} from './auth.reducer';
import {users} from './users.reducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    alert
});

export default rootReducer;
