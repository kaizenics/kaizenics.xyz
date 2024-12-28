"use client";

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion";

export function Skills() {
  const skills = [
    "Next.js",
    "React",
    "Vue",
    "JS/TS",
    "Node.js",
    "PHP/Laravel",
    "Python",
    "Tailwind CSS",
    "PostgreSQL",
    "Firebase",
    "Supabase",
    "Drizzle",
    "Directus",
    "Git",
  ]

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="my-8"
    >
      <h2 className="font-heading text-md sm:text-lg font-semibold mb-4">Tech stacks I&apos;ve touched so far</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            <Badge
              variant="secondary"
              className="bg-zinc-800 hover:bg-zinc-700 text-gray-200 font-sans"
            >
              {skill}
            </Badge>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

