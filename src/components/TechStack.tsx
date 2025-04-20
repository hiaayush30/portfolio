import Image from 'next/image'
import React from 'react'
import Tooltip from './Tooltip'

function TechStack() {
    return (
        <section className="max-w-2xl mx-auto text-center py-24">
            <h2 id='techStack' className="text-3xl font-semibold py-5">My Tech Stack</h2>
            <p className="text-xl text-slate-500 font-semibold text-center mb-8">Skills which I am pretty confident in</p>
            <div className="px-5 flex flex-wrap gap-5 md:gap-15 justify-center py-3 items-center">
                <div className='bg-white rounded-full p-2 relative group cursor-pointer hover:shadow-lg shadow-cyan-400 hover:scale-105'>
                    <Image alt="next.js" src="/next-js.svg" height={50} width={50} className="flex-none md:text-lg" />
                    <Tooltip text='next.js' className='hidden group-hover:block' />
                </div>
                <div className='bg-white rounded-full p-2 relative group cursor-pointer hover:shadow-lg shadow-cyan-400 hover:scale-105'>
                    <Image alt="react" src="/reactIcon.png" height={50} width={50} className="flex-none" />
                    <Tooltip text='react' className='hidden group-hover:block' />
                </div>
                <div className='bg-white rounded-full p-2 relative group cursor-pointer hover:shadow-lg shadow-cyan-400 hover:scale-105'>
                    <Image alt="tailwind" src="/tailwind.png" height={50} width={50} className="flex-none" />
                    <Tooltip text='tailwind' className='hidden group-hover:block' />
                </div>
                <div className='bg-white rounded-full p-2 relative group cursor-pointer hover:shadow-lg shadow-cyan-400 hover:scale-105'>
                    <Image alt="mongodb" src="/mongodb.png" height={50} width={50} className="flex-none" />
                    <Tooltip text='mongodb' className='hidden group-hover:block' />
                </div>
                <div className='bg-white rounded-full p-2 relative group cursor-pointer hover:shadow-lg shadow-cyan-400 hover:scale-105'>
                    <Image alt="git" src="/git.png" height={50} width={50} className="flex-none" />
                    <Tooltip text='git' className='hidden group-hover:block' />
                </div>
                <div className='bg-white rounded-full p-2 relative group cursor-pointer hover:shadow-lg shadow-cyan-400 hover:scale-105'>
                    <Image alt="postgresql" src="/postgresql.png" height={50} width={50} className="flex-none p-2" />
                    <Tooltip text='postgresql' className='hidden group-hover:block' />
                </div>
                <div className='bg-white rounded-full p-2 relative group cursor-pointer hover:shadow-lg shadow-cyan-400 hover:scale-105'>
                    <Image alt="prisma" src="/prisma.png" height={50} width={50} className="flex-none" />
                    <Tooltip text='prisma' className='hidden group-hover:block' />
                </div>
                <div className='bg-white rounded-full p-2 relative group cursor-pointer hover:shadow-lg shadow-cyan-400 hover:scale-105'>
                    <Image alt="javascript" src="/js.png" height={50} width={50} className="flex-none" />
                    <Tooltip text='javascript' className='hidden group-hover:block' />
                </div>
                <div className='bg-white rounded-full p-2 relative group cursor-pointer hover:shadow-lg shadow-cyan-400 hover:scale-105'>
                    <Image alt="java" src="/java.png" height={50} width={50} className="flex-none" />
                    <Tooltip text='java' className='hidden group-hover:block' />
                </div>
                <div className='bg-white rounded-full p-2 relative group cursor-pointer hover:shadow-lg shadow-cyan-400 hover:scale-105'>
                    <Image alt="c" src="/c.png" height={50} width={50} className="flex-none" />
                    <Tooltip text='c' className='hidden group-hover:block' />
                </div>
                <div>
                    Trust me I adapt quickly :)
                </div>
            </div>
        </section>
    )
}

export default TechStack
