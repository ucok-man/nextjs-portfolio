"use client";

import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";

import { HTMLMotionProps, motion } from "motion/react";

const iconVar = (duration: number): HTMLMotionProps<"div"> => ({
  initial: "initial",
  animate: "animate",
  variants: {
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  },
});

export default function Technology() {
  return (
    <div className="pb-4 lg:mb-36">
      <motion.h2
        className="my-20 text-center text-4xl text-stone-300"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        Technologies i used
      </motion.h2>
      <motion.div
        className="flex flex-wrap items-center justify-center gap-4"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div className="p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div className="p-4">
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div className="p-4">
          <TbBrandTypescript className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div className="p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div className="p-4">
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>
        <motion.div className="p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
      </motion.div>
    </div>
  );
}
