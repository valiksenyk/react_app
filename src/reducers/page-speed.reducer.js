import { pageSpeedConstants } from '../constants';

export function pageSpeed(state = {}, action) {
    switch (action.type) {
        case pageSpeedConstants.PAGE_SPEED_REQUEST:
            return {
                loading: true
            };
        case pageSpeedConstants.PAGE_SPEED_SUCCESS:
            return {
                ...action.payload
            };
        case pageSpeedConstants.PAGE_SPEED_FAILURE:
            return {
                error: action.error
            };
        default:
            return state;
    }
}