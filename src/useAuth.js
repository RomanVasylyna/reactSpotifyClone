import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Creating a custom react hook

const useAuth = (code) => {
    // Setting state of various tokens
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();
    
    // First useEffect that is triggered by changes in the code
    useEffect(() => {
        axios.post('http://localhost:3001/login', {
            code
        }).then(res => {
            console.log(res.data);

            setAccessToken(res.data.accessToken);
            setRefreshToken(res.data.refreshToken);
            setExpiresIn(res.data.expiresIn);
        }).catch(err => {
            console.log(err);
        })
    }, [code]) //trigger of useEffect

    useEffect(() => {
        axios.post('http://localhost:3001/refresh', {
            refreshToken
        }).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, [refreshToken, expiresIn])

    return accessToken;


}

export default useAuth;
