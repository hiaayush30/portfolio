"use client"
import React from 'react'

function NavBar() {
  return (
    <nav className='hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 flex-col space-y-10'>
      <button onClick={() => {
        document.querySelector('#about')?.scrollIntoView({ behavior: "smooth" })
      }}
        className='cursor-pointer hover:scale-105 hover:text-cyan-400 transition-all'>About Me</button>
      <button onClick={() => {
        document.querySelector('#techStack')?.scrollIntoView({ behavior: "smooth" })
      }}
        className='cursor-pointer hover:scale-105 hover:text-cyan-400 transition-all'>Tech Stack</button>
      <button onClick={() => {
        document.querySelector('#projects')?.scrollIntoView({ behavior: "smooth" })
      }}
        className='cursor-pointer hover:scale-105 hover:text-cyan-400 transition-all'>Projects</button>
      <button onClick={() => {
        document.querySelector('#blogs')?.scrollIntoView({ behavior: "smooth" })
      }}
        className='cursor-pointer hover:scale-105 hover:text-cyan-400 transition-all'>Blogs</button>
      <button onClick={() => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: "smooth" })
      }}
        className='cursor-pointer hover:scale-105 hover:text-cyan-400 transition-all'>Contact</button>
    </nav>
  )
}

export default NavBar

