import config from "../config";
import {authHeader} from "../helpers";

const {apiUrl} = config;

export const sitesService = {
    addSite,
    getSites
};

function addSite(siteData) {
    delete siteData.screenShot;
    const requestOptions = {
        method: 'POST',
        headers: {...authHeader(), 'Content-Type': 'application/json'},
        body: JSON.stringify(siteData)
    };

    return fetch(`${apiUrl}/sites`, requestOptions).then(() => {});
}

function getSites() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/sites`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        return text && JSON.parse(text);
    });
}