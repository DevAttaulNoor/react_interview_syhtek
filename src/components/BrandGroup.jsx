import React from 'react'
import Brands from '../assets/Images/Brands.png'
import BrandsBg from '../assets/Images/BrandsBg.png'

const BrandGroup = () => {
    return (
        <div className='mt-14'>
            <img
                src={Brands}
                alt="brands"
                className='absolute bottom-0 left-0 w-[75%] p-4 xl:w-3/4 xl:p-12 lg:p-10 md:p-8 sm:p-6'
            />

            <img
                src={BrandsBg}
                alt="brandsBg"
                className='w-full absolute bottom-0 left-0 -z-40'
            />
        </div>
    )
}

export default BrandGroup