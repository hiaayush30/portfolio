"use client"
import { motion } from "framer-motion"
import React, { useState } from 'react'
import { text } from "stream/consumers";


const links = [
  {
    text: "/",
    href: "#home"
  },
  {
    text: "About Me",
    href: "#about"
  },
  {
    text: "Tech Stack",
    href: "#techStack"
  },
  {
    text: "Projects",
    href: "#projects"
  },
  {
    text: "Blogs",
    href: "#blogs"
  },
  {
    text: "Contact",
    href: "#contact"
  }
]

const containerVariants = {
  hidden: { opacity: 0, right: -20 },
  visible: {
    opacity: 100,
    right: 10,
    transition: {
      delay: 2.7,
      ease: 'easeInOut',
      duration: 1,
      staggerChildren: 0.5, // Stagger the children's animation
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 }
};

function NavBar() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className='lg:text-lg xl:text-xl hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 flex-col'
    >
      {links.map((item, idx) => (
        <motion.button // Wrap the button with motion.button
          key={idx}
          variants={itemVariants} // Apply the item variants
          onMouseEnter={() => setHovered(idx)}
          onMouseLeave={() => setHovered(null)}
          className="relative group py-4"
          onClick={() => {
            document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          <span
            className='px-2 cursor-pointer relative group-hover:text-white z-10 mx-auto'
          >
            {item.text}
          </span>
          {hovered == idx && (
            <motion.span
              layoutId="hover"
              className="absolute bg-cyan-600 inset-0 rounded-full"
            ></motion.span>
          )}
        </motion.button>
      ))}
    </motion.nav>
  )
}

export default NavBar
