import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
      institution: "Vishwakarma Institute of Information Technology",
      location: "Pune, India",
      duration: "2024 - 2027",
      gpa: "9.29/10.0",
      description: "Gained expertise in AI concepts, Machine Learning algorithms, Data Science, and Deep Learning",
      courses: ["Machine Learning", "Artificial Intelligence", "Soft Computing", "Cloud Computing","DevOps"]
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Rayat Shikshan Sanstha's Karmaveer Bhaurao Patil Polytechnic",
      location: "Satara, India",
      duration: "2022 - 2024",
      percentage: "92.40%",
      description: "Learned programming fundamentals, data structures, databases, and software development.",
      courses: ["Data Structures", "Database Systems", "Web Development", "Software Engineering","App Development","Computer Networking","Operating Systems","Core Languages"]
    },
    {
      degree: "HSC",
      institution: "Maharaja Sayajirao Vidyalaya Junior College",
      location: "Satara, India",
      duration: "2020 - 2022",
      percentage: "85.17%",
      description: "Focused on Physics, Chemistry and Biology.",
      courses: ["11th Mathematics", "Physics", "Biology", "English Literature","Marathi Literature","Geography"]
    },
     {
      degree: "SSC",
      institution: "Nirmala Convent High School",
      location: "Satara, India",
      duration: "2010 - 2020",
      percentage: "92.60%",
      description: "Completed general education with strong performance in Mathematics and Science.",
      courses: ["Mathematics", "Science", "Social Science", "English Literature","Hindi Literature","Marathi Literature","Geography"]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Academic foundation that shaped my technical expertise
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 rounded-full hidden lg:block"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:space-x-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full border-4 border-slate-800 z-10 hidden lg:block"></div>

                {/* Content card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl group border border-white/20">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mr-4">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <p className="text-cyan-400 font-medium">{edu.institution}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6 mb-4 text-gray-300">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-purple-400" />
                        {edu.location}
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="inline-block bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium border border-cyan-500/30">
                        GPA: {edu.gpa}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">{edu.description}</p>

                    <div>
                      <h4 className="text-white font-semibold mb-2">Key Courses:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, courseIndex) => (
                          <span
                            key={courseIndex}
                            className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-lg text-sm hover:bg-slate-600/50 transition-colors duration-200"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for alignment */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;