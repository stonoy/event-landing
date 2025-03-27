import React from 'react'

const SearchBox = () => {
  return (
    <div className="relative">
  <input 
    type="text" 
    placeholder="Search" 
    className="input input-sm text-black w-24 md:w-44 pl-10"
  />
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth="2" 
    stroke="currentColor" 
    className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M9.75 17a7.25 7.25 0 1 1 7.25-7.25 7.25 7.25 0 0 1-7.25 7.25z" />
  </svg>
</div>

  )
}

export default SearchBox