import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import SearchBox from '../components/SearchBox'
import { CiSquarePlus } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Requests = () => {
    const tableArray = Array.from({length : 10}, (_,i) => i+1)

  return (
      <div className=' border border-[#d175b7] rounded-box'>
          <div className='flex pt-4 px-2 justify-between items-center'>
            <h1 className='text-lg font-semibold'>Event Requests</h1>
            <div className='flex justify-end items-center gap-1'>
                <SearchBox />
                <CiSquarePlus className='text-4xl '/>
            </div>
          </div>
          <div className="overflow-x-auto mt-4 text-xs rounded-box border border-[#d175b7] bg-transparent">
    <table className="table">
      {/* head */}
      <thead className='text-white bg-[#d175b7]'>
        <tr >
          <th className='flex gap-2 items-center'>Event Name <span className=' bg-white text-[#d175b7]  rounded-full'><IoIosArrowUp /></span></th>
          <th className=''>Event Start</th>
          <th className='flex gap-2 items-center'>Event End <span className=' bg-white text-[#d175b7]  rounded-full'><IoIosArrowUp /></span></th>
          <th className=''>Client Name </th>
          <th className='flex gap-2 items-center'>Contact Info <span className=' bg-white text-[#d175b7]  rounded-full'><IoIosArrowUp /></span></th>
          <th>Venue</th>
        </tr>
      </thead>
      <tbody>
        {
          tableArray.map(item => {
              return (
                  <tr key={item} className='border border-[#d175b7] text-xs'>
          <td className='flex gap-2 items-center'><Link to="./events" className='text-lg'><AiOutlineEye/></Link> Feild Name</td>
          <td className='whitespace-nowrap'>Jan 12, 2025</td>
          <td className='whitespace-nowrap'>Jan 14, 2025</td>
          <td className='whitespace-nowrap'>Sourav Ghosh</td>
          <td className='whitespace-nowrap'>+91 999999999</td>
          <td className='whitespace-nowrap'>Lorem ipsum dolor sit amet</td>
        </tr>
              )
          })
        }
      </tbody>
      
    </table>
    <div className="join p-4 w-fit mx-auto flex gap-2">
              <button className="join-item btn rounded-lg btn-xs"><FaArrowLeft /></button>
    <button className="join-item btn rounded-lg btn-xs">1</button>
    <button className="join-item btn rounded-lg btn-xs">2</button>
    <button className="join-item btn rounded-lg  btn-xs">...</button>
    <button className="join-item btn rounded-lg btn-xs">99</button>
    <button className="join-item btn rounded-lg btn-xs">100</button>
    <button className="join-item btn rounded-lg btn-xs"><FaArrowRight /></button>
  </div>
  </div>
      </div>
    )
}

export default Requests