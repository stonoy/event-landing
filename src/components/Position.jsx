import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Position = () => {
    const tableArray = Array.from({length : 5}, (_,i) => i+1)

  return (
    <div>
        <h1>Positions</h1>
        <div className="overflow-x-auto my-4 text-xs rounded-box border border-[#d175b7] bg-[#010101]">
  <table className="table">
    {/* head */}
    <thead className='text-white border-b-2 border-[#d175b7]'>
      <tr>
        <th>Position</th>
        <th>Time</th>
        <th>Info</th>
        <th>Quantity</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        tableArray.map(item => {
            return (
                <tr key={item} className='border border-[#d175b7] text-xs'>
        <th className='whitespace-nowrap'>Camera {item} (Video)</th>
        <td>9am - 7pm</td>
        <td><span className='font-semibold'>LP</span>default</td>
        <td>20</td>
        <td className='w-auto'>
        <select defaultValue="Select Coordinator" className="select min-w-24 text-black">
            <option >Select Coordinator</option>
</select>
        </td>
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

export default Position