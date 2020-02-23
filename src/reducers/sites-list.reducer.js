import { sitesListConstants } from '../constants';

export function sitesList(state = {}, action) {
    switch (action.type) {
        case sitesListConstants.SITES_LIST_REQUEST:
            return {
                loading: true
            };
        case sitesListConstants.SITES_LIST_SUCCESS:
            return {
                ...action.payload
            };
        case sitesListConstants.SITES_LIST_FAILURE:
            return {
                error: action.error
            };
        default:
            return state;
    }
}