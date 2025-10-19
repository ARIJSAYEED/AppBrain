import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Apps from '../Apps/Apps';
import NoAppFound from '../NoAppFound/NoAppFound';

const App = () => {
    let app = useLoaderData()

    let [search, setSearch] = useState('');
    let term = search.trim().toLocaleLowerCase();
    let searchedName = term ? app.filter(singleApp => singleApp.title.toLocaleLowerCase().includes(term)) : app


    return (
        <div className='py-20 bg-neutral-100 space-y-10 px-20'>
            <div className='flex flex-col gap-4 text-center'>
                <h1 className='text-5xl font-bold'>Our All Applications</h1>
                <p className='text-xl font-normal text-neutral-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between items-center'>
                <div className='text-2xl font-semibold'>({searchedName.length}) Apps Found</div>
                <div>
                    <input
                        className='rounded-sm px-4 py-3 border-2'
                        onChange={e => setSearch(e.target.value)}
                        type="search"
                        value={search}
                    />
                </div>
            </div>
            {searchedName.length === 0 ? (
                <NoAppFound></NoAppFound>
            ) : (
                <div className='grid grid-cols-4 gap-4'>
                    {searchedName.map(apps => (
                        <Apps key={apps.id} apps={apps} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default App;