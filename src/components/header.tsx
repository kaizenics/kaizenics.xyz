import Link from "next/link"
import { LinkedinIcon, Github, Mail, ArrowUpRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="mb-8 mt-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-heading text-xl sm:text-2xl font-semibold">Nicose John Soriano</h1>
        <div className="flex items-center gap-3">
          <Link 
            href="https://www.linkedin.com/in/kaizenics/" 
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <LinkedinIcon className="w-5 h-5" />
            <span className="sr-only">LinkedIn Profile</span>
          </Link>
          <Link 
            href="https://github.com/kaizenics" 
            target="_blank"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub Profile</span>
          </Link>
          <Link 
            href="mailto:nicosejohnsoriano@gmail.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
      
      <p className="font-sans mb-6 text-sm sm:text-md leading-relaxed">
        Hello, I&apos;m a web developer based in Philippines. I specialize in building 
        responsive and user-friendly web applications with modern technologies. Currently
        creating impactful digital experiences on{" "}
        <Link href="https://github.com/kaizenics" className="text-white hover:text-gray-300 underline underline-offset-4">
          GitHub
        </Link>
        .
      </p>

      <div className="flex gap-1 mb-6">
        <Button asChild variant="ghost" className="font-sans gap-2 group">
          <Link href="/resume">
            View Resume
            <ArrowUpRight className="w-4 h-4 text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Button>
        <Button asChild variant="ghost" className="gap-2 group">
          <Link href="https://archive.kaizenics.xyz" target="_blank">
            Archived
            <ArrowUpRight className="w-4 h-4 text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Button>
      </div>
    </header>
  )
}

