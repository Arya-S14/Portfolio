import React from 'react';

const Languages: React.FC = () => {
  const languages = [
    {
      name: "English",
      proficiency: 90,
      description: "Fluent in both professional and casual contexts.",
      
    },
    {
      name: "Marathi",
      proficiency: 100,
      description: "Fluent in both professional and casual contexts.",
     
    },
    {
      name: "Hindi",
      proficiency: 100,
      description: "Fluent in both professional and casual contexts.",
     
    }
    
  ];



  return (
    <section id="languages" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Languages</span>
          </h2>
        </div>

        

        {/* Languages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {languages.map((language, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl group border border-white/20"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                 
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {language.name}
                    </h3>
                   
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{language.proficiency}%</div>
                </div>
              </div>

              {/* Proficiency Bar */}
              <div className="mb-4">
                <div className="w-full bg-slate-700/50 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${language.proficiency}%` }}
                  ></div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">{language.description}</p>

              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Languages;