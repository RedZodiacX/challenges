import { signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from './firebase/config';
import { login, logout } from './authSlice';

export const loginWithEmail = (email, password) => async (dispatch) => {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    dispatch(login({ email: user.email, uid: user.uid }));
};

export const loginWithGoogle = () => async (dispatch) => {
    const { user } = await signInWithPopup(auth, googleProvider);
    dispatch(login({ email: user.email, uid: user.uid }));
};

export const logoutUser = () => async (dispatch) => {
    await signOut(auth);
    dispatch(logout());
};
