"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Heart, Calendar } from "lucide-react";

export function Volunteering() {
  const volunteerExperiences = [
    {
      position: "Creatives Head",
      organization: "HCDC Information Technology Society",
      period: "2024 - 2025",
    },
    {
      position: "Creatives Manager",
      organization: "HCDC College of Engineering and Technology",
      period: "2024 - 2025",
    },
    {
      position: "Full-stack Developer",
      organization: "HCDC SSG Executive Department",
      period: "2024",
    },
    {
      position: "Design Committee",
      organization: "Google Developer Group Davao",
      period: "2024",
    },
    {
      position: "Open Source Contributor",
      organization: "awesome-shadcn/ui",
      period: "2024",
    },
  ];

  return (
    <section className="my-12">
      <h2 className="font-heading text-md sm:text-lg font-semibold mb-6">Volunteering</h2>
      <div className="space-y-4">
        {volunteerExperiences.map((exp, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-gray-400" />
                <p className="font-heading text-sm sm:text-md md:text-lg font-semibold">{exp.organization}</p>
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
  );
}
