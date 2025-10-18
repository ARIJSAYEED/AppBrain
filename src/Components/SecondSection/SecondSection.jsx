import React from 'react';

const SecondSection = () => {
    return (
        <div className='flex flex-col justify-center items-center text-white space-y-10 bg-[#632EE3] py-20 mb-20'>
            <div>
                <h1 className='text-5xl font-bold'>Trusted By Millions, Build For You</h1>
            </div>
            <div className='flex items-center gap-44'>
                <div className='space-y-1 flex flex-col justify-center items-center'>
                    <p className='text-[16px]  text-neutral-300'>Total Downloads</p>
                    <h1 className='text-[64px] font-extrabold'>29.6M</h1>
                    <p className='text-[16px] font-normal text-neutral-300'>21% more than last month</p>
                </div>
                <div className='space-y-1 flex flex-col justify-center items-center'>
                    <p className='text-[16px] font-normal text-neutral-300'>Total Reviews</p>
                    <h1 className='text-[64px] font-extrabold'>906K</h1>
                    <p className='text-[16px] font-normal text-neutral-300'>46% more than last month</p>
                </div>
                <div className='space-y-1 flex flex-col justify-center items-center'>
                    <p className='text-[16px] font-normal text-neutral-300'>Active Apps</p>
                    <h1 className='text-[64px] font-extrabold'>132+</h1>
                    <p className='text-[16px] font-normal text-neutral-300'>31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default SecondSection;