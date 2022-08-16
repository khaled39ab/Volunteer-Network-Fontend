import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import img from './../../images/coming-soon.png'

const Blog = () => {
    return (
        <div className='text-center mt-5'>
            <PageTitle title='Blog'></PageTitle>
            <h2>Welcome to my blog</h2>
            <img src={img} alt="" />
        </div>
    );
};

export default Blog;