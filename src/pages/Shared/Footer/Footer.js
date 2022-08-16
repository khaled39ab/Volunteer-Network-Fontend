import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()
    return (
        <div className='mt-5 text-center'>
            <small style={{color:'rgba(0, 0, 0, 1)'}}>All Rights Reserved @KHALED || {year}</small>
        </div>
    );
};

export default Footer;