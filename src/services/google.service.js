import config from "../config";

const {googleInsightApiKey, googleInsightBaseUrl} = config;

export const googleService = {
    pageSpeedTest
};

function pageSpeedTest(url) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`${googleInsightBaseUrl}?key=${googleInsightApiKey}&url=${url}`,
        requestOptions).then(handleResponse);
}

function formatResponse(response) {
    let formattedData = null;
    if (response && response.loadingExperience && response.lighthouseResult) {
        formattedData = {
            generalResult: response.loadingExperience.overall_category,
            origin: response.loadingExperience.id,
            timeToFirstPaint: {
                title: response.lighthouseResult.audits['first-contentful-paint'].title,
                value: response.lighthouseResult.audits['first-contentful-paint'].displayValue
            },
            domSize: {
                title: response.lighthouseResult.audits['dom-size'].title,
                value: response.lighthouseResult.audits['dom-size'].displayValue

            },
            screenShot: response.lighthouseResult.audits['final-screenshot'].details.data,
        }
    }

    return formattedData;
}

function handleResponse(response) {
    return response.text().then(text => {
        const parsed = text && JSON.parse(text);
        return formatResponse(parsed);
    });
}