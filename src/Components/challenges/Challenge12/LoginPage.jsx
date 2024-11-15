import React from 'react';
import { useAuth } from './AuthContext';

const LoginPage = () => {
    const { login } = useAuth();
    const handleLogin = () => {
        login({ name: 'User' });
    };

    return <button onClick={handleLogin}>Login</button>;
};

export default LoginPage;
