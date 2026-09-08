import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { site, link } from '../data/site';

export const Footer = () => {
  const github = link(site.github);
  const linkedin = link(site.linkedin);
  const cv = link(site.cv);

  return (
    <footer id="contact" className="relative bg-neutral-950 py-32 px-6 overflow-hidden border-t border-white/5">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60vw] h-[30vh] bg-violet-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 mb-24 md:mb-32">

          <div>
            <div className="flex items-center gap-6 mb-16">
              <div className="flex items-baseline gap-3">
                <span className="font-serif italic text-lg text-white">08</span>
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-400">Contact</span>
              </div>
              <div className="h-px w-32 bg-gradient-to-r from-white/30 to-transparent" />
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-medium tracking-tighter leading-[0.9] mb-16"
            >
              {"Let's"} <br />
              <span className="italic font-serif text-neutral-500">Build Something.</span>
            </motion.h2>

            <div className="flex flex-col gap-6">
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-4 text-lg font-mono text-neutral-500 hover:text-white transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-green-500" />
                {site.email}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-end gap-12">
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-6">Connect</h4>
                <ul className="space-y-4">
                  <li>
                    {github ? (
                      <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg font-light text-neutral-400 hover:text-white transition-colors group">
                        GitHub
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      </a>
                    ) : (
                      <span className="text-lg font-light text-neutral-600" title="Link coming soon">GitHub <span className="text-xs font-mono">(soon)</span></span>
                    )}
                  </li>
                  <li>
                    {linkedin ? (
                      <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-lg font-light text-neutral-400 hover:text-white transition-colors group">
                        LinkedIn
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      </a>
                    ) : (
                      <span className="text-lg font-light text-neutral-600" title="Link coming soon">LinkedIn <span className="text-xs font-mono">(soon)</span></span>
                    )}
                  </li>
                  <li>
                    <a href={`mailto:${site.email}`} className="flex items-center gap-2 text-lg font-light text-neutral-400 hover:text-white transition-colors group">
                      Email
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-6">Navigate</h4>
                <ul className="space-y-4">
                  {[
                    { name: 'Home', to: '/' },
                    { name: 'Work', to: '/work' },
                    { name: 'About', to: '/#about' },
                    { name: 'Experience', to: '/#experience' }
                  ].map((navLink) => (
                    <li key={navLink.name}>
                      <Link to={navLink.to} className="text-lg font-light text-neutral-400 hover:text-white transition-colors">
                        {navLink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CV Block */}
            <div className="p-6 border border-white/10 hover:border-white/20 transition-colors">
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-600 mb-4">Resume / CV</p>
              {cv ? (
                <div className="flex gap-4">
                  <a
                    href={cv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-mono uppercase tracking-widest text-white hover:text-neutral-300 transition-colors flex items-center gap-2"
                  >
                    View CV <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <span className="text-neutral-700">·</span>
                  <a
                    href={cv}
                    download
                    className="text-sm font-mono uppercase tracking-widest text-neutral-500 hover:text-white transition-colors flex items-center gap-2"
                  >
                    Download <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              ) : (
                <p className="text-sm font-mono text-neutral-600">CV coming soon — available on request via email.</p>
              )}
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-600">
            © {new Date().getFullYear()} Mohamed Ahmed.
          </p>
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-700">
            CS Student · Software Developer · Game Developer
          </p>
        </div>
      </div>
    </footer>
  );
};
