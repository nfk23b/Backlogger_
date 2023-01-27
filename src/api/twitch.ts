import axios from 'axios';

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const grantType = process.env.GRANT_TYPE;

const baseUrl = 'https://id.twitch.tv/oauth2/token';

export const getToken = () => axios.post(baseUrl, {
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: grantType
})
.then(function (response) {
    return response.data.access_token;
})
.catch(function (error) {
    console.log(error);
});