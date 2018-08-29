const axios = require ("axios");

const API_KEY = "9941169-a75ab707fe4eca219ae31d974";
const API_URL = "https://pixabay.com/api/";

module.exports = q => {
        let url = `${API_URL}?key=${API_KEY}&q=${q}&image_type=all&per_page=200`;
        return axios({
            url,
            method: "GET",
            json: true
        })
            .then(res => {
                return {
                    data: res.data,
                    status: res.status
                }
            })
            .catch(e => {
                return {
                    //success: false,
                    status: e.response.status,
                    data: e.response.data
                }            
            });
    }