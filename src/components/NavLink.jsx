import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";

const NavLink = (item) => {
  return (
                      <ul  className="menu text-white rounded-box w-56 bg-transparent">
                          <li>
      <div className={`flex justify-between items-center ${item?.selected ? "border border-[#d175b7]" : ""}`}>
      <h2 className={`menu-title text-white `}>{item.name}</h2>
      { item.children.length > 0  && <span><IoMdArrowDropdown /></span>}
      </div>
      {
          item.children.length > 0 && 
          <ul className=''>
              {
                  item.children.map(list => <li key={list?.id} className="border-l border-[#d175b7]"><a href="#" className={`ml-1 ${list?.selected ? "border border-[#d175b7]" : ""}`}>- {list?.name}</a></li>)
              }
      </ul>
      }
    </li>
                      </ul>
                  )
}

export default NavLink