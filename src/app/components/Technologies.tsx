import React from 'react';
import { motion } from 'motion/react';

const techGroups = [
  {
    label: "Languages",
    items: [
      { name: "Java", projects: ["Workflow Engine", "University Projects"] },
      { name: "C++", projects: ["University Projects"] },
      { name: "JavaScript", projects: ["GIU Nexus"] },
      { name: "C#", projects: ["Haunted Forest", "5M Haystack"] },
      { name: "Lua", projects: [] }
    ]
  },
  {
    label: "Backend",
    items: [
      { name: "Spring Boot", projects: ["Workflow Engine"] },
      { name: "Node.js", projects: ["GIU Nexus"] },
      { name: "Express", projects: ["GIU Nexus"] },
      { name: "REST APIs", projects: ["GIU Nexus", "Workflow Engine"] }
    ]
  },
  {
    label: "Databases",
    items: [
      { name: "MongoDB", projects: ["GIU Nexus"] },
      { name: "Mongoose", projects: ["GIU Nexus"] },
      { name: "H2", projects: ["Workflow Engine"] },
      { name: "JPA / Hibernate", projects: ["Workflow Engine"] }
    ]
  },
  {
    label: "Frontend",
    items: [
      { name: "React", projects: ["GIU Nexus"] },
      { name: "HTML & CSS", projects: ["GIU Nexus"] }
    ]
  },
  {
    label: "Game Dev",
    items: [
      { name: "Unity", projects: ["Haunted Forest", "5M Haystack"] },
      { name: "C# Gameplay", projects: ["Haunted Forest", "5M Haystack"] }
    ]
  },
  {
    label: "Tools",
    items: [
      { name: "Git / GitHub", projects: ["All Projects"] },
      { name: "IntelliJ IDEA", projects: ["Java Projects"] },
      { name: "CLion", projects: ["C++ Projects"] }
    ]
  }
];

export const Technologies = () => {
  return (
    <section className="py-32 px-6 bg-neutral-950 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto">

        <div className="flex items-center gap-6 mb-24">
          <div className="flex items-baseline gap-3">
            <span className="font-serif italic text-lg text-white">07</span>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-400">Technologies</span>
          </div>
          <div className="h-px w-32 bg-gradient-to-r from-white/30 to-transparent" />
        </div>

        <div className="grid md:grid-cols-[0.6fr_1.4fr] gap-16 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tighter leading-[0.9]"
          >
            Stack & <br />
            <span className="italic font-serif text-neutral-500">Tools</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg font-light text-neutral-400 leading-relaxed self-end"
          >
            Technologies grouped by what they were actually used for, not by abstract proficiency ratings.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {techGroups.map((group, gIndex) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gIndex * 0.1, duration: 0.7 }}
              className="space-y-4"
            >
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-600 pb-3 border-b border-white/5">
                {group.label}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.name} className="group">
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-white font-light">{item.name}</span>
                    </div>
                    {item.projects.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-1">
                        {item.projects.map((proj) => (
                          <span key={proj} className="text-[10px] font-mono text-neutral-600 tracking-wide">
                            → {proj}
                          </span>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
