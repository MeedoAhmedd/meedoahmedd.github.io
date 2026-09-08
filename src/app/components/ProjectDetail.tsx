import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import { projects } from '../data/projects';

export const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  const currentIndex = projects.findIndex(p => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  if (!project) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl mb-4 font-light">Project not found</h1>
          <Link to="/work" className="text-neutral-500 hover:text-white font-mono text-sm uppercase tracking-widest underline">
            Back to Work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-950 min-h-screen text-white pt-32 px-6">
      <div className="container mx-auto">

        {/* Back */}
        <Link to="/work" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> All Work
        </Link>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 md:gap-8 mb-10">
            <div className="min-w-0">
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-600 mb-4">{project.category}</p>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-medium tracking-tighter leading-[0.9] break-words">
                {project.title}
              </h1>
              <p className="text-neutral-500 font-light mt-3 text-lg italic font-serif">{(project as any).subtitle}</p>
            </div>
            <span className={`shrink-0 self-start md:self-auto font-mono text-xs px-4 py-2 border mb-2 ${
              project.status === 'IN PROGRESS'
                ? 'border-violet-500/40 text-violet-300'
                : project.status === 'PROTOTYPE'
                ? 'border-amber-500/40 text-amber-300'
                : 'border-white/20 text-neutral-400'
            } uppercase tracking-widest`}>
              {project.status}
            </span>
          </div>

          <div className="aspect-[16/9] w-full bg-neutral-900 overflow-hidden">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 lg:gap-24 mb-32">

          {/* Sidebar */}
          <div className="space-y-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-600 block mb-3">Category</span>
              <p className="text-white font-light">{project.category}</p>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-600 block mb-3">Year</span>
              <p className="text-white font-light">{project.year}</p>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-600 block mb-3">Status</span>
              <p className="text-white font-light">{project.status}</p>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-600 block mb-4">Technologies</span>
              <div className="flex flex-wrap gap-2">
                {(project as any).technologies?.map((tech: string) => (
                  <span key={tech} className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 px-2 py-1 border border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="space-y-3 pt-4 border-t border-white/5">
              {(project as any).github && (project as any).github !== null && (
                <a
                  href={(project as any).github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-mono text-neutral-400 hover:text-white transition-colors group"
                >
                  <Github className="w-4 h-4" />
                  GitHub Repository
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              )}
              {(project as any).demo && (
                <a
                  href={(project as any).demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-mono text-neutral-400 hover:text-white transition-colors group"
                >
                  <ArrowUpRight className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div>
            <h2 className="text-2xl font-medium tracking-tight mb-6">Project Overview</h2>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-neutral-300 mb-12">
              {project.description}
            </p>

            <div className="pt-12 border-t border-white/10 mb-12">
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-600 mb-6">What I Built</h3>
              <p className="text-lg text-neutral-400 font-light leading-relaxed">
                {(project as any).contribution}
              </p>
            </div>

            {(project as any).details && (
              <div className="pt-12 border-t border-white/10">
                <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-600 mb-6">Technical Details</h3>
                <p className="text-lg text-neutral-500 leading-relaxed">
                  {(project as any).details}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* More Information — project screenshots */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="border-t border-white/10 pt-16 mb-32">
            <h2 className="text-2xl font-medium tracking-tight mb-3">More Information</h2>
            <p className="text-sm font-mono uppercase tracking-widest text-neutral-600 mb-12">
              Screenshots from {project.title}
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {project.gallery.map((shot, i) => (
                <motion.figure
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.7 }}
                  className="group"
                >
                  <div className="aspect-[16/10] bg-neutral-900 overflow-hidden border border-white/5">
                    <img
                      src={shot.src}
                      alt={shot.caption || `${project.title} screenshot ${i + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
                    />
                  </div>
                  {shot.caption && (
                    <figcaption className="mt-3 text-xs font-mono uppercase tracking-widest text-neutral-600">
                      {shot.caption}
                    </figcaption>
                  )}
                </motion.figure>
              ))}
            </div>
          </div>
        )}

        {/* Next Project */}
        {nextProject && (
          <div className="border-t border-white/10 py-24">
            <Link to={`/work/${nextProject.slug}`} className="group block">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-600 block mb-4">Next Project</span>
              <div className="flex items-baseline justify-between">
                <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter group-hover:text-neutral-400 transition-colors">
                  {nextProject.title}
                </span>
                <ArrowUpRight className="w-10 h-10 text-neutral-600 group-hover:text-white transition-colors" />
              </div>
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-600 mt-3">{nextProject.category}</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
