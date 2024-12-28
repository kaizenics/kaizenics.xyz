import { Header } from "@/components/header"
import { Skills } from "@/components/skills"
import { WorkExperience } from "@/components/work-experience"
import { Volunteering } from "@/components/volunteering"
import { ProjectExperience } from "@/components/project-experience"

export default function Page() {
  return (
    <div className="min-h-screen p-4 sm:p-8 max-w-2xl mx-auto">
      <Header />
      <Skills />
      <WorkExperience />
      <ProjectExperience />
      <Volunteering />
    </div>
  )
}

