import { combineReducers } from 'redux';

import {alert} from './alert.reducer';
import {registration} from './registration.reducer';
import {authentication} from './auth.reducer';
import {users} from './users.reducer';
import {user} from './user.reducer'

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    user,
    alert
});

export default rootReducer;
