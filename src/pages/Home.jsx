import React from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'

import MobileScreen1 from '../assets/Images/MobileScreen1.png'
import MobileScreen2 from '../assets/Images/MobileScreen2.png'
import BrandGroup from '../components/BrandGroup'

const Home = () => {
    return (
        <div className='relative w-full h-screen'>
            <Navbar />

            <div className='flex flex-col items-center justify-center my-5'>
                <h1 className='text-5xl font-extrabold leading-snug tracking-tighter text-center font-secondary'>
                    Compare prices for over <br /> 5 million products sold online
                </h1>

                <SearchBar />

                <button className='px-16 py-4 mt-2 mb-6 text-sm font-semibold text-white rounded-[28px] bg-primary font-primary'>
                    Search
                </button>

                <div className='text-center font-primary text-slate-500'>
                    Price comparison helps you save 100s of pounds on online shopping. <br />
                    Start by searching for the product you want to buy and see whats the <br />
                    cheapest price availoble online.
                </div>

                <div>
                    <img
                        src={MobileScreen1}
                        alt="mobileScreen1"
                        className='absolute bottom-0 left-0 h-[520px] -z-10'
                    />
                    <img
                        src={MobileScreen2}
                        alt="mobileScreen1"
                        className='absolute bottom-0 right-0 h-[520px] -z-10'
                    />
                </div>
            </div>

            <BrandGroup />
        </div>
    )
}

export default Home