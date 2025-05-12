import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import Projects from '@/components/Projects'
import TechStack from '@/components/TechStack'
import React from 'react'

export default function Page() {
  return (
    <div id='home' className='flex justify-center'>
      <main className="md:w-[70%] sm:w-[90%] min-h-screen  text-white px-6 py-12 space-y-24">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
        <NavBar />
      </main>
      <a target='_blank' href='https://drive.google.com/file/d/1H3wdaBGV8zDgqSCYmyl6bToVl8zgIYyJ/view?usp=sharing'
        className='size-10 hover:scale-110 bg-cyan-500 fixed top-5 left-5 rounded-full text-white flex items-center justify-center font-semibold'>CV</a>
    </div>
  )
}
