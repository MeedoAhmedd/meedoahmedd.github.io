import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';

const categories = [
  {
    number: "01",
    title: "Web & Software",
    description: "Full-stack applications, backend systems, REST APIs, AI integrations, databases, and software architecture.",
    tags: ["MERN Stack", "Spring Boot", "REST API", "AI Integration"],
    filter: "WEB & SOFTWARE"
  },
  {
    number: "02",
    title: "Games & Interactive",
    description: "Unity and C# games, interactive experiences, prototypes, gameplay systems, and experimental game development.",
    tags: ["Unity", "C#", "3D", "First-Person"],
    filter: "GAMES & INTERACTIVE"
  },
  {
    number: "03",
    title: "Experimental",
    description: "Technical experiments, prototypes, creative coding, AI experiments, and projects that resist easy categorisation.",
    tags: ["Prototypes", "AI", "Creative Coding", "Concepts"],
    filter: "EXPERIMENTAL"
  }
];

export const Services = () => {
  const containerRef = useRef(null);
  useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} id="services" className="py-32 px-6 bg-neutral-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(109,40,217,0.04),transparent_50%)] pointer-events-none" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none opacity-50"
        style={{ borderStyle: 'dashed' }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] right-[10%] w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none opacity-30"
      />

      <div className="container mx-auto relative z-10">

        {/* Section Header */}
        <div className="mb-32 grid md:grid-cols-2 gap-16 items-end">
          <div>
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-baseline gap-3">
                <span className="font-serif italic text-lg text-white">03</span>
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-400">/ Focus Areas</span>
              </div>
              <div className="h-px w-32 bg-gradient-to-r from-white/30 to-transparent" />
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-medium tracking-tighter leading-none"
            >
              What I <br />
              <span className="italic font-serif text-neutral-500">Build</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="md:pl-12 border-l border-white/10 relative"
          >
            <div className="absolute top-0 left-[-1px] h-12 w-[1px] bg-gradient-to-b from-white to-transparent" />
            <p className="text-xl md:text-2xl font-light text-neutral-300 leading-relaxed">
              Three areas. Each one a different kind of problem to solve.
            </p>
          </motion.div>
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 group/list">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className={`
                relative
                ${index === 1 ? 'lg:mt-16' : ''}
                transition-all duration-500 ease-out
                hover:!opacity-100 group-hover/list:opacity-30
              `}
            >
              <div className="absolute -top-6 -left-6 w-3 h-3 border-t border-l border-white/20 transition-all duration-500 pointer-events-none" />
              <div className="absolute -bottom-6 -right-6 w-3 h-3 border-b border-r border-white/20 transition-all duration-500 pointer-events-none" />

              <Link to={`/work`} className="group block p-8 rounded-sm bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-all duration-500">
                <div className="mb-6">
                  <span className="font-serif italic text-5xl text-neutral-800 group-hover:text-neutral-600 transition-colors">{cat.number}</span>
                </div>

                <h3 className="text-2xl font-medium mb-4 tracking-tight">{cat.title}</h3>
                <p className="text-neutral-400 font-light leading-relaxed group-hover:text-neutral-300 transition-colors mb-8">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cat.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono uppercase tracking-widest text-neutral-600 px-2 py-1 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
