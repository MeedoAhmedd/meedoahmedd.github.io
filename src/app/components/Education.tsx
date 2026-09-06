import React from 'react';
import { motion } from 'motion/react';

export const Education = () => {
  return (
    <section className="py-32 px-6 bg-neutral-950 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_40%_40%_at_20%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto relative z-10">

        <div className="flex items-center gap-6 mb-24">
          <div className="flex items-baseline gap-3">
            <span className="font-serif italic text-lg text-white">06</span>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-400">Education</span>
          </div>
          <div className="h-px w-32 bg-gradient-to-r from-white/30 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-600 block mb-4">Institution</span>
            <h3 className="text-4xl md:text-5xl font-medium tracking-tighter mb-2">
              German International <br />University
            </h3>
            <p className="text-sm font-mono uppercase tracking-widest text-violet-400/80 mb-6">B.Sc. Computer Science</p>
            <p className="text-neutral-500 font-light font-mono text-sm">[ Add graduation year / current year ]</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-600 block mb-6">Relevant Areas</span>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Programming",
                  "Object-Oriented Design",
                  "Data Structures",
                  "Computer Networks",
                  "Computer Organization",
                  "Software Development"
                ].map((area) => (
                  <div key={area} className="flex items-center gap-3 text-neutral-400 font-light">
                    <span className="text-neutral-700">—</span>
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
