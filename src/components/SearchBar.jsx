import React from 'react'
import { RiSearch2Line } from "react-icons/ri";
import { IoIosArrowRoundForward } from "react-icons/io";

const SearchBar = () => {
    return (
        <div
            className='flex items-center justify-center w-[680px] p-1 my-7 bg-white shadow-full rounded-cylindrical'>
            <RiSearch2Line
                size={30}
                className='ml-3 text-slate-400'
            />

            <input
                type="text"
                value={''}
                placeholder='Search for a product, gtin, brand or category'
                onChange={() => { }}
                className='w-full px-1 py-3 mx-2 bg-white outline-none text-slate-950'
            />

            <button className='p-3 rounded-full btn-primary'>
                <IoIosArrowRoundForward size={30} />
            </button>
        </div>
    )
}

export default SearchBar