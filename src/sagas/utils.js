/*global io*/

const apiGenerator = (url, method, payload) => {
    return new Promise((res, rej) => {
        io.socket.request({
            url: url,
            method: method,
            headers: io.sails.headers,
            data: payload
        }, (resData, jwRes) => {
            const successful = jwRes.statusCode === 200;
            res({ data: resData, successful });
        })
    })
};

/**
 *
 * @type {{POST: ((p1?:*, p2?:*)), PUT: ((p1?:*, p2?:*)), DELETE: ((p1?:*)), GET: ((p1?:*))}}
 * @private
 */
const _requestAPI = {
    POST: (url, payload) => apiGenerator(url, 'POST', payload),
    PUT: (url, payload) => apiGenerator(url, 'PUT', payload),
    DELETE: (url) => apiGenerator(url, 'DELETE'),
    GET: (url) => apiGenerator(url, 'GET')
};

// Connect Util
export const login = (payload) => _requestAPI.POST("/connect", payload);

// Devices Util
export const getAllDevice = () => _requestAPI.GET("/device");
export const removeDevice = (id) => _requestAPI.DELETE("/device/" + id);

// Fragments Util
export const createFragment = (payload) => _requestAPI.POST('/fragments', payload);
export const getAllFragments = () => _requestAPI.GET("/fragments");
export const removeFragment = (id) => _requestAPI.DELETE("/fragments/" + id);
export const updateFragment = (id, payload) => _requestAPI.PUT("/fragments/" + id, payload);

// Locations Util
export const createLocation = (payload) => _requestAPI.POST('/locations', payload);
export const getAllLocations = () => _requestAPI.GET("/locations");
export const removeLocation = (id) => _requestAPI.DELETE("/locations/" + id);
export const updateLocation = (id, payload) => _requestAPI.PUT("/locations/" + id, payload);

// Configurations util
export const createConfiguration = (payload) => _requestAPI.POST("/configurations", payload);

// Proximity util
export const getProximity = (payload) => _requestAPI.GET("/proximity", payload);
export const updateProximity = (payload) => _requestAPI.PUT("/proximity", payload);