import React from 'react';
import ErrorPng from '../../assets/error-404.png'
import { Link } from 'react-router';
const NoPageFound = () => {
    return (
        <div className='p-20 bg-neutral-100'>
            <div className='flex flex-col justify-center items-center text-center space-y-4'>
                <img src={ErrorPng} alt="img" />
                <h1 className='text-5xl font-semibold'>Oops, page not found</h1>
                <p className='text-xl font-normal text-neutral-500'>The page you are looking for is not available.</p>
                <Link className='px-10 py-3.5 bg-[#632EE3] rounded-sm text-[16px] font-semibold text-white hover:scale-105 duration-200' to='/'>Go Back!</Link>
            </div>
        </div>
    );
};

export default NoPageFound;