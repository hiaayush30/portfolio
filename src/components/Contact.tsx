import { GithubIcon, Linkedin, Mail } from 'lucide-react'
import React from 'react'

function Contact() {
    return (
        <section id='contact' className="text-center py-24 min-h-screen">
            <h2 className="text-3xl font-semibold">Get in Touch</h2>
            <p className="text-slate-400 pb-10 border-b border-slate-500">Let&apos;s connect and build something amazing!</p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-xl my-10">
                <a
                    href="mailto:hiaayush30@gmail.com"
                    className="hover:text-blue-500 p-3 flex items-center gap-2 border-2 hover:border-blue-500">
                    <Mail />
                    <span>Email</span>
                </a>
                <a
                    href="https://github.com/hiaayush30"
                    className="hover:text-blue-500 p-3 flex items-center gap-2 border-2 hover:border-blue-500">
                    <GithubIcon />
                    <span>Github</span>
                </a>
                <a
                    href="https://linkedin.com/in/hiaayush30"
                    className="hover:text-blue-500 p-3 flex items-center gap-2 border-2 hover:border-blue-500">
                    <Linkedin />
                    <span>LinkedIn</span>
                </a>
            </div>
        </section>
    )
}

export default Contact
