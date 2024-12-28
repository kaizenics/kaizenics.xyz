"use client";

import { motion } from "framer-motion"
import Link from "next/link"
import { LinkedinIcon, Github, Mail, ArrowUpRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 mt-8"
    >
      <div className="flex items-center justify-between mb-6">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-heading text-lg sm:text-xl md:text-2xl font-semibold"
        >
          Nicose John Soriano
        </motion.h1>
        <div className="flex items-center gap-3">
          {[
            { href: "https://www.linkedin.com/in/kaizenics/", icon: <LinkedinIcon className="w-5 h-5" />, label: "LinkedIn Profile" },
            { href: "https://github.com/kaizenics", icon: <Github className="w-5 h-5" />, label: "GitHub Profile" },
            { href: "mailto:nicosejohnsoriano@gmail.com", icon: <Mail className="w-5 h-5" />, label: "Email" }
          ].map((social, index) => (
            <motion.div
              key={social.href}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                href={social.href} 
                target={social.href.startsWith('http') ? "_blank" : undefined}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {social.icon}
                <span className="sr-only">{social.label}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-300 font-sans mb-6 text-sm sm:text-md"
      >
        Hello, I&apos;m a web developer based in Philippines. I specialize in building 
        responsive and user-friendly web applications with modern technologies.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex text-xs gap-1 mb-6"
      >
        <Button asChild variant="outline" className="font-sans gap-1 group">
          <Link href="/cv.pdf" target="_blank">
            View Resume
            <ArrowUpRight className="w-4 h-4 text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Button>
        <Button asChild variant="outline" className="font-sans gap-2 group">
          <Link href="https://archive.kaizenics.xyz" target="_blank">
            Archived
            <ArrowUpRight className="w-4 h-4 text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Button>
      </motion.div>
    </motion.header>
  )
}

