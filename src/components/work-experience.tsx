import { Card, CardContent } from "@/components/ui/card"
import { Building2, Calendar } from 'lucide-react'

export function WorkExperience() {
  const experiences = [
    {
      position: "Front-end Developer",
      company: "Hunnid Agency",
      period: "2024 - Present",
    },
    {
      position: "Owner",
      company: "NXZ Visuals",
      period: "2023 - Present",
    }
  ]

  return (
    <section className="my-12">
      <h2 className="font-heading text-md sm:text-lg font-semibold mb-6">Work Experience</h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-gray-400" />
                <p className="font-heading text-sm sm:text-lg font-semibold">{exp.company}</p>
              </div>
              <div className="font-sans flex items-center gap-2 text-xs sm:text-sm text-gray-400 mb-3">
                <span>{exp.position}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

