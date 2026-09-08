import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { experience } from '../data/experience';

export const ExperienceDetail = () => {
  // Single role for now; the layout repeats cleanly if more are added.
  const role = experience[0];

  return (
    <div className="bg-neutral-950 min-h-screen text-white pt-32 px-6">
      <div className="container mx-auto">

        <Link
          to="/#experience"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 max-w-4xl"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-600 mb-4">Experience</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.9] mb-6">
            {role.company}
          </h1>
          <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 mb-10">
            <span className="text-sm font-mono uppercase tracking-widest text-violet-400/80">{role.role}</span>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">{role.period}</span>
            {role.location && (
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-600">{role.location}</span>
            )}
          </div>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-neutral-300">
            {role.summary}
          </p>
        </motion.div>

        {/* Deep-dive sections */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 mb-32">
          <div className="hidden md:block">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-600 sticky top-32 block">
              What I Worked On
            </span>
          </div>
          <div className="space-y-16">
            {role.sections.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.7 }}
                className="border-t border-white/10 pt-8"
              >
                <h2 className="text-2xl font-medium tracking-tight mb-4">{s.title}</h2>
                <p className="text-lg text-neutral-400 font-light leading-relaxed mb-6">{s.body}</p>
                {s.points && (
                  <ul className="space-y-2.5">
                    {s.points.map((p, j) => (
                      <li key={j} className="text-neutral-500 font-light flex items-start gap-3">
                        <span className="text-neutral-700 mt-1.5 text-xs">—</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="border-t border-white/10 pt-16 mb-32">
          <h2 className="text-2xl font-medium tracking-tight mb-3">Technologies</h2>
          <p className="text-sm font-mono uppercase tracking-widest text-neutral-600 mb-12">
            Grouped by what they were used for
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {role.technologies.map((group, i) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.6 }}
                className="space-y-4"
              >
                <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-600 pb-3 border-b border-white/5">
                  {group.label}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-white/80 font-light">{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Résumé summary */}
        <div className="border-t border-white/10 pt-16 pb-32">
          <h2 className="text-2xl font-medium tracking-tight mb-3">Summary</h2>
          <p className="text-sm font-mono uppercase tracking-widest text-neutral-600 mb-12">
            {role.role} · {role.company}
          </p>
          <ul className="space-y-4 max-w-3xl">
            {role.resumeBullets.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.5 }}
                className="text-neutral-400 font-light flex items-start gap-3"
              >
                <span className="text-neutral-700 mt-1.5 text-xs">—</span>
                <span>{b}</span>
              </motion.li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};
