'use client'
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import TypeWriter from "./components/TypeWriter";




export default function Home() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const skills = ["JavaScript", "React", "Node.js", "TypeScript", "Next.js", "Tailwind CSS"];
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack online store with React & Node.js",
      logo: "/assets/project-logo1.png",
      tags: ["React", "Node.js", "MongoDB"],
      demo: "#",
      github: "#"
    },
    {
      title: "AI Dashboard",
      description: "Machine learning monitoring interface",
      logo: "/assets/project-logo2.png",
      tags: ["Python", "TensorFlow", "Next.js"],
      demo: "#",
      github: "#"
    }
  ];

  const testimonials = [
    {
      quote: "Exceptional work delivered on time and exceeded expectations.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp",
      avatar: "/assets/review1.png"
    },
    {
      quote: "Transformed our digital presence completely.",
      author: "Michael Chen",
      role: "CTO, Startup Inc",
      avatar: "/assets/review2.png"
    }
  ];

  const handleDownloadResume = () => {
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Alex_Developer_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="portfolio-root bg-gray-100 dark:bg-gray-900 min-h-screen">
      {/* Animated Navbar */}
      <nav className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="#" className="text-xl font-bold text-gray-900 dark:text-white">
                Alex Dev
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                Projects
              </Link>
              <Link href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                Skills
              </Link>
              <Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
                Contact
              </Link>
              <button 
                onClick={handleDownloadResume}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
              >
                Download Resume
              </button>
            </div>
            
            {/* Mobile Hamburger Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none transition"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <div className="space-y-2">
                  <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                  <span className={`block h-0.5 w-6 bg-current transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800 shadow-lg">
            <Link 
              href="#projects" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              href="#skills" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <Link 
              href="#contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <button 
              onClick={() => {
                handleDownloadResume();
                setIsMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition"
            >
              Download Resume
            </button>
          </div>
        </div>
      </nav>

      <main className="portfolio-content pt-16">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center gap-6 px-4">
          <div className="mt-12 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <Image
                src="/assets/hero-pics.png"
                alt="Developer Illustration"
                width={600}
                height={600}
                className="rounded-xl shadow-xl"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-bold">Hi, I'm Alex 👋</h1>
              <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mt-4">
                Full-Stack Developer | AI Enthusiast
              </h2>
              <div className="text-xl max-w-2xl h-8 mt-6">
                <TypeWriter phrases={[
                  "I build scalable web apps with React & Node.js",
                  "I create efficient backend services",
                  "I develop modern user interfaces",
                  "I solve complex problems with code"
                ]} />
              </div>
              <div className="flex gap-4 mt-8 justify-center flex-wrap">
                <Link 
                  href="#projects" 
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition transform hover:scale-105 shadow-lg"
                >
                  View My Work
                </Link>
                <Link 
                  href="#contact" 
                  className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition transform hover:scale-105 shadow-lg"
                >
                  Contact Me
                </Link>
                <button 
                  onClick={handleDownloadResume}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition transform hover:scale-105 shadow-lg"
                >
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="my-20 px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition bg-white dark:bg-gray-800">
                <div className="flex items-center gap-4 mb-4">
                  <Image 
                    src={project.logo} 
                    alt={project.title}
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link 
                    href={project.demo} 
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Live Demo
                  </Link>
                  <Link 
                    href={project.github} 
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Me Section */}
        <section className="my-20 px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="prose dark:prose-invert">
            <p>
              I'm a software engineer with 3+ years of experience building full-stack applications. 
              I love solving complex problems with clean, efficient code. Currently focused on React, 
              TypeScript, and cloud technologies.
            </p>
            <p>
              When I'm not coding, I enjoy hiking 🏔️ and playing chess ♟️. I'm passionate about 
              open-source contributions and mentoring junior developers in my free time.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="my-20 px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {skills.map((skill) => (
              <div 
                key={skill}
                className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-default shadow-md"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="my-20 px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="my-20 px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="mb-6 text-center">Want to collaborate or have questions? I'd love to hear from you!</p>
          <div className="flex flex-col items-center">
            <div className="flex gap-6 mb-8">
              <Link href="https://github.com" className="hover:opacity-80 transition transform hover:scale-110">
                <Image src="/assets/github.svg" alt="GitHub" width={40} height={40} />
              </Link>
              <Link href="https://linkedin.com" className="hover:opacity-80 transition transform hover:scale-110">
                <Image src="/assets/linkedin.svg" alt="LinkedIn" width={40} height={40} />
              </Link>
              <Link href="https://twitter.com" className="hover:opacity-80 transition transform hover:scale-110">
                <Image src="/assets/twitter.svg" alt="Twitter" width={40} height={40} />
              </Link>
              <Link href="mailto:hello@example.com" className="hover:opacity-80 transition transform hover:scale-110">
                <Image src="/assets/email.svg" alt="Email" width={40} height={40} />
              </Link>
            </div>
            <button 
              onClick={handleDownloadResume}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition transform hover:scale-105 shadow-lg text-lg"
            >
              Download Full Resume
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-200 dark:bg-gray-800 py-6 mt-20">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
          <p>© {new Date().getFullYear()} Alex Developer Portfolio. All rights reserved.</p>
          <p className="mt-2">Built with Next.js, Tailwind CSS, and ❤️</p>
        </div>
      </footer>
    </div>
  );
}