import endpoints from './endpoints';
import App from '../App';
const axios = require('axios');

class ApiUtils {
    constructor(defineRequestInterceptor = false, appendAuth = false, defineResponseInterceptor = false) {
        this.axios = axios.create({})
        if (defineRequestInterceptor) {
            const hostname = window && window.location && window.location.hostname;
            let backendURL;
            let backendToken;

            if (hostname === "localhost") {
                backendURL = process.env.REACT_APP_LOCAL_API_BASE_URL;
                // backendToken = 
            }

            this.axios.interceptors.request.use(function (config) {
                let r = new RegExp('^(?:[a-z]+:)?//', 'i')
                config = {
                    ...config,
                    headers: {
                        ...config.headers,
                        "Content-Type": config.headers["Content-Type"] === "multipart/form-data" ? config.headers["Content-Type"] : "application/json",
                        // "Access-Control-Allow-Origin": "*"
                    },
                    url: r.test(config.url) ? config.url : backendURL + config.url
                }
                if (appendAuth) {
                    config.headers["Authorization"] = backendToken
                }

                return config;
            }, function (error) {
                return Promise.reject(error);
            });
        }

        if (defineResponseInterceptor) {
            this.axios.interceptors.response.use(function (response) {
                if ((response.status === 200 && (response.data.status === 401 || response.data.status === 203)) || response.status === 203) {
                    App.logout(false, "Unauthorized", response.data.message);
                }
                return response;
            }, function (error) {
                return Promise.reject(error);
            })
        }

    }
    loginCall = (data) => {
        return this.axios({
            method: endpoints.login.method,
            url: endpoints.login.url,
            data: JSON.stringify({ ...data }),
        })
    }
    updateCall = (data, params) => {
        return this.axios({
            method: endpoints.updateCall.method,
            url: endpoints.updateCall.url,
            data: JSON.stringify({ ...data }),
            params
        })
    }

}
export default ApiUtils;