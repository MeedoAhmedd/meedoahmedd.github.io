import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const FILTERS = ['ALL', 'WEB & SOFTWARE', 'GAMES & INTERACTIVE', 'EXPERIMENTAL'] as const;
type Filter = typeof FILTERS[number];

export const Work = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>('ALL');

  const filtered = activeFilter === 'ALL'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="bg-neutral-950 min-h-screen text-white pt-32 px-6">
      <div className="container mx-auto">

        {/* Header */}
        <div className="flex flex-col gap-8 mb-24">
          <Link to="/" className="text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-white transition-colors block">
            ← Back to Home
          </Link>
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-8">
            <h1 className="text-[2.75rem] sm:text-6xl md:text-9xl font-medium tracking-tighter leading-[0.9]">
              Selected <br />
              <span className="italic font-serif text-neutral-500">Work</span>
            </h1>
            <p className="text-neutral-500 font-light max-w-xs text-right font-mono text-sm">
              Projects, prototypes, and experiments built by Mohamed Ahmed.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-16 border-b border-white/5 pb-8">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`text-xs font-mono uppercase tracking-widest px-4 py-2 border transition-all duration-200 ${
                activeFilter === f
                  ? 'border-white/40 bg-white/10 text-white'
                  : 'border-white/10 text-neutral-500 hover:border-white/20 hover:text-neutral-300'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 gap-y-16 pb-32"
          >
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="group cursor-pointer"
              >
                <Link to={`/work/${project.slug}`}>
                  <div className="relative overflow-hidden aspect-[4/3] mb-6 bg-neutral-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="object-cover w-full h-full opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`text-[10px] font-mono uppercase tracking-widest px-3 py-1 ${
                        project.status === 'IN PROGRESS'
                          ? 'bg-violet-500/20 border border-violet-500/40 text-violet-300'
                          : project.status === 'PROTOTYPE'
                          ? 'bg-amber-500/20 border border-amber-500/40 text-amber-300'
                          : 'bg-white/10 border border-white/20 text-neutral-300'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex justify-between items-baseline border-t border-white/10 pt-4">
                    <div>
                      <h3 className="text-xl font-medium tracking-tight mb-1">{project.title}</h3>
                      <p className="text-xs font-mono uppercase tracking-widest text-neutral-500">{project.category}</p>
                    </div>
                    <span className="text-xs font-mono text-neutral-600">{project.year}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="py-32 text-center text-neutral-600 font-mono text-sm uppercase tracking-widest">
            No projects in this category yet
          </div>
        )}
      </div>
    </div>
  );
};
