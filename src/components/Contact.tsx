"use client"
import { GithubIcon, Linkedin, Mail } from 'lucide-react'
import React from 'react'
import { motion } from "motion/react";

function Contact() {
    return (
        <section id='contact' className="text-center py-24 min-h-screen perspective-[1000px] [transform-style:preserve-3d]">
            <h2 className="text-3xl font-semibold">Get in Touch</h2>
            <p className="text-slate-400 pb-10 border-b border-slate-500">Let&apos;s connect and build something amazing!</p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-xl my-10">
                <motion.a
                    whileHover={{
                        rotateX: 15,
                        rotateY: 15,
                        translateZ: 100,
                        y: -5,
                        boxShadow: '0px 10px 25px rgba(8,112,184,0.7)' //overrides below shadow
                    }}
                    transition={{
                        duration: 0.3,
                        ease: 'easeInOut'
                    }}
                    whileTap={{
                        y: 0
                    }}
                    href="mailto:hiaayush30@gmail.com"
                    target='_blank'
                    className="group relative p-3 flex items-center gap-2 bg-stone-900 rounded-lg shadow-[0px_1px_4px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]">
                    <Mail className='group-hover:text-cyan-500 transition-colors duration-300' />
                    <span className='group-hover:text-cyan-500 transition-colors duration-300'>Email</span>
                    <span className='absolute inset-x-0 h-px bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-3/4 mx-auto'></span>
                    <span className='group-hover:opacity-100 opacity-0 transition-all duration-300  blur:md absolute inset-x-0 h-[3px] bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-full mx-auto'></span>
                </motion.a>
                <motion.a
                    whileHover={{
                        y: -5,
                        boxShadow: '0px 10px 40px rgba(8,112,184,0.7)'
                    }}
                    transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                    }}
                    whileTap={{
                        y: 0
                    }}
                    href="https://github.com/hiaayush30"
                    className="relative p-3 flex items-center group gap-2 bg-stone-900 rounded-lg shadow-[0px_1px_4px_0px_rgba(90,90,90,0.2)_inset,0px_-1px_3px_0px_rgba(90,90,90,0.2)_inset]">
                    <GithubIcon className='group-hover:text-cyan-500 transition-colors duration-300' />
                    <span className='group-hover:text-cyan-500 transition-colors duration-300'>Github</span>
                    <span className='absolute bg-gradient-to-r from-transparent via-cyan-400 to-transparent inset-x-0 h-px bottom-px w-3/4 mx-auto'></span>
                    <span className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bg-gradient-to-r from-transparent via-cyan-400 to-transparent inset-x-0 h-[4px] bottom-px blur-md'></span>
                </motion.a>
                <motion.a
                    whileHover={{
                        rotateX: -15,
                        rotateY: 15,
                        translateZ: 100,
                        y: -5,
                        boxShadow: '0px 10px 25px rgba(8,112,184,0.7)' //overrides below shadow
                    }}
                    transition={{
                        duration: 0.3,
                        ease: 'easeInOut'
                    }}
                    whileTap={{
                        y: 0
                    }}
                    href="https://linkedin.com/in/hiaayush30"
                    target='_blank'
                    className="group relative p-3 flex items-center gap-2 bg-stone-900 rounded-lg shadow-[0px_1px_4px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]">
                    <Linkedin className='group-hover:text-cyan-500 transition-colors duration-300' />
                    <span className='group-hover:text-cyan-500 transition-colors duration-300'>LinkedIn</span>
                    <span className='absolute inset-x-0 h-px bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-3/4 mx-auto'></span>
                    <span className='group-hover:opacity-100 opacity-0 transition-all duration-300  blur:md absolute inset-x-0 h-[3px] bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-full mx-auto'></span>
                </motion.a>
            </div>
        </section>
    )
}

export default Contact
