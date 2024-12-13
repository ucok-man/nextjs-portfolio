"use client";

import { Iterate } from "@/components/utility";
import { TESTIMONIALS } from "@/constant";
import { motion } from "motion/react";
import Image from "next/image";
import { RiStarFill } from "react-icons/ri";

export default function Testimonial() {
  return (
    <section className="pb-4 lg:mb-36">
      <motion.h2
        className="my-20 text-center text-4xl"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        What other says
      </motion.h2>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Iterate
          items={TESTIMONIALS}
          render={(item, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col max-w-sm shadow-inner shadow-stone-300/30 p-4 rounded-lg"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5 + idx }}
            >
              <p className="leading-loose text-balance mb-4 min-h-40 max-h-40 line-clamp-5 min-w-72 max-w-72 text-stone-400">
                {item.testimonial}
              </p>
              <div className="flex gap-2">
                <Image
                  src={item.profilePic}
                  alt={item.name}
                  width={250}
                  height={250}
                  className="object-cover rounded-full w-16 h-16 "
                />
                <div className="flex flex-col h-full justify-center text-xs font-bold tracking-tight">
                  <div className="flex justify-start gap-x-1 mb-1">
                    <Iterate
                      items={[1, 2, 3, 4, 5]}
                      render={(item, idx) => (
                        <span key={idx}>
                          <RiStarFill className="text-yellow-500 text-lg" />
                        </span>
                      )}
                    />
                  </div>
                  <span className="text-lg">{item.name}</span>
                  <span className="text-stone-300/80 tracking-tight">
                    {item.title}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        />
      </div>
    </section>
  );
}
