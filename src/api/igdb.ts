import axios from "axios";

const clientId = process.env.CLIENT_ID;

const baseUrl = 'https://api.igdb.com/v4/';

export const getData = async(endpoint: string, token: string, params: string = '') => {
    return await axios.post(`${baseUrl}${endpoint}`, params, {
        headers: {
            'Client-ID': clientId,
            'Authorization': `Bearer ${token}`,
            'withCredentials': 'false'
          }
    })
    .then(function (response) {
        return response.data;
    })
    .catch(function (error) {
        console.log(error);
    });
}