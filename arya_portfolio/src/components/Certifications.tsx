import React from 'react';
import { Award, Calendar, Shield } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "Youth Parliament",
      issuer: "MESA Vishwakarma Institute of Information Technology",
      date: "2025",
      icon: "🏗️",
      color: "from-orange-500 to-red-600",
      description: "Participated in a panel discussing policy-making, youth leadership, and societal change. Contributing insights and opinions on contemporary issues."
    },
    {
      title: "Machine Learning Certificate",
      issuer: "LEAPS",
      date: "2025",
      icon: "☁️",
      color: "from-blue-500 to-indigo-600",
      description: "Completed a certified training program covering linear regression algorithms, data preprocessing, model evaluation, and deployment techniques."
    },
    {
      title: "7 Days of Hands-On AI Development Bootcamp and Certification",
      issuer: "Udemy",
      date: "2025",
      icon: "🔷",
      color: "from-cyan-500 to-blue-600",
      description: "Gained hands-on experience in building AI solutions using real-world datasets."
    },
    {
      title: "Responsive Website Development ",
      issuer: "NxtWave",
      date: "2025",
      icon: "⚙️",
      color: "from-purple-500 to-pink-600",
      description: "Designed and developed a fully responsive personal portfolio website using HTML5, CSS3, and Bootstrap, optimized for cross-device compatibility."
    },
    {
      title: "Model Context Protocol (MCP)",
      issuer: "NxtWave",
      date: "2025",
      icon: "⚛️",
      color: "from-cyan-400 to-blue-500",
      description: "Completed training on MCP, model interoperability, and efficient AI communication protocols and developed Projects."
    },
    {
      title: "Static Website Development",
      issuer: "NxtWave",
      date: "2025",
      icon: "🛡️",
      color: "from-red-500 to-orange-600",
      description: "Built a professional static website using HTML and CSS, ensuring fast load speed, clean UI, and SEO-friendly design."
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional certifications that validate my technical and Non-Technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${cert.color} p-6 relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full transform translate-x-8 -translate-y-8"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full transform -translate-x-4 translate-y-4"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{cert.icon}</div>
                    <Award className="w-6 h-6 text-white/80" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-white/90 font-medium">{cert.issuer}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">{cert.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Shield className="w-4 h-4 mr-2" />
                    <span className="text-xs">Verified</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 leading-relaxed">{cert.description}</p>

              
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-600/0 group-hover:from-cyan-500/5 group-hover:to-purple-600/5 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center space-x-8 bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
                {certifications.length}+
              </div>
              <div className="text-gray-600 font-medium">Certifications</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-gray-600 font-medium">Verified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;