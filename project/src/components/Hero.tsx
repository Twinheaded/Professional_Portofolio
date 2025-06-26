import React from "react";
import { ArrowDown, Mail, Linkedin, Github } from "lucide-react";
import profileImage from '../assets/philipus_formal_photo.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Philipus
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 font-medium">
                Software Developer & Data Scientist
              </p>
              <p className="text-lg text-gray-500 max-w-2xl">
                Based in Melbourne, Australia • Passionate about creating
                innovative solutions through code and data-driven insights
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToAbout}
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                View My Work
              </button>
              <a
                href="mailto:hi@psanjaya.com"
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transform hover:scale-105 transition-all duration-200"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 justify-center lg:justify-start">
              <a
                href="mailto:hi@psanjaya.com"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-blue-50 transition-all duration-200 group"
                aria-label="Email"
              >
                <Mail className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
              </a>
              <a
                href="https://www.linkedin.com/in/philipus-sanjaya-292a8a290/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-blue-50 transition-all duration-200 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
              </a>
              <div
                className="p-3 bg-white rounded-full shadow-md opacity-50 cursor-not-allowed"
                title="Coming Soon"
              >
                <Github className="w-6 h-6 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={profileImage}
                alt="Philipus Sanjaya"
                className="w-80 h-80 rounded-2xl shadow-2xl object-cover"
              />
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-600 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
