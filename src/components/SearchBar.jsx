import React from 'react'
import { RiSearch2Line } from "react-icons/ri";
import { IoIosArrowRoundForward } from "react-icons/io";

const SearchBar = () => {
    return (
        <div
            className='flex items-center justify-center p-1 w-1/2 sm:w-1/2 xl:w-[680px] my-7 bg-white shadow-full rounded-cylindrical'>
            <RiSearch2Line
                size={30}
                className='ml-3 text-slate-400'
            />

            <input
                type="text"
                value={''}
                placeholder='Search for a product, gtin, brand or category'
                onChange={() => { }}
                className='w-full px-1 py-1 mx-2 sm:py-1 xl:py-3 bg-white outline-none text-slate-950'
            />

            <button className='p-1 xl:p-3 md:p-2 sm-p-1 rounded-full btn-primary'>
                <IoIosArrowRoundForward size={30} />
            </button>
        </div>
    )
}

export default SearchBar