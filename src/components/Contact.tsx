import { GithubIcon, Linkedin, Mail } from 'lucide-react'
import React from 'react'

function Contact() {
    return (
        <section id='contact' className="text-center py-24">
            <h2 className="text-3xl font-semibold">Get in Touch</h2>
            <p className="text-slate-400">Let&apos;s connect and build something amazing!</p>
            <div className="flex justify-center gap-6 text-xl my-10">
                <a
                    href="mailto:hiaayush30@gmail.com"
                    className="hover:text-cyan-400 p-3 flex items-center gap-2 border-2 hover:border-cyan-400">
                    <Mail />
                    <span>Email</span>
                </a>
                <a
                    href="https://github.com/hiaayush30"
                    className="hover:text-cyan-400 p-3 flex items-center gap-2 border-2 hover:border-cyan-400">
                    <GithubIcon />
                    <span>Github</span>
                </a>
                <a
                    href="https://linkedin.com/in/hiaayush30"
                    className="hover:text-cyan-400 p-3 flex items-center gap-2 border-2 hover:border-cyan-400">
                    <Linkedin />
                    <span>LinkedIn</span>
                </a>
            </div>
        </section>
    )
}

export default Contact
