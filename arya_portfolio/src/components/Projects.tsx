import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and advanced analytics dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      category: "Full Stack",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/johndoe/ecommerce",
      featured: true
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Machine learning dashboard for business intelligence with predictive analytics and real-time data visualization.",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      category: "AI/ML",
      technologies: ["Python", "TensorFlow", "React", "D3.js", "PostgreSQL"],
      liveUrl: "https://ai-dashboard-demo.com",
      githubUrl: "https://github.com/johndoe/ai-dashboard",
      featured: true
    },
    {
      title: "Mobile Fitness Tracker",
      description: "Cross-platform mobile app for fitness tracking with social features, workout plans, and nutrition guidance.",
      image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      category: "Mobile",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      liveUrl: "https://fitness-app-demo.com",
      githubUrl: "https://github.com/johndoe/fitness-tracker",
      featured: false
    },
    {
      title: "Real-Time Chat Application",
      description: "Scalable chat application with video calling, file sharing, and team collaboration features.",
      image: "https://images.pexels.com/photos/5965592/pexels-photo-5965592.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      category: "Full Stack",
      technologies: ["Vue.js", "Socket.io", "Node.js", "WebRTC", "Redis"],
      liveUrl: "https://chat-app-demo.com",
      githubUrl: "https://github.com/johndoe/chat-app",
      featured: false
    },
    {
      title: "Blockchain Voting System",
      description: "Secure and transparent voting system using blockchain technology with smart contracts and voter verification.",
      image: "https://images.pexels.com/photos/5980854/pexels-photo-5980854.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      category: "Blockchain",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
      liveUrl: "https://voting-demo.com",
      githubUrl: "https://github.com/johndoe/blockchain-voting",
      featured: true
    },
    {
      title: "Content Management System",
      description: "Headless CMS with drag-and-drop page builder, multi-language support, and advanced SEO optimization.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      category: "Full Stack",
      technologies: ["Next.js", "GraphQL", "Prisma", "PostgreSQL", "Docker"],
      liveUrl: "https://cms-demo.com",
      githubUrl: "https://github.com/johndoe/headless-cms",
      featured: false
    }
  ];

  const categories = ['All', 'Full Stack', 'AI/ML', 'Mobile', 'Blockchain'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);
  const displayProjects = selectedCategory === 'All' ? featuredProjects : filteredProjects;

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

        {/* Category Filter */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center bg-white rounded-full p-2 shadow-lg">
            <Filter className="w-5 h-5 text-gray-500 mx-3" />
            <div className="flex space-x-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
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
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex space-x-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

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

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-purple-500 hover:text-purple-600 transition-all duration-200 font-medium"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        {selectedCategory === 'All' && (
          <div className="text-center mt-12">
            <button
              onClick={() => setSelectedCategory('Full Stack')}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              View All Projects
              <ExternalLink className="w-5 h-5 ml-2" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;