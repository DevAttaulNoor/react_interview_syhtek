import React from 'react'
import Brands from '../assets/Images/Brands.png'
import BrandsBg from '../assets/Images/BrandsBg.png'

const BrandGroup = () => {
    return (
        <div>
            <img
                src={BrandsBg}
                alt="brandsGroup"
                className='w-full'
            />

            <img
                src={Brands}
                alt="brandsGroup"
                className='w-3/4 absolute bottom-0 left-0 p-12'
            />
        </div>
    )
}

export default BrandGroup