import React from 'react'

function Hero() {
    return (
        <section className="text-center p-24">
            <div className='flex flex-col justify-center items-center py-5'>
            <h1 id='hero' className="text-4xl md:text-6xl font-bold mb-8">Hey, I&apos;m Aayush</h1>
            <span className='text-4xl'>👋</span>
            </div>
            <p className="text-xl md:text-2xl text-slate-400">
                MERN Stack & Next.js Developer
            </p>
        </section>
    )
}

export default Hero
