import React from 'react'
import SearchBar from './SearchBar'

const TagLine = () => {
    return (
        <div className='relative w-full flex flex-col items-center justify-center pt-36 md:pt-28 lg:pt-14 xl:pt-1'>
            <h1 className='text-3xl leading-snug font-extrabold tracking-tighter text-center font-secondary xl:text-[54px] xl:leading-snug lg:text-5xl lg:leading-snug md:text-4xl md:leading-snug sm:text-3xl sm:leading-snug'>
                Compare prices for over <br /> 5 million products sold online
            </h1>

            <SearchBar />

            <button className='px-5 py-3 xl:px-16 xl:py-3 lg:px-13 md:px-10 sm:px-7 text-xs xl:text-lg md:text-sm font-semibold font-primary rounded-cylindrical btn-primary'>
                Search
            </button>

            <div className='w-1/2 lg:w-1/3 text-center font-primary text-slate-500 text-xs md:text-sm xl:text-[16px] mt-2 xl:mt-5 md:mt-3'>
                Price comparison helps you save 100s of pounds on online shopping.
                Start by searching for the product you want to buy and see whats the
                cheapest price availoble online.
            </div>
        </div>
    )
}

export default TagLine