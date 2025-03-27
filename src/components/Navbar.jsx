import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { TbCoinBitcoin } from "react-icons/tb";
import { TbInfoSquare } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className='flex p-2 justify-between items-center gap-2 '>
        <div className='flex justify-start items-center gap-2'>
            <TbCoinBitcoin className='text-2xl'/>
            <GiHamburgerMenu className='text-lg'/>
        </div>
        <div className='flex gap-1 justify-end items-center'>
            <TbInfoSquare className='text-lg'/>
            <IoNotificationsOutline className='text-lg'/>
            <div className='flex gap-1 items-center'>
                <div className=''>
                    <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D' className='w-12 h-12 rounded-full px-2 py-1 object-cover'/>
                </div>
                <div className=''>
                    <h1 className='text-sm'>Hi, Developer</h1>
                    <p className='text-xs'>Welcome Back!</p>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar