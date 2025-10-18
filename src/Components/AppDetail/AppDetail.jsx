import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import DownloadIcon from '../../assets/icon-downloads.png'
import RatingIcon from '../../assets/icon-ratings.png'
import ReviewIcon from '../../assets/icon-review.png'

const AppDetail = () => {
    let { id } = useParams()
    let aid = parseInt(id)
    let data = useLoaderData()
    let SingleApp = data.find(app => app.id === aid)

    return (
        <div className='pt-20 bg-neutral-100 px-20'>
            <div className='flex gap-10 border-2'>
                <div className='w-1/3'>
                    <img className='h-[420px]' src={SingleApp.image} alt="" />
                </div>
                <div className='w-2/3'>
                    <h1 className='text-[32px] font-bold'>{SingleApp.title}:{SingleApp.shortDescription}</h1>
                    <p className='text-xl font-semibold text-neutral-500 pb-[30px] border-b-2 border-neutral-200'>Developed by <span className='text-[#632EE3]'>{SingleApp.companyName}</span></p>
                    <div className='mt-[30px] flex gap-12'>
                        <div className='space-y-2'>
                            <img src={DownloadIcon} alt="img" />
                            <p className='text-[16px] font-normal text-neutral-800'>Downloads</p>
                            <h1 className='text-[40px] font-extrabold'>{SingleApp.downloads}</h1>
                        </div>
                        <div className='space-y-2'>
                            <img src={RatingIcon} alt="img" />
                            <p className='text-[16px] font-normal text-neutral-800'>Average Ratings</p>
                            <h1 className='text-[40px] font-extrabold'>{SingleApp.ratingAvg}</h1>
                        </div>
                        <div className='space-y-2'>
                            <img src={ReviewIcon} alt="img" />
                            <p className='text-[16px] font-normal text-neutral-800'>Top Reviews</p>
                            <h1 className='text-[40px] font-extrabold'>{SingleApp.reviews}</h1>
                        </div>
                    </div>
                    <div className='mt-[30px]'>
                        <button className='px-5 py-3.5 rounded-sm text-white bg-[#00D390] text-xl font-semibold'>Intall Now ({SingleApp.size} MB)</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDetail;