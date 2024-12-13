"use client";

import { Iterate } from "@/components/utility";
import { EXPERIENCES } from "@/constant";
import { motion } from "motion/react";
import Tag from "../tag";

export default function Experiences() {
  return (
    <section>
      <div className="pb-4 lg:mb-36">
        <motion.h2
          className="my-20 text-center text-4xl"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
        >
          My Experiences
        </motion.h2>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
        >
          <Iterate
            items={EXPERIENCES}
            render={(item, idx) => (
              <motion.div
                key={idx}
                className="mb-8 flex flex-wrap lg:justify-center"
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-full lg:w-1/4 flex items-center">
                  <p className="mb-2 text-sm font-mono text-stone-400">
                    {item.year}
                  </p>
                </div>
                <div className="w-full max-w-xl lg:w-3/4">
                  <h3 className="mb-2 font-semibold text-lg">
                    {item.role} -{" "}
                    <span className="font-mono text-sm text-stone-500">
                      {item.company}
                    </span>
                  </h3>
                  <p className="mb-4 text-stone-400 leading-loose ">
                    {item.description}
                  </p>
                  <div className="flex items-center flex-wrap">
                    <Iterate
                      items={item.technologies}
                      render={(tech, idx) => <Tag key={idx}>{tech}</Tag>}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          />
        </motion.div>
      </div>
    </section>
  );
}
