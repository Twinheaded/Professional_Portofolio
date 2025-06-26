import React from 'react';
import { Code, Database, Brain } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Proficient in modern web technologies, creating scalable applications from concept to deployment"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Science & Analytics",
      description: "Expert in machine learning, statistical analysis, and turning complex data into actionable insights"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Problem Solving",
      description: "Passionate about solving complex challenges through innovative technology solutions and data-driven approaches"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Software Developer and Data Scientist based in Melbourne, Australia. 
            With expertise spanning both traditional software development and cutting-edge data science, 
            I bridge the gap between technology and insights to create meaningful solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group bg-gray-50 p-8 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200"
            >
              <div className="text-blue-600 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {highlight.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                My Journey
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                My journey in technology began with a curiosity about how data can tell stories and 
                drive decisions. Over the years, I've developed expertise in both software development 
                and data science, allowing me to create comprehensive solutions that not only function 
                beautifully but also provide valuable insights.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I'm always eager to take on new challenges and collaborate with teams to build 
                innovative solutions that make a real impact. Whether it's developing a web application 
                or analyzing complex datasets, I bring dedication and attention to detail to every project.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">Melbourne</div>
                  <div className="text-gray-600 mb-4">Victoria, Australia</div>
                  <div className="text-sm text-gray-500">
                    Open to opportunities locally and remotely
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;