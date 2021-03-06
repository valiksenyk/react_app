import { sitesService } from '../services';
import {sitesListConstants} from "../constants";

export const sitesListActions = {
    getSites,
};


function getSites() {
    return dispatch => {
        dispatch(request());

        sitesService.getSites()
            .then(
                sites => dispatch(success(sites)),
                error => dispatch(failure(error.toString()))
            )
    };

    function request() { return { type: sitesListConstants.SITES_LIST_REQUEST } }
    function success(payload) { return { type: sitesListConstants.SITES_LIST_SUCCESS, payload } }
    function failure(error) { return { type: sitesListConstants.SITES_LIST_FAILURE, error } }
}