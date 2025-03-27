import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <main className='bg-gradient-to-br min-h-screen to-[#533a84] from-[#010101] text-white w-full'>
     
      
      <section className='align-element'>
        <Navbar />
        <div className='md:flex gap-4 justify-center items-start'>
          <Sidebar />
            <Outlet />
        </div>
      
      </section>
    </main>
  )
}

export default HomeLayout