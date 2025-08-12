import React from 'react';
import { Code, Coffee, Lightbulb, Heart } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Building Aesthetic and Responsive interfaces"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Problem Solver",
      description: "Turning complex challenges into elegant solutions"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Always exploring new technologies and approaches"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "User-Focused",
      description: "Creating experiences that users love"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            About <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 p-1">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <img
                        src="https://res.cloudinary.com/dhnu8milu/image/upload/v1754972946/ARYA_PROFILE1_hejnxx.jpg"
                        alt="Profile"
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-slate-900">John Doe</h3>
                  <p className="text-cyan-600 font-medium">Full Stack Developer</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Hello, there! I am a passionate Computer Engineering student at Vishwakarma Institute of Information Technology (VIIT), Pune, 
                  with a deep passion for solving real-world challenges through technology. 
                  Through the use of tech tools, I enjoy solving real-world problems.
                  My journey in tech started with a curiosity about how things work, and it has 
                  evolved into a love for building applications that make a real impact.
                </p>
                
                <p>
                  I'm currently studying specialization in 4.0 technologies at 
                  NxtWave's CCBP 4.0 Academy. Hands-on projects and coding challenges are what keep me interested. 
                  Introducing Industry's first ever IRC (Industry Ready Certificate) 4.0, ready to take on new challenges. 
                  I believe in continuous learning and 
                  staying ahead of the curve in this ever-evolving field.
                </p>

                <p>
                  My goal is to create software that not only meets technical requirements 
                  but also helps the people out there.
                  One interesting thing about me is that I rely on technology to bring my 2 a.m. ideas to life.
                  I'm always excited to 
                  collaborate on projects that challenge me and allow me to grow as a developer.
                </p>
              </div>
            </div>

            {/* Floating decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="text-cyan-500 group-hover:text-purple-600 transition-colors duration-300 mb-4">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "5+", label: "Languages" },
            { number: "5+", label: "Frameworks" },
            { number: "3+", label: "Databases" },
            { number: "2+", label: "Tools" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;