import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { pageMenu } from '../data';
import { Link } from 'react-router-dom';

const Details = () => {
  return (
    <div className=''>
            <div className='flex justify-start items-center gap-2 p-2'>
            <Link to="/" className='px-2 py-2 rounded-full bg-stone-700'><FaArrowLeft /></Link>
            <span className='text-lg'>Event Name</span>
            <span>(Venue Here)</span>
            </div>
        <div className='flex overflow-x-auto max-w-fit border-2 border-[#d175b7] items-center'>
            {
                pageMenu.map((item,i) => {
                    return (
                        <div className={`text-xs whitespace-nowrap text-[#ee54c2] p-3 border-r-2 border-[#d175b7] ${item.id == 2 ? "bg-[#d175b7] text-white" : ""}`}>{item.name}</div>
                    )
                })
            }
        </div>
        <div className='my-4 flex flex-col md:justify-between md:items-center md:flex-row gap-2'>
            <div className='md:w-1/2'>
            <h1 className='text-lg'>Assign Coorinator</h1>
            <fieldset className="fieldset my-2">
  <select defaultValue="Search Coordinator" className="select text-black">
    <option >Search Coordinator</option>
  </select>
  <span className="fieldset-label text-[#e053b8] text-semibold">Add new Coordinator</span>
</fieldset>
            </div>
            <div className='md:w-1/2'>
            <h1 className='hidden mb-2 md:inline-block'>Event Name <span className='text-xs'>(Venue Here)</span></h1>
            <div className='flex text-xs justify-between gap-2 items-center p-2 border-2 border-[#d175b7]'>
            <h1>Start: 12-12-2023</h1>
            <h1>Ends: 15-12-2023</h1>
            </div>
            <h1 className='p-2 mt-2 text-xs border-2 border-[#d175b7]'>Venue Address : <span className='text-semibold'>Some Location 12, Name Here, City, State</span></h1>
            </div>
        </div>
    </div>
  )
}

export default Details