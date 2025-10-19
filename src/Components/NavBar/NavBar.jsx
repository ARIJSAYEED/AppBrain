import Logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router';
import GitHubIcon from '../../assets/github-icon.png'
import './Navbar.css'



const NavBar = () => {
    return (
        <div className='sticky top-0 z-10'>
            <div className='flex justify-between px-20 py-5 bg-white border-b-2 border-neutral-200'>
                <div>
                    <Link className='flex gap-1 items-center justify-center' to='/'>
                        <img className='h-10' src={Logo} alt="" />
                        <h1 className='text-[16px] font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>AppBrain</h1>
                    </Link>
                </div>
                <div className='flex justify-center items-center gap-8'>
                    <NavLink className='text-[16px] font-medium' to='/'>Home</NavLink>
                    <NavLink className='text-[16px] font-medium' to='/App'>App</NavLink>
                    <NavLink className='text-[16px] font-medium' to='/Installation'>Installation</NavLink>
                </div>
                <a className='flex justify-center items-center gap-2.5 py-3 px-4 rounded-sm bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:scale-105 duration-200' href="https://github.com/ARIJSAYEED" target='_blank'>
                    <img className='h-5' src={GitHubIcon} alt="" />
                    <h1 className='text-[16px] font-semibold text-white'>Contribute</h1>
                </a>
            </div>
        </div>
    );
};

export default NavBar;