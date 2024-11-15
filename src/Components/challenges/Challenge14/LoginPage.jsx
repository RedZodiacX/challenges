import React from 'react';
import { useDispatch } from 'react-redux';
import { loginWithEmail, loginWithGoogle, logoutUser } from './authActions';

const LoginPage = () => {
    const dispatch = useDispatch();

    const handleLoginEmail = () => {
        dispatch(loginWithEmail('test@example.com', 'password123'));
    };

    const handleLoginGoogle = () => {
        dispatch(loginWithGoogle());
    };

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return (
        <div>
            <button onClick={handleLoginEmail}>Login with Email</button>
            <button onClick={handleLoginGoogle}>Login with Google</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default LoginPage;
