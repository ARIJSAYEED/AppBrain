import React from 'react';
import { useLoaderData } from 'react-router';
import Apps from '../Apps/Apps';

const App = () => {
    let app = useLoaderData()
    return (
        <div className='py-20 bg-neutral-100 space-y-10 px-20'>
            <div className='flex flex-col gap-4 text-center'>
                <h1 className='text-5xl font-bold'>Our All Applications</h1>
                <p className='text-xl font-normal text-neutral-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between items-center'>
                <div className='text-2xl font-semibold'>({app.length}) Apps Found</div>
                <div>
                    <input className='rounded-sm px-4 py-3 border-2' type="search" />
                </div>
            </div>
            <div className='grid grid-cols-4 gap-4'>
            {
                app.map(apps=><Apps key={apps.id} apps={apps}></Apps>)
            }
            </div>
        </div>
    );
};

export default App;