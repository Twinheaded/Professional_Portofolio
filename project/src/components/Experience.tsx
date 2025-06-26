import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Data Scientist",
      company: "Tech Innovation Labs",
      location: "Melbourne, VIC",
      period: "2023 - Present",
      type: "Full-time",
      description: [
        "Lead data science initiatives for machine learning model development and deployment",
        "Collaborate with cross-functional teams to implement data-driven solutions",
        "Mentor junior data scientists and establish best practices for model development",
        "Achieved 25% improvement in predictive model accuracy through advanced feature engineering"
      ],
      technologies: ["Python", "TensorFlow", "AWS", "Docker", "SQL"]
    },
    {
      title: "Full-Stack Developer",
      company: "Digital Solutions Co.",
      location: "Melbourne, VIC",
      period: "2022 - 2023",
      type: "Full-time",
      description: [
        "Developed and maintained web applications using React, Node.js, and Python",
        "Implemented responsive designs and optimized application performance",
        "Collaborated with UX/UI designers to create intuitive user interfaces",
        "Integrated third-party APIs and services to enhance application functionality"
      ],
      technologies: ["React", "Node.js", "Python", "PostgreSQL", "Git"]
    },
    {
      title: "Data Analyst",
      company: "Analytics Hub",
      location: "Melbourne, VIC",
      period: "2021 - 2022",
      type: "Full-time",
      description: [
        "Analyzed complex datasets to identify trends and business insights",
        "Created comprehensive dashboards and reports for stakeholder presentations",
        "Automated data processing workflows, reducing manual work by 40%",
        "Collaborated with business teams to define KPIs and success metrics"
      ],
      technologies: ["Python", "SQL", "Tableau", "Excel", "R"]
    },
    {
      title: "Junior Software Developer",
      company: "StartUp Ventures",
      location: "Melbourne, VIC",
      period: "2020 - 2021",
      type: "Full-time",
      description: [
        "Built responsive web applications using modern JavaScript frameworks",
        "Participated in agile development processes and code reviews",
        "Contributed to open-source projects and learned industry best practices",
        "Gained experience in both frontend and backend development"
      ],
      technologies: ["JavaScript", "React", "Python", "MongoDB", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey through various roles has shaped me into a versatile professional 
            with expertise in both software development and data science.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-400 to-teal-400"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 w-full md:w-5/12 ${index % 2 === 0 ? '' : 'md:mr-0'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center space-x-2 text-sm text-blue-600 font-medium mb-2">
                        <Calendar size={16} />
                        <span>{experience.period}</span>
                        <span>•</span>
                        <span className="bg-blue-100 px-2 py-1 rounded">{experience.type}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {experience.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Briefcase size={16} />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-4">
                      {experience.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2 text-gray-700">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Education & Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Bachelor of Computer Science
              </h4>
              <p className="text-gray-600 mb-2">University of Melbourne</p>
              <p className="text-sm text-blue-600 font-medium">2018 - 2021</p>
              <p className="text-gray-700 mt-3">
                Specialized in Data Science and Software Engineering. 
                Graduated with High Distinction.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Certifications
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• AWS Certified Solutions Architect</li>
                <li>• Google Data Analytics Certificate</li>
                <li>• Microsoft Azure Data Scientist Associate</li>
                <li>• Certified Scrum Master (CSM)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;