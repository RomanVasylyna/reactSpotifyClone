const express = require('express');
const spotifyWebApi = require('spotify-web-api-node');
const app = express();

app.post('/login', (req, res) => {
    const code = req.body.code;
 const spotifyApi = new spotifyWebApi({
 redirectUri: 'http://localhost:3000',
 clientId: '1dcf5c3f66d044098c6492268e4f7325',
 clientSecret: '528bee723399432fbbb90fbc2a60f01d'
 })  
 
 spotifyApi.authorizationCodeGrant(code);
});
