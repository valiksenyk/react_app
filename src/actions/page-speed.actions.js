import {googleService} from "../services/google.service";
import {pageSpeedConstants} from "../constants";

export const pageSpeed = {
    getPageSpeed
};

function getPageSpeed(url) {
    return dispatch => {
        dispatch(request({ url }));

        googleService.pageSpeedTest(url)
            .then(
                data => dispatch(success(data)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request(payload) { return { type: pageSpeedConstants.PAGE_SPEED_REQUEST, payload } }
    function success(payload) { return { type: pageSpeedConstants.PAGE_SPEED_SUCCESS, payload } }
    function failure(error) { return { type: pageSpeedConstants.PAGE_SPEED_FAILURE, error } }
}