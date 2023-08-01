import React from 'react'
import { LuSearch } from 'react-icons/lu'

const Search = () => {
  return (
    <div className='flex justify-center items-center'>
        <form>
            <input className='relative bg-transparent py-1 border-white border-2 rounded-full'/>
            <button className='absolute flex justify-center items-center top-1 bottom-1 right-4 border-2 rounded-full border-[#DB9100] px-1 py-2'>
                <LuSearch size={16} color="#DB9100"/>
            </button>
        </form>
    </div>
  )
}

export default Search