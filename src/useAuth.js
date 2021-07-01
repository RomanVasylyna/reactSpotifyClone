import React, { useState, useEffect } from 'react';

const useAuth = (code) => {
const [accessToken, setAccessToken] = useState();
const [refreshToken, setRefreshToken] = useState();
const [expiresIn, setExpiresIn] = useState();

useEffect(() => {

}, [code])

}

export default useAuth;
