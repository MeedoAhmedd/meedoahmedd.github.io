import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { experience } from '../data/experience';

export const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 bg-neutral-950 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto">

        <div className="flex items-center gap-6 mb-24">
          <div className="flex items-baseline gap-3">
            <span className="font-serif italic text-lg text-white">05</span>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-400">Experience</span>
          </div>
          <div className="h-px w-32 bg-gradient-to-r from-white/30 to-transparent" />
        </div>

        <div className="grid md:grid-cols-[0.5fr_1.5fr] gap-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.9]"
          >
            Where I've <br />
            <span className="italic font-serif text-neutral-500">Worked</span>
          </motion.h2>

          <div className="space-y-16">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative pl-8 border-l border-white/10"
              >
                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-white/20 border border-white/40" />

                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
                  <h3 className="text-2xl font-medium tracking-tight">{item.company}</h3>
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">{item.period}</span>
                </div>
                <p className="text-sm font-mono uppercase tracking-widest text-violet-400/80 mb-8">{item.role}</p>

                <ul className="space-y-3 mb-8">
                  {item.highlights.map((r, i) => (
                    <li key={i} className="text-neutral-400 font-light flex items-start gap-3">
                      <span className="text-neutral-700 mt-1">—</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-10">
                  {item.stack.map((tech) => (
                    <span key={tech} className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 px-3 py-1 border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  to="/experience"
                  className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest border-b border-white/30 pb-2 hover:text-neutral-300 hover:border-white/60 transition-colors"
                >
                  More Information
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
