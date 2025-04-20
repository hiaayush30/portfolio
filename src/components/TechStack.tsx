import Image from 'next/image'
import React from 'react'

function TechStack() {
    return (
        <section className="max-w-2xl mx-auto text-center py-24">
            <h2 id='techStack' className="text-3xl font-semibold py-5">My Tech Stack</h2>
            <div className="flex flex-wrap gap-10 justify-center py-3">
                <div className='bg-white rounded-full p-2 border-4'>
                    <Image alt="prisma" src="/reactIcon.png" height={100} width={100} className="flex-none" />
                </div>
                <div className='bg-white rounded-full p-2'>
                    <Image alt="prisma" src="/tailwind.png" height={100} width={100} className="flex-none" />
                </div>
                <div className='bg-white rounded-full p-2'>
                    <Image alt="prisma" src="/mongodb.png" height={100} width={100} className="flex-none" />
                </div>
                <div className='bg-white rounded-full p-2'>
                    <Image alt="prisma" src="/git.png" height={100} width={100} className="flex-none" />
                </div>
                <div className='bg-white rounded-full p-2'>
                    <Image alt="prisma" src="/postgresql.png" height={100} width={100} className="flex-none" />
                </div>
                <div className='bg-white rounded-full p-2'>
                    <Image alt="prisma" src="/prisma.png" height={100} width={100} className="flex-none" />
                </div>
            </div>
        </section>
    )
}

export default TechStack
