import React from 'react';
// Import Custom Hook
// import useAuth from './useAuth';

const Dashboard = ({ code }) => {
    console.log(code);
    
    // const accessToken = useAuth(code);
    return (
        <div>
            <h1>Welcome, Roman!</h1>
        </div>
    )
}

export default Dashboard
