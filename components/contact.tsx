"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"
import { Label } from "@/components/ui/label"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Success
      setSubmitMessage({
        type: "success",
        text: "Thank you for your message! I will get back to you soon.",
      })
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text: "There was an error sending your message. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                      <p className="font-medium text-gray-900 dark:text-white">0888 674 724</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <p className="font-medium text-gray-900 dark:text-white">vietnguyen.world@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                      <p className="font-medium text-gray-900 dark:text-white">District 12, Ho Chi Minh City</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Social Profiles</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com/in/viet-nguyen-ngo-9a774a321/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-100 dark:bg-green-900 p-3 rounded-full hover:bg-green-200 dark:hover:bg-green-800 transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </a>
                    <a
                      href="https://github.com/NVNnguyen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-100 dark:bg-green-900 p-3 rounded-full hover:bg-green-200 dark:hover:bg-green-800 transition-colors"
                    >
                      <Github className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send Me a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  {submitMessage && (
                    <p
                      className={`mt-2 text-center ${
                        submitMessage.type === "success" ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {submitMessage.text}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
