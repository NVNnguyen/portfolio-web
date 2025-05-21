"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      company: "FPT Software",
      position: "Backend Developer",
      period: "April 2024 - October 2024",
      description: [
        "Participated in the development of a scalable online course selling platform, focusing on backend functionality.",
        "Designed and implemented RESTful APIs using Java Spring Boot to handle core features such as user registration, course enrollment, order processing, and payment integration.",
        "Collaborated with frontend developers to ensure seamless data exchange and user experience.",
        "Optimized PostgreSQL queries and database structure to improve system performance and response time.",
        "Applied unit testing and integrated test automation to improve code quality and reliability.",
        "Followed software development best practices including version control (Git), code reviews, and agile methodologies.",
        "Contributed to API security enhancement through authentication and authorization mechanisms.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-l-4 border-l-green-600">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-bold flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-green-600" />
                        {exp.position}
                      </CardTitle>
                      <p className="text-lg font-medium text-gray-700 dark:text-gray-300">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="text-sm font-medium">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
