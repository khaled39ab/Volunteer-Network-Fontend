import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import img from './../../images/coming-soon.png'

const Blog = () => {
    return (
        <div className='text-center mt-5'>
            <PageTitle title='Blog'></PageTitle>
            <span className='py-1 px-5 bg-warning fs-2'>Welcome to my blog</span>
            <br />
            <img src={img} alt="" />
        </div>
    );
};

export default Blog;