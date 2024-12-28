import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "GraphQL",
    "Tailwind CSS",
    "PostgreSQL",
    "Supabase",
    "Drizzle",
    "Directus",
    "Git",
  ]

  return (
    <section className="my-8">
      <h2 className="font-heading text-md sm:text-lg font-semibold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="secondary"
            className="bg-zinc-800 hover:bg-zinc-700 text-gray-200 font-sans"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  )
}

