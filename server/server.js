const express = require('express');
const spotifyWebApi = require('spotify-web-api-node');
const app = express();

app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken;
    const spotifyApi = new spotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '1dcf5c3f66d044098c6492268e4f7325',
        clientSecret: '528bee723399432fbbb90fbc2a60f01d',
        refreshToken,
})
// Refreshing the token
spotifyApi
    .refreshAccessToken()
    .then(
        data => {
            console.log(data.body);
        })
    .catch(() => {
        res.sendStatus(404);
    });
})


app.post('/login', (req, res) => {
    const code = req.body.code;
    const spotifyApi = new spotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '1dcf5c3f66d044098c6492268e4f7325',
        clientSecret: '528bee723399432fbbb90fbc2a60f01d'
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    })
        .catch(() => {
            res.sendStatus(404);
        })
});
