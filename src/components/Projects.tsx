import { projects } from '@/lib/projects'
import { ArrowRight } from 'lucide-react'
import React from 'react'

function Projects() {
    return (
        <section id='projects' className="max-w-4xl mx-auto py-24">
            <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>
            <p className="text-xl text-slate-500 font-semibold text-center mb-8">Coded by me from scratch to deployment</p>
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
    )
}

export default Projects
