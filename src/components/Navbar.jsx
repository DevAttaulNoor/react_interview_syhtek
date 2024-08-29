import React, { useState } from 'react';
import Logo from '../assets/Images/Logo.png';

const Navbar = () => {
    const [active, setActive] = useState('Categories');

    return (
        <div className='flex items-center justify-between px-20 py-10 mx-10'>
            <img src={Logo} alt="logo" />

            <div className='flex items-center gap-6'>
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

                <button className='px-7 py-3 text-sm font-primary rounded-cylindrical btn-primary'>Sell With Us</button>
            </div >
        </div >
    )
}

export default Navbar