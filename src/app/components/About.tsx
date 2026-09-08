import React, { useRef } from 'react';
import { motion } from 'motion/react';

export const About = () => {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} id="about" className="py-32 relative bg-neutral-950 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="flex items-center gap-6 mb-24">
          <div className="flex items-baseline gap-3">
            <span className="font-serif italic text-lg text-white">02</span>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-400">Introduction</span>
          </div>
          <div className="h-px w-32 bg-gradient-to-r from-white/30 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-start">

          {/* Text Content */}
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-12 leading-[0.9]"
            >
              Building things <br />
              <span className="italic font-serif text-neutral-500">that actually work.</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12 text-lg font-light text-neutral-400 leading-relaxed">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="space-y-6"
              >
                <p>
                  I am a Computer Science student at the German International University with a genuine interest in how systems are built — not just how they look. I spend most of my time writing backend code, designing data models, and figuring out how things fit together under the hood.
                </p>
                <p>
                  Software engineering and game development are where I focus. I find the overlap between the two more interesting than most expect — both demand systems thinking, clear architecture, and the discipline to ship something that actually runs.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="space-y-6"
              >
                <p>
                  I have worked with full-stack web architectures, REST APIs, AI integrations, and Unity game development. What matters to me is understanding why something is built a certain way, not just copying patterns.
                </p>
                <p className="text-white/80">
                  Most of what I have learned came from building real projects and hitting real problems. That process continues — the portfolio you are looking at is a record of what I have built so far.
                </p>
              </motion.div>
            </div>

            {/* Identity Tags */}
            <div className="mt-16 pt-16 border-t border-white/5">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-600 block mb-6">Education</span>
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="space-y-2 border-r border-white/5">
                  <h4 className="text-2xl font-light text-white font-mono">GIU</h4>
                  <p className="text-xs uppercase tracking-widest text-neutral-500">University</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-light text-white font-mono">CS</h4>
                  <p className="text-xs uppercase tracking-widest text-neutral-500">Degree</p>
                </div>
              </div>

              {/* Interest Areas */}
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-600 block mb-6">Areas of Interest</span>
                <div className="flex flex-wrap gap-x-8 gap-y-3 text-neutral-400 font-light text-base">
                  {['Backend Engineering', 'Software Architecture', 'AI Integration', 'Game Development', 'Interactive Systems', 'Database Design'].map((area, i) => (
                    <motion.span
                      key={area}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 + (i * 0.08) }}
                      className="hover:text-white transition-colors cursor-default"
                    >
                      {area}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:mt-24"
          >
            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.5 }}
                className="aspect-[4/5] overflow-hidden bg-neutral-900 relative"
              >
                {/* Code Block Visual */}
                <div className="absolute inset-0 flex flex-col justify-center p-8 font-mono text-sm">
                  <div className="space-y-3 text-neutral-600 select-none">
                    <div><span className="text-violet-400">class</span> <span className="text-white">MohamedAhmed</span> {'{'}</div>
                    <div className="pl-6"><span className="text-indigo-400">String</span> <span className="text-neutral-300">role</span> = <span className="text-green-400">"CS Student"</span>;</div>
                    <div className="pl-6"><span className="text-indigo-400">String[]</span> <span className="text-neutral-300">focus</span> = {'{'}</div>
                    <div className="pl-10 text-neutral-500"><span className="text-green-400">"Backend"</span>,</div>
                    <div className="pl-10 text-neutral-500"><span className="text-green-400">"Games"</span>,</div>
                    <div className="pl-10 text-neutral-500"><span className="text-green-400">"AI"</span></div>
                    <div className="pl-6">{'}'}</div>
                    <div className="mt-4 pl-6"><span className="text-violet-400">void</span> <span className="text-yellow-300">build</span>() {'{'}</div>
                    <div className="pl-10 text-neutral-500">// turning ideas into</div>
                    <div className="pl-10 text-neutral-500">// working systems</div>
                    <div className="pl-6">{'}'}</div>
                    <div>{'}'}</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
              </motion.div>

              {/* Decorative Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-12 -left-12 w-48 h-48 border border-white/10 rounded-full items-center justify-center hidden md:flex"
              >
                <svg className="w-full h-full p-2" viewBox="0 0 100 100">
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                  <text className="fill-neutral-500 text-[10px] uppercase tracking-widest font-mono">
                    <textPath href="#circlePath">
                      • Software · Games · Backend · AI ·
                    </textPath>
                  </text>
                </svg>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
