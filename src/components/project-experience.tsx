"use client";

import { profileData } from "@/data/profile";
import { Card, CardContent } from "@/components/ui/card"
import { Code2, ExternalLink } from 'lucide-react'
import Link from "next/link"
import { motion } from "framer-motion";

export function ProjectExperience() {
  const projects = profileData.projects;

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="my-12"
    >
      <p className="font-heading text-md sm:text-lg font-semibold mb-6">Project Experience</p>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-gray-400" />
                    <p className="text-sm sm:text-md md:text-lg font-heading font-semibold">{project.name}</p>
                  </div>
                  <Link href={project.link} target="_blank" className="text-gray-400 hover:text-white">
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
                <p className="font-sans text-gray-300 text-xs sm:text-sm leading-relaxed">{project.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

