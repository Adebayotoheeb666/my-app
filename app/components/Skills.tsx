"use client";

import { FaReact, FaNodeJs, FaPython, FaAws } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiDocker, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

export default function SkillsPreview() {
  const skills = [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Python", icon: <FaPython className="text-blue-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "AWS", icon: <FaAws className="text-orange-500" /> },
    { name: "Docker", icon: <SiDocker className="text-blue-500" /> }
  ];

  return (
    <section className="my-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-200">
          My Tech Stack
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center group"
              title={skill.name}
            >
              <div className="text-4xl p-3 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md group-hover:shadow-lg transition">
                {skill.icon}
              </div>
              <span className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
