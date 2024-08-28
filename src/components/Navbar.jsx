import React from 'react';
import Logo from '../assets/Images/Logo.png';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-20 py-12 mx-10'>
            <img src={Logo} alt="logo" />

            <div className='flex items-center gap-6'>
                <p className='nav-link'>Categories</p>
                <p className='nav-link'>Brands</p>
                <p className='nav-link'>Contact Us</p>
                <button className='px-6 py-3 text-sm text-white rounded-3xl bg-primary'>Sell With Us</button>
            </div>
        </div>
    )
}

export default Navbar