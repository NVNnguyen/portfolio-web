"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">About Me</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Objective</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I am a backend and fullstack developer with strengths in Java Spring Boot, frontend ReactJS, database
              PostgreSQL, SQL Server and knowledge of CI/CD, Docker, Kubernetes and Cloud. My goal is to join an
              innovative development team, applying new technologies to build stable, scalable and efficient software
              systems.
            </p>
            <div className="mt-6">
              <Button className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Location</h4>
              <p className="text-gray-700 dark:text-gray-300">District 12, Ho Chi Minh City</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Email</h4>
              <p className="text-gray-700 dark:text-gray-300 break-words">vietnguyen.world@gmail.com</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Phone</h4>
              <p className="text-gray-700 dark:text-gray-300">0888 674 724</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Interests</h4>
              <p className="text-gray-700 dark:text-gray-300">AI, System Design, Startups</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
