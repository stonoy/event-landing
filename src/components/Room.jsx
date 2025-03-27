import React from 'react'
import { GiDiamonds } from "react-icons/gi";

const Room = () => {
    const roomArray = Array.from({length: 10}, (_,i) => i+1)

  return (
    <div>
        <h1>Assign Contractor</h1>
        <div className='flex flex-col my-4 p-2 justify-start items-center gap-4 max-h-56 md:max-h-[70vh] overflow-y-auto border border-[#d175b7]'>
            {
                roomArray.map(room => {
                    return (
                        <div key={room} className='p-2 border border-[#d175b7]'>
                            <div className='flex gap-1 justify-start items-center whitespace-nowrap'>
                                <h1 className='font-bold'>Meeting Room {room}</h1>
                                <GiDiamonds className='text-[#d175b7]'/>
                                <p className='text-[#ee54c2] text-sm'>12 Positions</p>
                            </div>
                            <p className='text-xs'>Start from 12 Jan, 2023-Ends at 15 Jan, 2023</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Room