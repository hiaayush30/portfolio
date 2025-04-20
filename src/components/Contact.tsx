import React from 'react'

function Contact() {
    return (
        <section className="text-center py-24">
            <h2 className="text-3xl font-semibold">Get in Touch</h2>
            <p className="text-slate-400">Let&apos;s connect and build something amazing!</p>
            <div className="flex justify-center gap-6 text-xl">
                <a href="mailto:hiaayush30@gmail.com" className="hover:text-blue-400">Email</a>
                <a href="https://github.com/hiaayush30" target="_blank" className="hover:text-blue-400">GitHub</a>
                <a href="https://linkedin.com/in/hiaayush30" target="_blank" className="hover:text-blue-400">LinkedIn</a>
            </div>
        </section>
    )
}

export default Contact
