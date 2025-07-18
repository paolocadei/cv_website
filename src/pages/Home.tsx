import React from 'react';
import { Link } from 'react-router-dom';
import { 
  User, GraduationCap, Briefcase, FolderOpen, Heart, Code, 
  ArrowRight, Download, Mail, Globe
} from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-2/3 mb-8 lg:mb-0">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                Welcome to My Portfolio
              </h1>
              <p className="text-2xl md:text-3xl font-light mb-6 tracking-wide">
                Paolo Cadei - Data Analyst/Engineer
              </p>
              <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-90">
                Passionate about transforming data into actionable insights. Currently pursuing 
                a Master's in Data Science and Business Analytics at the University of Amsterdam, 
                with hands-on experience in business intelligence, data engineering, and machine learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </button>
                <button className="bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-800 transition-colors flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Me
                </button>
              </div>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <div className="w-64 h-64 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 shadow-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Paolo Cadei" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">8.6</div>
              <div className="text-gray-600">Master's GPA</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">3+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">8+</div>
              <div className="text-gray-600">Technical Skills</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">3</div>
              <div className="text-gray-600">Languages</div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">Explore My Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* About Card */}
            <Link to="/about" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full group-hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <User className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold ml-4 text-slate-800">About Me</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Learn about my background, skills, and what drives my passion for data science and analytics.
                </p>
                <div className="flex items-center text-orange-600 font-semibold group-hover:translate-x-2 transition-transform">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>

            {/* Education Card */}
            <Link to="/education" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full group-hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <GraduationCap className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold ml-4 text-slate-800">Education</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  My academic journey at the University of Amsterdam, including my Master's and Bachelor's degrees.
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>

            {/* Experience Card */}
            <Link to="/experience" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full group-hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Briefcase className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold ml-4 text-slate-800">Experience</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Professional experience in business intelligence, data engineering, and analytics across multiple companies.
                </p>
                <div className="flex items-center text-green-600 font-semibold group-hover:translate-x-2 transition-transform">
                  <span>View Experience</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>

            {/* Projects Card */}
            <Link to="/projects" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full group-hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <FolderOpen className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold ml-4 text-slate-800">Projects</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Explore my portfolio of data science projects, from machine learning models to data pipelines.
                </p>
                <div className="flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform">
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>

            {/* Skills Card */}
            <Link to="/skills" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full group-hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <Code className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold ml-4 text-slate-800">Skills</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Technical skills including Python, SQL, Tableau, dbt, GCP, and more programming languages.
                </p>
                <div className="flex items-center text-indigo-600 font-semibold group-hover:translate-x-2 transition-transform">
                  <span>View Skills</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>

            {/* Hobbies Card */}
            <Link to="/hobbies" className="group">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full group-hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="bg-pink-100 p-3 rounded-lg">
                    <Heart className="w-8 h-8 text-pink-600" />
                  </div>
                  <h3 className="text-2xl font-bold ml-4 text-slate-800">Hobbies</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Personal interests including reading, bouldering, meditation, board games, and photography.
                </p>
                <div className="flex items-center text-pink-600 font-semibold group-hover:translate-x-2 transition-transform">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl mb-8 opacity-90">
            I'm excited to bring my data science and engineering expertise to your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center">
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-800 transition-colors flex items-center justify-center">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;