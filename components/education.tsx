"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">Education</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <GraduationCap className="h-8 w-8 text-green-600" />
              <div>
                <CardTitle className="text-xl font-bold">Software Engineering</CardTitle>
                <p className="text-gray-700 dark:text-gray-300">FPT University</p>
              </div>
              <div className="ml-auto flex items-center text-gray-500 dark:text-gray-400">
                <Calendar className="h-4 w-4 mr-1" />
                <span>August 2022 - September 2025</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mt-4">
                <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Activities</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium">FFC members (2022-2025):</span> Participated in school and club soccer
                  tournaments
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
