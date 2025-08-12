import React from 'react';


const Projects: React.FC = () => {

  const projects = [
    {
      title: "Cafe Craft Android Application",
      description: "Developed an Android app for managing cafe operations efficiently.",
      image: "https://res.cloudinary.com/dhnu8milu/image/upload/v1754998673/cafecraft1_1_nkuj6m.jpg",
      category: "Android Application",
      technologies: ["XML", "JAVA", "Maps api", "Firebase Database"],
      featured: true
    },
    {
      title: "Dream Code",
      description: "Dream Code is a creative platform where natural language prompts are transformed into working code in any programming language through AI-powered APIs",
      image: "https://res.cloudinary.com/dhnu8milu/image/upload/v1754998673/Dreamcode2_1_ttuepq.jpg",
      category: "Web Application",
      technologies: ["TypeScript", "CSS", "Bootstrap", "Openai API", "Node.js"],
      featured: true
    }
    
  ];

  const displayProjects = projects;

  
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            My <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing innovative solutions and creative implementations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
               
                

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 hover:text-white transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

               
               
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Projects;