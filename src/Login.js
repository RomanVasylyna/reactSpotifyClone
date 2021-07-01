import React from 'react';

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=1dcf5c3f66d044098c6492268e4f7325&response_type=code&redirect_uri=http://localhost:3000/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

const Login = () => {
    return (
        <div>
            <a variant="success"
                href={AUTH_URL}
                className="btn btn-success btn-lg"
                style={{ marginTop: '45vh' }}>
                Login to Spotify
            </a>
        </div>
    )
}

export default Login
