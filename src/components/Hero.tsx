"use client"
import { MapPin } from 'lucide-react'
import React, { useEffect } from 'react'
import { motion, useAnimation } from "motion/react";

function Hero() {

    const controls = useAnimation();

    useEffect(() => {
        const sequence = async () => {
            await controls.start({
                rotate: [0, 35, -15, 25, -10, 0],
                transition: { duration: 1.2, ease: 'easeInOut' }
            });

            await controls.start({
                scale: 1,
                transition: { duration: 0.5, ease: 'easeOut' }
            });
        };

        sequence();
    }, []);
    return (
        <section className="relative text-center lg:px-24 px-12 min-h-screen flex flex-col justify-center items-center">
            <div className='flex flex-col justify-center items-center'>
                <div className='overflow-y-hidden mb-8 py-2'>
                    <motion.h1
                        initial={{
                            y: 150
                        }}
                        animate={{
                            y: 0
                        }}
                        transition={{
                            duration: 1,
                            ease: 'easeInOut',
                            delay: 1
                        }}
                        id='hero' className="text-4xl md:text-6xl font-bold">
                        Hey, I&apos;m Aayush
                    </motion.h1>
                </div>
                <motion.span
                    initial={{ rotate: 0, scale: 3 }}
                    animate={controls}
                    className="text-4xl pb-5 inline-block"
                >
                    👋
                </motion.span>

            </div>
            <motion.p
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 100
                }}
                transition={{
                    delay: 2.2,
                    duration: 0.5
                }}
                className="text-xl md:text-2xl text-slate-400">
                MERN Stack & Next.js Developer
            </motion.p>
            <motion.p
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 100
                }}
                transition={{
                    delay: 2.7,
                    duration: 0.5
                }}
                className="text-xl md:text-xl text-slate-200 py-5 flex items-center gap-3 justify-center">
                <MapPin />
                <span>Pune, India</span>
            </motion.p>
        </section>
    )
}

export default Hero
