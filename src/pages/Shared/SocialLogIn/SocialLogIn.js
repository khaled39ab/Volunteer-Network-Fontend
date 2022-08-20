import React from 'react';
import googleIcon from './../../../images/Google.png'
import facebookIcon from './../../../images/Facebook.png'
import './SocialLogIn.css'
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SocialLogIn = () => {
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
        </div>
    );
};

export default SocialLogIn;