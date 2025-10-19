import React from 'react';
import Logo from '../../assets/logo.png'
import { Link } from 'react-router';
const Footer = () => {
    return (
        <div className=' px-20 py-10 bg-[#001931] text-white' >
            <div className='flex justify-between items-center border-b-2 border-neutral-800 pb-5'>
                <div>
                    <Link className='flex gap-1 items-center justify-center' to='/'>
                        <img className='h-10' src={Logo} alt="" />
                        <h1 className='text-[16px] font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>AppBrain</h1>
                    </Link>
                </div>
                <div >
                    <h1>Social Links</h1>
                </div>
            </div>
            <div className='mt-5 text-center'>
                <h1>Copyright © 2025 - All right reserved</h1>
            </div>
        </div>
    );
};

export default Footer;