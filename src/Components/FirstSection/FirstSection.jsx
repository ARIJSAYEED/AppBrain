import React from 'react';
import GooglePlayStoreIcon from '../../assets/google-play-icon.png'
import AppStoreIcon from '../../assets/app-store-icon.png'
import HeroImg from '../../assets/hero.png'

const FirstSection = () => {
    return (
        <div className='flex flex-col justify-center items-center space-y-10 pt-20'>
            <div>
                <h1 className='text-7xl font-bold text-center'>We Build<br/><span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
            </div>
            <div className='text-xl font-normal text-neutral-500 text-center'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br/> Our goal is to turn your ideas into digital experiences that truly make an impact.</div>
            <div className='flex gap-4'>
                <a target='_blank' className='flex justify-center items-center gap-2.5 px-6 py-3 rounded-sm border-2 border-neutral-200 hover:scale-105 duration-200' href="https://play.google.com/store/games">
                    <img className='h-8' src={GooglePlayStoreIcon} alt="" />
                    <button>Google Play</button>
                </a>
                <a target='_blank' className='flex justify-center items-center gap-2.5 px-6 py-3 rounded-sm border-2 border-neutral-200 hover:scale-105 duration-200' href="https://www.apple.com/app-store/">
                    <img className='h-8' src={AppStoreIcon} alt="" />
                    <button>App Store</button>
                </a>
            </div>
            <div><img src={HeroImg} alt="" /></div>
        </div>
    );
};

export default FirstSection;