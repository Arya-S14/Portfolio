import React from 'react';
import {Target, Users, Lightbulb, Clock} from 'lucide-react';

const WhyHireMe: React.FC = () => {
  const reasons = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results-Driven Approach",
      description: "Every line of code serves a purpose. I focus on creating solutions that directly impact your business goals and user satisfaction.",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Team Player",
      description: "Strong communication skills and experience working with cross-functional teams to ensure seamless project execution.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation & Creativity",
      description: "I bring fresh perspectives and creative solutions to complex problems, staying ahead of technology trends.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Reliability & Consistency",
      description: "You can count on me to meet deadlines and maintain consistent quality throughout the entire development process.",
      color: "from-green-500 to-teal-600"  
    }
   
  ];

  return (
    <section id="hire" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Why <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Hire Me?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here's what sets me apart and makes me the right choice for your next project
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl group border border-white/20"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center p-4 bg-gradient-to-r ${reason.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">{reason.icon}</div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                {reason.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                {reason.description}
              </p>

           
            </div>
          ))}
        </div>


        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to bring your vision to life?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Let's collaborate to create something amazing together. I'm excited to learn about 
              your project and discuss how I can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Start a Conversation
              </button>
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'John_Doe_Resume.pdf';
                  link.click();
                }}
                className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 rounded-full font-semibold text-lg hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:scale-105"
              >
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;