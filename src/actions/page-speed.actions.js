import {googleService} from "../services/google.service";
import {pageSpeedConstants} from "../constants";
import {sitesService} from "../services";

export const pageSpeed = {
    getPageSpeed
};

function getPageSpeed(url) {
    return dispatch => {
        dispatch(request({ url }));

        googleService.pageSpeedTest(url)
            .then(
                data => {
                    dispatch(success(data));
                    data && sitesService.addSite(data);
                },
                error => dispatch(failure(error.toString()))
            );
    };

    function request(payload) { return { type: pageSpeedConstants.PAGE_SPEED_REQUEST, payload } }
    function success(payload) { return { type: pageSpeedConstants.PAGE_SPEED_SUCCESS, payload } }
    function failure(error) { return { type: pageSpeedConstants.PAGE_SPEED_FAILURE, error } }
}