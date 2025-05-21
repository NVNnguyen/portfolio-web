"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages & Frameworks",
      skills: [
        { name: "Java Spring Boot", level: 90 },
        { name: "ReactJS + Tailwind CSS", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "React Native", level: 75 },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "SQL Server", level: 85 },
      ],
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 70 },
        { name: "Git & CI/CD", level: 85 },
        { name: "AWS & Cloud Deployment", level: 75 },
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Teamwork & Problem-Solving", level: 90 },
        { name: "Research Skills", level: 85 },
        { name: "Agile/Scrum Methodology", level: 80 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">Skills</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
