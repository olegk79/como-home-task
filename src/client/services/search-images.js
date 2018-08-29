import axios from "axios";
export default (q) => {
    return axios({
        method: "GET",
        url:`/api/images?q=${q}`,
        json: true
    }).then(result => result);
};