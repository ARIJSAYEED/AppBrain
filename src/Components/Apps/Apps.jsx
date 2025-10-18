import React from 'react';
import downloadPng from '../../assets/icon-downloads.png'
import ratingPng from '../../assets/icon-ratings.png'
import { Link } from 'react-router';


const Apps = ({apps}) => {
    return (
        <div>
        <Link to={`/${apps.id}`}>
            <div className='bg-white p-4 rounded-sm space-y-4 shadow-lg hover:scale-105 duration-200'>
                <div className='flex justify-center items-center'>
                    <img className='object-cover rounded-lg border-2 border-neutral-100' src={apps.image} alt="img" />
                </div>
                <div>
                    <h1 className='text-xl font-medium' >{apps.title} : {apps.shortDescription}</h1>
                </div>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-2 px-2.5 py-1.5 rounded-sm bg-[#F1F5E8]'>
                        <img className='h-[12px]' src={downloadPng} alt="icon" />
                        {apps.downloads}
                    </div>
                    <div className='flex items-center gap-2 px-2.5 py-1.5 rounded-sm bg-[#FFF0E1]'>
                        <img className='h-[12px]' src={ratingPng} alt="icon" />
                        {apps.ratingAvg}
                    </div>
                </div>
            </div>
        </Link>
    </div>
    );
};

export default Apps;