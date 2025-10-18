import React from 'react';
import Apps from '../Apps/Apps';
import { Link } from 'react-router';

const ThirdSection = ({data}) => {
    return (
        <div className='px-20 space-y-10 pb-20'>
            <div className='space-y-4 text-center'>
                <h1 className='text-5xl font-bold'>Trending Apps</h1>
                <p className='text-xl font-normal text-neutral-500'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-4 gap-4'>
                {
                    data.map(apps=><Apps key={apps.id} apps={apps}></Apps>)
                }
            </div>
            <div className='text-center'>
                <Link className='px-10 py-3.5 rounded-sm bg-[#632EE3] text-white text-[16px] font-semibold' to='/App'>Show All</Link>
            </div>
        </div>
    );
};

export default ThirdSection;