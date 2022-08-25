import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(
        auth
    );

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='text-center pt-5'>
            <h3 className='text-danger'>Verified Your Email First</h3>
            <h5 className='text-success'>Go to your email address and verify email</h5>
            <p className='mt-3'>Did not get email? <button onClick={async () => {
                await sendEmailVerification();
                toast('Sent email');
            }} className='btn-link border-0 bg-white'>Sent verification email again</button></p>
        </div>
    }

    return children;
};

export default RequireAuth;