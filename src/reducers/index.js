import { combineReducers } from 'redux';

import {alert} from './alert.reducer';
import {registration} from './registration.reducer';
import {authentication} from './auth.reducer';
import {users} from './users.reducer';
import {user} from './user.reducer'
import {pageSpeed} from './page-speed.reducer';
import {sitesList} from './sites-list.reducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    user,
    alert,
    pageSpeed,
    sitesList
});

export default rootReducer;
