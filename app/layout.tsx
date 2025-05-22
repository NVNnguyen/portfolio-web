import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import AnimatedBackground from "@/components/animated-background";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Viet Nguyen Ngo | Fullstack Developer",
  description:
    "Personal portfolio website of Viet Nguyen Ngo, a Fullstack Developer specializing in Java Spring Boot, ReactJS, and more.",
  keywords: [
    "Viet Nguyen Ngo",
    "Fullstack Developer",
    "Java Spring Boot",
    "ReactJS",
    "Portfolio",
    "Developer",
  ],
  authors: [{ name: "Viet Nguyen Ngo" }],
  creator: "Viet Nguyen Ngo",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AnimatedBackground />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
