import React from 'react'
import Navbar from '../components/Navbar'
import TagLine from '../components/TagLine'
import BrandGroup from '../components/BrandGroup'
import MainImg from '../assets/Images/MainImg.png'
import MobileScreen1 from '../assets/Images/MobileScreen1.png'
import MobileScreen2 from '../assets/Images/MobileScreen2.png'

const Home = () => {
    return (
        <div className='w-full h-screen'>
            <img src={MainImg} alt="homeBackgroundImg" className='h-screen w-full absolute top-0 right-0 -z-50' />

            <Navbar />
            <TagLine />

            <div>
                <img
                    src={MobileScreen1}
                    alt="mobileScreen1"
                    className='absolute -z-50 -bottom-10 -left-10 h-1/2 w-1/2 sm:h-2/3 sm:-bottom-24 md:h-[70%] md:w-[40%] md:-bottom-20 lg:h-[80%] lg:w-[32%] lg:-left-6 xl:h-[75%] xl:w-[28%] xl:-bottom-8 xl:left-2'
                />
                <img
                    src={MobileScreen2}
                    alt="mobileScreen1"
                    className='absolute -z-50 -bottom-12 right-0 h-1/2 w-[40%] sm:h-2/3 sm:-bottom-24 md:h-[70%] md:w-[34%] md:-bottom-20 lg:h-[80%] lg:w-[28%] xl:h-[85%] xl:w-[25%] xl:-bottom-28'
                />
            </div>

            <BrandGroup />
        </div>
    )
}

export default Home