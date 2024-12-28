"use client";

import { Card, CardContent } from "@/components/ui/card"
import { Code2, ExternalLink } from 'lucide-react'
import Link from "next/link"
import { motion } from "framer-motion";

export function ProjectExperience() {
  const projects = [
    {
      name: "SeaSense",
      description: "Lead the development of our capstone project. Built with React Native, Expo, Firebase, QGIS, Open-Meteo, and TensorFlow.",
      link: "https://github.com/devseasense/seasense"
    },
    {
      name: "Cross Blazers Cup",
      description: "Lead the development of the official website for the HCDC Cross Blazers Cup 2024. Built with Next.js, Tailwind CSS, shadcn/ui, and Supabase.",
      link: "https://hcdc.crossblazerscup.com/"
    },
    {
      name: "Duospense",
      description: "Built a expense tracker app with Next.js, Tailwind CSS, shadcn/ui, and Supabase.",
      link: "https://github.com/kaizenics/duospense"
    },
    {
        name: "Confessly",
        description: "Built a confession wall for valentines with Next.js, Tailwind CSS, and Supabase.",
        link: "https://confessly.vercel.app/"
      },
  ]

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

