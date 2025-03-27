import React from 'react'
import Details from '../components/Details'
import Room from '../components/Room'
import Position from '../components/Position'

const Events = () => {
  return (
    <div className="p-2 rounded-lg border-2 border-[#d175b7]  shadow-[0_0_2px_#d175b7]">
          <Details/>
          <div className='flex flex-col gap-2 md:flex-row'>
          <Room/>
          <Position />
          </div>
          <div className='w-fit mx-auto'>
          <button className="btn btn-md bg-[#d175b7] text-white rounded-lg">Save Edits</button>
          </div>
        </div>
  )
}

export default Events