import React from 'react'
import { RiSearch2Line } from "react-icons/ri";
import { IoIosArrowRoundForward } from "react-icons/io";

const SearchBar = () => {
    return (
        <div className='flex items-center justify-center w-[560px] p-1 my-7 bg-white shadow-lg rounded-[28px]'>
            <RiSearch2Line
                size={30}
                className='ml-3 text-slate-400'
            />

            <input
                type="text"
                // value={''}
                placeholder='Search for a product, gtin, brand or category'
                // onChange={(e) => setInputValue(e.target.value)}
                className='w-full px-1 py-3 mx-2 bg-white outline-none text-slate-950'
            />

            <button className='p-3 rounded-full bg-primary'>
                <IoIosArrowRoundForward
                    size={30}
                    className='text-white'
                />
            </button>
        </div>
    )
}

export default SearchBar