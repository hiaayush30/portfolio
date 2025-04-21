import About from '@/components/About'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import Projects from '@/components/Projects'
import TechStack from '@/components/TechStack'
import React from 'react'

export default function Page() {
  return (
    <div className='flex justify-center'>
      <main className="md:w-[70%] sm:w-[90%] min-h-screen  text-white px-6 py-12 space-y-24">
        <Hero />
        <About />
        <TechStack/>
        <Projects/>
        <Contact/>
        <NavBar />
      </main>
    </div>
  )
}
