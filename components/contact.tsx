"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Facebook,
  X,
} from "lucide-react";
import { Label } from "@/components/ui/label";

// Constants
const EMAILJS_CONFIG = {
  SERVICE_ID: "service_7w5dz7i",
  TEMPLATE_ID: "template_ds5tnh4",
  PUBLIC_KEY: "6Dx5Qh3qUmPU-OC1R",
};

// Types
interface FormData {
  name: string;
  email: string;
  message: string;
}

interface SubmitMessage {
  type: "success" | "error";
  text: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<SubmitMessage | null>(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Viet Nguyen",
        to_email: "vietnguyen.world@gmail.com",
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setSubmitMessage({
        type: "success",
        text: "Thank you for your message! I will get back to you soon.",
      });
      resetForm();
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitMessage({
        type: "error",
        text: "There was an error sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
          {/* Contact Information Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Contact Information
                </h3>

                <div className="space-y-4">
                  <ContactItem
                    icon={
                      <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />
                    }
                    label="Phone"
                    value="0888 674 724"
                  />
                  <ContactItem
                    icon={
                      <Mail className="h-5 w-5 text-green-600 dark:text-green-400" />
                    }
                    label="Email"
                    value="vietnguyen.world@gmail.com"
                  />
                  <ContactItem
                    icon={
                      <MapPin className="h-5 w-5 text-green-600 dark:text-green-400" />
                    }
                    label="Location"
                    value="District 12, Ho Chi Minh City"
                  />
                </div>

                <SocialLinks />
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Send Me a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <FormField
                    label="Name"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />

                  <FormField
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                  />

                  <FormField
                    label="Message"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    required
                    isTextarea
                  />

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  {submitMessage && (
                    <p
                      className={`mt-2 text-center ${
                        submitMessage.type === "success"
                          ? "text-green-600"
                          : "text-red-600"
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
  );
}

// Component cho Contact Item
const ContactItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-center gap-3">
    <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
      <p className="font-medium text-gray-900 dark:text-white">{value}</p>
    </div>
  </div>
);

// Component cho Social Links
const SocialLinks = () => (
  <div className="mt-8">
    <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">
      Social Profiles
    </h4>
    <div className="flex gap-4">
      <SocialLink
        href="https://www.linkedin.com/in/viet-nguyen-ngo-9a774a321/"
        icon={
          <Linkedin className="h-5 w-5 text-green-600 dark:text-green-400" />
        }
      />
      <SocialLink
        href="https://github.com/NVNnguyen"
        icon={<Github className="h-5 w-5 text-green-600 dark:text-green-400" />}
      />
      <SocialLink
        href="https://www.facebook.com/viet.nguyen.455655/"
        icon={
          <Facebook className="h-5 w-5 text-green-600 dark:text-green-400" />
        }
      />
      <SocialLink
        href="https://x.com/tylerngo1122"
        icon={<X className="h-5 w-5 text-green-600 dark:text-green-400" />}
      />
    </div>
  </div>
);

// Component cho Social Link
const SocialLink = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-100 dark:bg-green-900 p-3 rounded-full hover:bg-green-200 dark:hover:bg-green-800 transition-colors"
  >
    {icon}
  </a>
);

// Component cho Form Field
const FormField = ({
  label,
  id,
  name,
  value,
  onChange,
  placeholder,
  required,
  type = "text",
  rows,
  isTextarea = false,
}: {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder: string;
  required?: boolean;
  type?: string;
  rows?: number;
  isTextarea?: boolean;
}) => (
  <div className="space-y-2">
    <Label htmlFor={id}>{label}</Label>
    {isTextarea ? (
      <Textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        required={required}
      />
    ) : (
      <Input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    )}
  </div>
);
