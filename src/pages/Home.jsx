import React from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import MainImg from '../assets/Images/MainImg.png'
import BrandGroup from '../components/BrandGroup'
import MobileScreen1 from '../assets/Images/MobileScreen1.png'
import MobileScreen2 from '../assets/Images/MobileScreen2.png'

const Home = () => {
    return (
        <>
            <img src={MainImg} alt="homeBackgroundImg" className='h-screen w-full absolute top-0 right-0 -z-50' />

            <div className='relative w-full h-screen flex flex-col justify-between'>
                <Navbar />

                <div>
                    <div className='flex flex-col items-center justify-center mb-14 '>
                        <h1 className='text-[52px] font-extrabold leading-snug tracking-tighter text-center font-secondary'>
                            Compare prices for over <br /> 5 million products sold online
                        </h1>

                        <SearchBar />

                        <button className='px-16 py-3 font-semibold font-primary rounded-cylindrical btn-primary'>
                            Search
                        </button>

                        <div className='text-center font-primary text-slate-500 mt-5'>
                            Price comparison helps you save 100s of pounds on online shopping. <br />
                            Start by searching for the product you want to buy and see whats the <br />
                            cheapest price availoble online.
                        </div>

                        <div>
                            <img
                                src={MobileScreen1}
                                alt="mobileScreen1"
                                className='absolute -bottom-[50px] left-2 h-[580px] w-[465px] -z-10'
                            />
                            <img
                                src={MobileScreen2}
                                alt="mobileScreen1"
                                className='absolute -bottom-[160px] right-0 h-[680px] w-[405px] -z-10'
                            />
                        </div>
                    </div>

                    <BrandGroup />
                </div>
            </div>
        </>
    )
}

export default Home