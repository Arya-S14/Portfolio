import React from 'react';
import { Trophy, Star, Medal, Crown } from 'lucide-react';

const Awards: React.FC = () => {
  const awards = [
    {
      year: "2024",
      title: "Secured Top Spot in 3rd Year Diploma",
      organization: "KBP Polytechnic",
      description: "With unrelenting dedication, I emerged as the supreme achiever by ascending to the pinnacle of academic excellence, securing the top spot in third year of polytechnic studies, spanning across semesters 5 to 6.",
      icon: <Crown className="w-8 h-8" />,
      color: "from-yellow-400 to-orange-500",
      category: "Academics"
    },
    {
      year: "2024",
      title: "Rank 1 in State Level Paper Presentation",
      organization: "KBP Polytechnic",
      description: "Awarded 1st Prize for outstanding research and presentation skills, Showcased innovative ideas and expertise in Future Scope Of AI Demonstrated exceptional communication and presentation abilities.State-Level Technical Paper Presentation Awarded 1st Prize for outstanding research and presentation skills, Showcased innovative ideas and expertise in Future Scope Of AI Demonstrated exceptional communication and presentation abilities.",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      category: "Extra-Curricular"
    },
    {
      year: "2024",
      title: "Pioneered The Event as the Ladies Representative",
      organization: "KBP Polytechnic",
      description: "Spearheaded a successful event, honing leadership and organizational skills. Gained valuable experience in team management, communication, and problem-solving. Developed expertise in event planning, execution, and evaluation.",
      icon: <Star className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-600",
      category: "Leadership"
    },
    {
      year: "2023",
      title: "Held First Position in 2nd Year Diploma",
      organization: "KBP Polytechnic",
      description: "My academic prowess shone brightly as I dominated the rankings, clinching the top position in my second year of polytechnic education, covering semesters 3 to 4",
      icon: <Medal className="w-8 h-8" />,
      color: "from-green-500 to-teal-600",
      category: "Academics"
    }
      
  ];

  const categories = ["All"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredAwards = selectedCategory === "All" 
    ? awards 
    : awards.filter(award => award.category === selectedCategory);

  return (
    <section id="awards" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Honours & <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">Awards</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recognition for excellence and innovation in technology & Academics
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:text-gray-800 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAwards.map((award, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${award.color} p-6 relative`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full transform translate-x-6 -translate-y-6"></div>
                <div className="relative z-10 flex items-center justify-between">
                  <div className="text-white">{award.icon}</div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-sm font-semibold">{award.year}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <span className={`inline-block bg-gradient-to-r ${award.color} bg-clip-text text-transparent text-xs font-semibold uppercase tracking-wide mb-2`}>
                    {award.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors duration-300">
                    {award.title}
                  </h3>
                  <p className="text-cyan-600 font-medium text-sm">{award.organization}</p>
                </div>

                <p className="text-gray-600 leading-relaxed">{award.description}</p>
              </div>

              {/* Hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${award.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        
          
        
      </div>
    </section>
  );
};

export default Awards;