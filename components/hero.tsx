"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Fullstack Developer";

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center text-center px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
          Viet Nguyen Ngo
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-8 h-8">
          {typedText}
          <span className="animate-blink">|</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link href="#projects">
            <Button className="bg-green-600 hover:bg-green-700">
              View Projects
            </Button>
          </Link>
          <Link href="#contact">
            <Button variant="outline">Contact Me</Button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <Link href="#about">
          <ChevronDown className="h-8 w-8 text-gray-500 dark:text-gray-400 cursor-pointer" />
        </Link>
      </motion.div>
    </section>
  );
}
