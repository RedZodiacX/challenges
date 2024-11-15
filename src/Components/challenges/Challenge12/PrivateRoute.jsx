import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ children, ...rest }) => {
    const { isAuth } = useAuth();
    return (
        <Route
            {...rest}
            render={() => (isAuth ? children : <Redirect to="/login" />)}
        />
    );
};

export default PrivateRoute;
