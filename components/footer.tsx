import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-600 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Viet Nguyen Ngo</h3>
            <p className="text-gray-400 mt-2">Fullstack Developer</p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/viet-nguyen-ngo-9a774a321/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://github.com/NVNnguyen"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="mailto:vietnguyen.world@gmail.com"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Viet Nguyen Ngo. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
