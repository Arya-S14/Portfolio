import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Palette, Server, Smartphone, Globe, Zap, Users } from 'lucide-react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      color: "from-cyan-500 to-blue-600",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 98 },
        { name: "Tailwind CSS", level: 92 },
        { name: "HTML5", level: 100 },
        { name: "CSS", level: 100 },
        { name: "Bootstrap", level: 100 },

      ]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      color: "from-purple-500 to-pink-600",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 100 },
        { name: "Java", level: 100 },
        { name: "Express.js", level: 85 },
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database & Cloud",
      color: "from-green-500 to-teal-600",
      skills: [
        { name: "MongoDB", level: 100 },
        { name: "PostgreSQL", level: 70 },
        { name: "AWS", level: 80 },
        { name: "Firebase Database", level: 100 },
        { name: "SQL", level: 100 }
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      color: "from-orange-500 to-red-600",
      skills: [
        { name: "Flutter", level: 78 },
        { name: "Android (Java)", level: 90 }
      ]
    }
  ];

  const softSkills = [
    { icon: <Users className="w-6 h-6" />, name: "Team Work", level: 92 },
    { icon: <Globe className="w-6 h-6" />, name: "Leadership", level: 95 },
    { icon: <Zap className="w-6 h-6" />, name: "Problem Solving", level: 98 },
    { icon: <Palette className="w-6 h-6" />, name: "Creative Thinking", level: 88 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const SkillBar: React.FC<{ skill: { name: string; level: number }; delay: number; color: string }> = ({ skill, delay, color }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2 text-white">
        <span className="text-sm font-medium text-light-700">{skill.name}</span>
        <span className="text-sm font-bold text-white-600">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={`bg-gradient-to-r ${color} h-2.5 rounded-full transition-all duration-1000 ease-out`}
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${delay}ms`
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Technologies and expertise I bring to every project
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 group border border-white/20"
            >
              <div className={`inline-flex items-center justify-center p-3 bg-gradient-to-r ${category.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">{category.icon}</div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                {category.title}
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skillIndex}
                    skill={skill}
                    delay={categoryIndex * 200 + skillIndex * 100}
                    color={category.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Soft Skills
            </span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mb-4 hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{skill.icon}</div>
                </div>
                <h4 className="text-white font-semibold mb-2">{skill.name}</h4>
                <div className="relative w-16 h-16 mx-auto">
                  <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="none"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="4"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="4"
                      strokeDasharray={`${2 * Math.PI * 28}`}
                      strokeDashoffset={isVisible ? `${2 * Math.PI * 28 * (1 - skill.level / 100)}` : `${2 * Math.PI * 28}`}
                      strokeLinecap="round"
                      style={{
                        transition: 'stroke-dashoffset 1s ease-out',
                        transitionDelay: `${index * 200}ms`
                      }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{skill.level}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;