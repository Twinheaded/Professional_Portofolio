import React from 'react';
import { ExternalLink, Github, Database, Globe, Brain, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Analytics Dashboard",
      description: "Built a comprehensive analytics dashboard for an e-commerce platform using React and Python. Features real-time sales tracking, customer behavior analysis, and predictive inventory management.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Python", "PostgreSQL", "Chart.js", "FastAPI"],
      category: "Full-Stack Development",
      icon: <TrendingUp className="w-6 h-6" />,
      features: ["Real-time dashboard", "Predictive analytics", "Customer segmentation", "ROI tracking"]
    },
    {
      title: "Machine Learning Prediction Model",
      description: "Developed a machine learning model to predict customer churn with 94% accuracy. Implemented feature engineering, model optimization, and deployed using Docker and AWS.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "Scikit-learn", "TensorFlow", "Docker", "AWS"],
      category: "Data Science",
      icon: <Brain className="w-6 h-6" />,
      features: ["94% accuracy", "Feature engineering", "Model optimization", "Cloud deployment"]
    },
    {
      title: "Data Visualization Platform",
      description: "Created an interactive data visualization platform that transforms complex datasets into intuitive charts and graphs. Built with D3.js and Python backend for data processing.",
      image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["D3.js", "Python", "Flask", "MongoDB", "JavaScript"],
      category: "Data Visualization",
      icon: <Database className="w-6 h-6" />,
      features: ["Interactive charts", "Real-time updates", "Custom filters", "Export functionality"]
    },
    {
      title: "Portfolio Management System",
      description: "Developed a comprehensive portfolio management system for financial advisors. Features client tracking, risk assessment, and automated reporting with modern web technologies.",
      image: "https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
      category: "Web Application",
      icon: <Globe className="w-6 h-6" />,
      features: ["Client management", "Risk assessment", "Automated reports", "Secure authentication"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work combining software development expertise 
            with data science innovation to solve real-world challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-2">
                  <div className="text-blue-600">{project.icon}</div>
                  <span className="text-sm font-medium text-gray-700">{project.category}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 opacity-50 cursor-not-allowed">
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-blue-300 hover:text-blue-600 transition-all duration-200 opacity-50 cursor-not-allowed">
                    <Github size={16} />
                    <span>Source Code</span>
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">*Links coming soon</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Interested in My Work?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always excited to discuss new projects and opportunities. 
              Let's connect and explore how we can work together.
            </p>
            <a
              href="mailto:hi@psanjaya.com"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;