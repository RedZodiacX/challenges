import { createContext, useReducer, useContext } from 'react';

const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, isAuth: true, user: action.payload };
        case 'LOGOUT':
            return { ...state, isAuth: false, user: null };
        default:
            return state;
    }
};

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, { isAuth: false, user: null });

    const login = (user) => dispatch({ type: 'LOGIN', payload: user });
    const logout = () => dispatch({ type: 'LOGOUT' });

    return (
        <AuthContext.Provider value={{ ...state, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
