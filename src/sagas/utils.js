/*global io*/
export const login = (payload) => {
    return new Promise((res, rej) => {
        io.socket.post("/connect", payload, (resData, jwres) => {
            const successful = jwres.statusCode === 200;
            if (successful) {
                io.sails.headers = {
                    Authorization: "Bearer " + resData.token
                }
            }

            res({data: resData, successful});
        });
    })
};

export const getAllDevice = () => {
    return new Promise((res, rej) => {
        io.socket.request({
            method: "get",
            url: "/device",
            headers: io.sails.headers
        }, (resData, jwres) => {
            debugger;
            res();
        });
    });
};