import React from 'react'
import { menu } from '../data'
import { CiLogout } from "react-icons/ci";

import NavLink from './NavLink';

const Sidebar = () => {
  return (
    <section className='hidden md:flex md:flex-col border-2 border-[#d175b7]  shadow-[0_0_2px_#d175b7]'>
        <div>
            {
            menu.map(item => {
                return <NavLink key={item?.id} {...item} />
            })
            }
        </div>
        <button className='btn bg-black m-2 text-white'><span><CiLogout /></span>Logout</button>
    </section>
  )
}

export default Sidebar