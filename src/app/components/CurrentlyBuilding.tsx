import React from 'react';
import { motion } from 'motion/react';

export const CurrentlyBuilding = () => {
  return (
    <section className="py-32 px-6 bg-neutral-950 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(109,40,217,0.06),transparent_60%)] pointer-events-none" />

      <div className="container mx-auto relative z-10">

        <div className="flex items-center gap-6 mb-24">
          <div className="flex items-baseline gap-3">
            <span className="font-serif italic text-lg text-white">04</span>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-400">Currently Building</span>
          </div>
          <div className="h-px w-32 bg-gradient-to-r from-white/30 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="group relative border border-white/10 p-12 md:p-16 hover:border-violet-500/30 transition-colors duration-500"
        >
          {/* Corner Accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-violet-500/60" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-violet-500/60" />

          <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-violet-400">In Progress</span>
              </div>

              <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter mb-4">
                Workflow Engine
              </h3>
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-8">
                Java · Spring Boot · JPA · Hibernate · H2
              </p>
              <p className="text-lg font-light text-neutral-400 leading-relaxed max-w-2xl">
                A backend workflow engine being built from scratch using Java and Spring Boot. The project explores state machines, workflow instances, entity relationships, and REST-driven execution — understanding how workflow engines work by building one.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 opacity-40 group-hover:opacity-70 transition-opacity">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 border border-violet-500/30 rounded-full flex items-center justify-center"
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 border border-violet-500/20 rounded-full flex items-center justify-center"
                >
                  <div className="w-2 h-2 bg-violet-500 rounded-full" />
                </motion.div>
              </motion.div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-600">Active</span>
            </div>
          </div>
        </motion.div>

        <p className="text-xs font-mono uppercase tracking-widest text-neutral-700 mt-8 text-center">
          More projects will appear here as they are started
        </p>
      </div>
    </section>
  );
};
