import { userConstants } from '../constants';

export function user(state = {}, action) {
    switch (action.type) {
        case userConstants.GETCURRENT_REQUEST:
            return {
                loading: true
            };
        case userConstants.GETCURRENT_SUCCESS:
            return {
                user: action.user
            };
        case userConstants.GETCURRENT_FAILURE:
            return {
                error: action.error
            };
        default:
            return state;
    }
}
