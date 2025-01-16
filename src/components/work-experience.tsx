"use client";

import { profileData } from "@/data/profile";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2 } from "lucide-react";
import { motion } from "framer-motion";

export function WorkExperience() {
  const experiences = profileData.workExperience;

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="my-12"
    >
      <h2 className="font-heading text-md sm:text-lg font-semibold mb-6">
        Work Experience
      </h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="w-5 h-5 text-gray-400" />
                  <p className="font-heading text-sm sm:text-md md:text-lg font-semibold">
                    {exp.company}
                  </p>
                  {exp.period && <Badge variant="secondary">{exp.period}</Badge>}
                </div>

                <div className="space-y-1">
                  <span className="font-sans text-xs sm:text-sm text-gray-400">
                    {exp.position}
                  </span>
                  {exp.location && (
                    <p className="font-sans text-xs text-gray-500">
                      {exp.location}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
