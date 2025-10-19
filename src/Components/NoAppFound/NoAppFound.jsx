import React from 'react';
import { Link } from 'react-router';
import AppErrorPng from '../../assets/App-Error.png'

const NoAppFound = () => {
    return (
        <div className='p-20 bg-neutral-100'>
            <div className='flex flex-col justify-center items-center text-center space-y-4'>
                <img src={AppErrorPng} alt="img" />
                <h1 className='text-5xl font-semibold'>OPPS!! APP NOT FOUND</h1>
                <p className='text-xl font-normal text-neutral-500'>The App you are requesting is not found on our system.  please try another apps</p>
                <Link className='px-10 py-3.5 bg-[#632EE3] rounded-sm text-[16px] font-semibold text-white hover:scale-105 duration-200' to='/'>Go Back!</Link>
            </div>
        </div>
    );
};

export default NoAppFound;