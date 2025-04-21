import { MapPin } from 'lucide-react'
import React from 'react'

function Hero() {
    return (
        <section className="relative text-center p-24 min-h-screen flex flex-col justify-center items-center">
            <div className='flex flex-col justify-center items-center py-5'>
                <h1 id='hero' className="text-4xl md:text-6xl font-bold mb-8">Hey, I&apos;m Aayush</h1>
                <span className='text-4xl'>👋</span>
            </div>
            <p className="text-xl md:text-2xl text-slate-400">
                MERN Stack & Next.js Developer
            </p>
            <p className="text-xl md:text-xl text-slate-200 py-5 flex items-center gap-3 justify-center">
                <MapPin />
                <span>Pune, India</span>
            </p>
        </section>
    )
}

export default Hero
