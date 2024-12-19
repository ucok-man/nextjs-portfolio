"use client";

import { Iterate } from "@/components/utility";
import { motion } from "framer-motion";
import {
  Database,
  FileJson,
  NetworkIcon as Nodejs,
  CodepenIcon as React,
  Server,
  TypeIcon as Typescript,
} from "lucide-react";
import { useState } from "react";

const technologies = [
  { name: "React", icon: React, color: "text-cyan-400" },
  { name: "Next.js", icon: Server, color: "text-white" },
  { name: "TypeScript", icon: Typescript, color: "text-blue-400" },
  { name: "Node.js", icon: Nodejs, color: "text-green-500" },
  { name: "PostgreSQL", icon: Database, color: "text-sky-700" },
  { name: "MongoDB", icon: FileJson, color: "text-green-500" },
];

export default function TechnologyShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="pb-4 lg:mb-36">
      <motion.h2
        className="my-20 text-center text-4xl text-gray-300"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        Technologies I Specialize In
      </motion.h2>
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <Iterate
            items={technologies}
            render={(tech, index) => (
              <motion.div
                key={tech.name}
                className="relative group"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <div className="flex flex-col items-center p-6 bg-gray-900 rounded-lg transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg">
                  <tech.icon
                    className={`w-16 h-16 ${tech.color} mb-4 transition-all duration-300`}
                  />
                  <span className="text-gray-300 font-medium">{tech.name}</span>
                </div>
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-moody-900 to-moody-800 opacity-25 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.25 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            )}
          />
        </motion.div>
      </div>
    </section>
  );
}
