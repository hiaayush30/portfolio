import About from '@/components/About'
import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import { projects } from '@/lib/projects'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const techStack = [
  {
    name: "React",
    icon: "/reactIcon.png"
  },
  {
    name: "Mongodb",
    icon: "/mongodb.png"
  },
  {
    name: "Prisma",
    icon: "/prisma.png"
  }
]

export default function Page() {
  return (
    <div className='flex justify-center'>
      <main className="md:w-[70%] sm:w-[90%] min-h-screen bg-slate-950 text-white px-6 py-12 space-y-24">

        <Hero />
        <About />

        {/* Tech Stack */}
        <section className="max-w-2xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-semibold">My Tech Stack</h2>
          <div className="flex flex-wrap gap-3 justify-between py-3">
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
          </div>
        </section>

        {/* Projects Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {
              projects.length > 0 && (
                projects.map((project) => {
                  return (
                    <div key={project.title} className="bg-slate-900 p-6 rounded-2xl shadow-md hover:shadow-blue-500 transition-shadow">
                      <h3 className="text-2xl font-medium mb-2">{project.title}</h3>
                      <p className="text-slate-400">
                        {project.description}
                      </p>
                      <div className='flex gap-3'>
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 text-blue-400 hover:underline underline-offset-4 flex items-center gap-1"
                        >
                          View Code <ArrowRight className='size-4' />
                        </a>
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 text-blue-400 hover:underline underline-offset-4 flex items-center gap-1"
                        >
                          Live link <ArrowRight className='size-4' />
                        </a>
                      </div>
                    </div>
                  )
                })
              )
            }
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center space-y-4">
          <h2 className="text-3xl font-semibold">Get in Touch</h2>
          <p className="text-slate-400">Let&apos;s connect and build something amazing!</p>
          <div className="flex justify-center gap-6 text-xl">
            <a href="mailto:hiaayush30@gmail.com" className="hover:text-blue-400">Email</a>
            <a href="https://github.com/hiaayush30" target="_blank" className="hover:text-blue-400">GitHub</a>
            <a href="https://linkedin.com/in/hiaayush30" target="_blank" className="hover:text-blue-400">LinkedIn</a>
          </div>
        </section>
        <NavBar />
      </main>
    </div>
  )
}
