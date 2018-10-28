/*global io*/
const url = io.sails.url;

export const login = (payload) => {
    return new Promise((res, rej) => {
        io.socket.post("/connect", payload, (resData, jwres) => {
            res(resData.token);
        });
    })
};