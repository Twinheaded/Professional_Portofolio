import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="font-['Inter',sans-serif] antialiased">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Philipus Sanjaya</h3>
              <p className="text-gray-400 leading-relaxed">
                Software Developer & Data Scientist passionate about creating 
                innovative solutions through code and data-driven insights.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a 
                    href="mailto:hi@psanjaya.com" 
                    className="hover:text-white transition-colors"
                  >
                    hi@psanjaya.com
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/philipus-sanjaya-292a8a290/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </li>
                <li className="text-gray-500">GitHub (Coming Soon)</li>
                <li>Melbourne, VIC, Australia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Philipus Sanjaya. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
  );
}

export default App;