import React, { useState } from 'react';
import Logo from '../assets/Images/Logo.png';

const Navbar = () => {
    const [active, setActive] = useState('Categories');

    return (
        <div className='flex items-center justify-between p-2 m-0 xl:px-20 xl:py-10 xl:mx-8 lg:px-16 lg:py-8 lg:mx-6 md:px-12 md:py-6 md:mx-3 sm:px-8'>
            <img src={Logo} alt="logo" className='w-1/4' />

            <div className='flex items-center gap-1 lg:gap-4 md:gap-3 sm:gap-2'>
                <p
                    onClick={() => setActive('Categories')}
                    className={`${active === 'Categories' ? 'nav-link-active' : ''} nav-link`}
                >
                    Categories
                </p>

                <p
                    onClick={() => setActive('Brands')}
                    className={`${active === 'Brands' ? 'nav-link-active' : ''} nav-link`}
                >
                    Brands
                </p>

                <p
                    onClick={() => setActive('Contact Us')}
                    className={`${active === 'Contact Us' ? 'nav-link-active' : ''} nav-link`} >
                    Contact Us
                </p>

                <button className='px-3 py-2 md:px-5 md-py-2 lg:px-7 lg:py-3 text-xs md:text-sm sm:text-xs font-primary rounded-cylindrical btn-primary'>Sell With Us</button>
            </div>
        </div>
    )
}

export default Navbar