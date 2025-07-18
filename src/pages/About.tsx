import React from 'react';
import { Code, Globe, MapPin, Phone, Mail, Linkedin } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">About Me</h1>
            <p className="text-xl text-gray-600">Get to know Paolo Cadei</p>
          </div>

          {/* Profile Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Paolo Cadei" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Paolo Cadei</h2>
                <p className="text-xl text-orange-600 mb-4">Data Analyst/Engineer</p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  I am a Data Science Master's student, soon to graduate, at the Universiteit van Amsterdam. 
                  I love finding patterns and answering questions in a data-driven manner, particularly if coding is required. 
                  In my free time, I love reading, bouldering, meditating and playing board games.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Phone className="w-6 h-6 text-orange-600 mr-4" />
                <div>
                  <p className="font-semibold text-slate-800">Phone</p>
                  <p className="text-gray-600">+39 3384972150</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Mail className="w-6 h-6 text-orange-600 mr-4" />
                <div>
                  <p className="font-semibold text-slate-800">Email</p>
                  <p className="text-gray-600">paolo.cadei2001@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <MapPin className="w-6 h-6 text-orange-600 mr-4" />
                <div>
                  <p className="font-semibold text-slate-800">Location</p>
                  <p className="text-gray-600">Amsterdam, Netherlands</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Linkedin className="w-6 h-6 text-orange-600 mr-4" />
                <div>
                  <p className="font-semibold text-slate-800">LinkedIn</p>
                  <p className="text-gray-600 text-sm">linkedin.com/in/paolo-cadei-a56197226</p>
                </div>
              </div>
            </div>
          </div>

          {/* Computer Skills */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <Code className="w-6 h-6 text-orange-600 mr-3" />
              Computer Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Python', 'SQL', 'Tableau', 'Microsoft Office', 
                'R', 'dbt', 'GCP', 'Terraform', 'Snowflake', 'Vector Databases', 'RAG Frameworks'
              ].map((skill) => (
                <div key={skill} className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-3 rounded-lg text-center font-semibold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 flex items-center justify-center min-h-[3rem]">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <Globe className="w-6 h-6 text-orange-600 mr-3" />
              Languages
            </h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-slate-800">English</span>
                <div className="flex space-x-1">
                  {[1,2,3,4,5].map((dot) => (
                    <div key={dot} className="w-3 h-3 rounded-full bg-orange-500"></div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-slate-800">Italian</span>
                <div className="flex space-x-1">
                  {[1,2,3,4,5].map((dot) => (
                    <div key={dot} className="w-3 h-3 rounded-full bg-orange-500"></div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-slate-800">Spanish</span>
                <div className="flex space-x-1">
                  {[1,2,3].map((dot) => (
                    <div key={dot} className="w-3 h-3 rounded-full bg-orange-500"></div>
                  ))}
                  {[4,5].map((dot) => (
                    <div key={dot} className="w-3 h-3 rounded-full bg-gray-300"></div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-slate-800">French</span>
                <div className="flex space-x-1">
                  {[1,2].map((dot) => (
                    <div key={dot} className="w-3 h-3 rounded-full bg-orange-500"></div>
                  ))}
                  {[3,4,5].map((dot) => (
                    <div key={dot} className="w-3 h-3 rounded-full bg-gray-300"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;