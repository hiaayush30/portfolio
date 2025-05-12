"use client"
import { motion } from "framer-motion"
import React, { useState } from 'react'


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
      // staggerChildren: 0.5, // Stagger the children's animation
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 }
};

function NavBar() {
  const [hovered, setHovered] = useState<number>(0);
  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className='lg:text-lg xl:text-xl hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 flex-col rounded-xl p-2'
    >
      {links.map((item, idx) => (
        <motion.button // Wrap the button with motion.button
          onMouseEnter={() => setHovered(idx)}
          onMouseLeave={() => setHovered(0)}
          key={idx}
          variants={itemVariants} // Apply the item variants
          className="relative group py-4"
          onClick={() => {
            document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          <span
            className='relative p-2 cursor-pointer group-hover:text-white z-10 mx-auto'
          >
            {item.text}
            {hovered == idx && (
              <motion.span
                layoutId="hover"
                className="absolute bg-cyan-300/70 inset-0 rounded-full"
              ></motion.span>
            )}
          </span>
        </motion.button>
      ))}
    </motion.nav>
  )
}

export default NavBar
