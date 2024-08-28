import React from 'react'
import Brands from '../assets/Images/Brands.png'

const BrandGroup = () => {
    return (
        <div
            style={{
                backgroundImage: 'linear-gradient(to right, black 78%, transparent 78%), linear-gradient(to bottom, transparent 90%, black 10%, black 100%)',
                borderRadius: "0px 100px 0px 0px"
            }}
            className='py-16'
        >
            <img
                src={Brands}
                alt="brandsGroup"
                className='w-2/3'
            />
        </div>
    )
}

export default BrandGroup