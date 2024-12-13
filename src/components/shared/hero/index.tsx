"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pb-4 lg:mb-36 relative bottom-2">
      <div className="flex flex-wrap lg:flex-row-reverse justify-center lg:justify-between">
        {/* Picture */}
        <div className="">
          <motion.div
            className="flex justify-center lg:p-8"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/profile.png"
              alt="Profile Pic"
              width={500}
              height={500}
              className="border object-contain w-full h-full max-h-[300px] lg:max-h-[500px] border-none rounded-3xl mb-[0.6rem]"
            />
          </motion.div>
        </div>

        {/* Hero Text */}
        <div className="w-full lg:w-1/2 ">
          <motion.div
            className=" flex flex-col items-center lg:items-start"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.3,
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.p
              className="relative left-1 text-muted font-mono mb-4 max-md:mb-2 max-md:tracking-tighter text-right"
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.2,
                  },
                },
              }}
            >
              Hi, my name is
            </motion.p>
            <motion.h2
              className="text-moody-700 text-center lg:text-left text-6xl lg:text-8xl tracking-tighter mb-4 font-semibold"
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.2,
                  },
                },
              }}
            >
              Alvin Odhi Nusantara.
            </motion.h2>
            <motion.p
              className="bg-gradient-to-r from-stone-300 font-extralight font-mono to-stone-600 bg-clip-text text-2xl lg:text-4xl text-transparent mb-4"
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.2,
                  },
                },
              }}
            >
              I build the Web
            </motion.p>
            <motion.p
              className="mb-12 text-center text-stone-300/80 lg:text-left tracking-wider leading-loose"
              variants={{
                hidden: { opacity: 0, x: -100 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.2,
                  },
                },
              }}
            >
              I&apos;m a software developer focused on building innovative web
              solutions and modern applications. Currently, I&apos;m enhancing
              my skills by joining a bootcamp at Purwadhika.
            </motion.p>
            <Button
              asChild
              variant="secondary"
              className="p-5 text-sm font-bold bg-stone-300 text-stone-800 mb-10 hover:bg-stone-300/90"
            >
              <motion.a
                href="/resume.example.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.2,
                    },
                  },
                }}
              >
                Donwload Resume
              </motion.a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
