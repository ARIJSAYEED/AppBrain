import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import DownloadIcon from '../../assets/icon-downloads.png'
import RatingIcon from '../../assets/icon-ratings.png'
import ReviewIcon from '../../assets/icon-review.png'
import { XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';


const AppDetail = () => {
    let { id } = useParams()
    let aid = parseInt(id)
    let data = useLoaderData()
    let SingleApp = data.find(app => app.id === aid)

    return (
        <div className='pt-20 bg-neutral-100 px-20'>
            <div className='flex gap-10 pb-10 border-b-2 border-neutral-300'>
                <div className='w-1/3'>
                    <img className='h-[420px]' src={SingleApp.image} alt="" />
                </div>
                <div className='w-2/3'>
                    <h1 className='text-[32px] font-bold'>{SingleApp.title}:{SingleApp.shortDescription}</h1>
                    <p className='text-xl font-semibold text-neutral-500 pb-[30px] border-b-2 border-neutral-300'>Developed by <span className='text-[#632EE3]'>{SingleApp.companyName}</span></p>
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
            {/* charts */}
            <div className='mt-4 flex justify-center pb-4 border-b-2 border-neutral-300'>
                <BarChart layout="vertical" width={1600} height={300} data={SingleApp.ratings}>
                    <Tooltip />
                    <XAxis className='text-lg font-normal text-neutral-500' type="number" dataKey="count" />
                    <YAxis className='text-lg font-normal text-neutral-500' width='auto' type="category" dataKey="name" reversed />
                    <Bar fill="#FF8811" type="monotone" dataKey="count" />
                </BarChart>
            </div>
            <div className='mt-10 space-y-4 pb-20'>
                <h1 className='text-2xl font-semibold'>Description</h1>
                <p className='text-xl font-normal text-neutral-500'>{SingleApp.description}</p>
            </div>


        </div>
    );
};

export default AppDetail;