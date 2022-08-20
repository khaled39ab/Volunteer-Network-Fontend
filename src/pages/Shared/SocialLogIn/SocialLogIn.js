import React from 'react';
import googleIcon from './../../../images/Google.png'
import facebookIcon from './../../../images/Facebook.png'
import './SocialLogIn.css'
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    let errorMessage;
    const [
        signInWithGoogle,
        googleUser,
        googleLoading,
        googleError
    ] = useSignInWithGoogle(auth);
    const [
        signInWithFacebook,
        facebookUser,
        facebookLoading,
        facebookError
    ] = useSignInWithFacebook(auth);

    if(googleError || facebookError){
        errorMessage = <p className='text-danger'>Error: {googleError?.message} {facebookError?.message}</p>
    }

    if (googleUser || facebookUser) {
        navigate(from, { replace: true });
    }

    return (
        <div className='login-container'>
            <div onClick={() => { signInWithGoogle() }} className='social-login border rounded-pill'>
                <img src={googleIcon} alt="" />
                <p>Continue with Google</p>
            </div>
            <div onClick={() => { signInWithFacebook() }} className='social-login border rounded-pill'>
                <img src={facebookIcon} alt="" />
                <p>Continue with Facebook</p>
            </div>
            {
                errorMessage
            }
        </div>
    );
};

export default SocialLogIn;