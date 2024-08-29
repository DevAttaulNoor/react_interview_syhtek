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
                    className='left-mobileImg'
                />
                <img
                    src={MobileScreen2}
                    alt="mobileScreen1"
                    className='right-mobileImg'
                />
            </div>

            <BrandGroup />
        </div>
    )
}

export default Home