import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faUser, faLock, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Login.css';

const Login = () => {
    return (
        <div className='body'>
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                        <form className="login">
                            <div className="login__field">
                                <FontAwesomeIcon className='login__icon' icon={faUser} />
                                <input type="text" className="login__input" placeholder="User name / Email" />
                            </div>
                            <div className="login__field">
                                <FontAwesomeIcon className='login__icon' icon={faLock} />
                                <input type="password" className="login__input" placeholder="Password" />
                            </div>
                            <button className=" login__submit">
                                Log In Now <FontAwesomeIcon className='button__icon' icon={faChevronRight} />

                            </button>
                        </form>
                        <div className="social-login">
                            <h3>log in via</h3>
                            <div className="social-icons">
                                <FontAwesomeIcon className='social-login__icon' icon={faGoogle}></FontAwesomeIcon>
                            </div>
                            <Link to={'/register'}
                                className='text-decoration-underline text-light'
                            >Create an account?</Link>
                        </div>
                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;