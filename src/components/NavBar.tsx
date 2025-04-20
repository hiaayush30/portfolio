import React from 'react'

function NavBar() {
  return (
    <nav className='hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 flex-col space-y-10'>
      <button className='cursor-pointer hover:scale-105 transition-all'>About Me</button>
      <button className='cursor-pointer hover:scale-105 transition-all'>Tech Stack</button>
      <button className='cursor-pointer hover:scale-105 transition-all'>Projects</button>
      <button className='cursor-pointer hover:scale-105 transition-all'>Blogs</button>
      <button className='cursor-pointer hover:scale-105 transition-all'>Contact</button>
    </nav>
  )
}

export default NavBar

