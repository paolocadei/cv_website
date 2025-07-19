import React from 'react';
import { Code, Globe, MapPin, Phone, Mail, Linkedin } from 'lucide-react';
import paoloPhoto from '../images/IMG_20210627_131204.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Profile Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg">
                <img 
                  src={paoloPhoto} 
                  alt="Paolo Cadei" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Paolo Cadei</h2>
                <p className="text-xl text-orange-600 mb-4">Data Analyst/Engineer</p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  I'm a recent Data Science & Business Analytics graduate from the University of Amsterdam. I love all things data — especially when it involves building cool stuff with code, automating tasks, or exploring the power of AI and large language models. Outside of work, you'll find me reading, bouldering, meditating, or deep into a board game, amongst other things :)
                </p>
              </div>
            </div>
          </div>

          {/* Longer Introduction */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">What Sets Me Apart</h3>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                What sets me apart in data science? Probably the fact that I get equally excited about writing a clean SQL query and explaining it in plain English to someone who thinks Python is just a snake. I’m not just here to crunch numbers — I love solving messy, complex problems and turning data chaos into insights that actually make sense (and maybe even drive smart decisions). Bridging the gap between the technical and the practical is kind of my thing.
              </p>
              
              <p>
                Throughout my academic and professional career, I've consistently demonstrated the ability to 
                translate complex data concepts into actionable business insights. My experience spans from 
                startup environments where I built data pipelines from scratch, to enterprise-level organizations 
                like IKEA Digital where I worked with cutting-edge AI technologies including LLMs and RAG models.
              </p>
              
              <p>
                What truly sets me apart is my holistic approach to data science. I don't just focus on the 
                technical aspects – I understand the business context, the stakeholder needs, and the real-world 
                impact of data-driven decisions. My multilingual background and international experience have 
                taught me to communicate complex technical concepts to diverse audiences, making me an effective 
                bridge between technical teams and business stakeholders.
              </p>
              
              <p>
                I'm particularly passionate about the intersection of AI and practical business applications. 
                My work with LLM-powered systems and automated data pipelines reflects my belief that technology 
                should not just be impressive, but genuinely useful in solving real problems. Whether it's 
                building intuitive data query systems or creating comprehensive BI dashboards, I focus on 
                solutions that empower users and drive meaningful outcomes.
              </p>
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
                'Python', '(Postgre)SQL', 'Tableau', 'Microsoft Office', 
                'R', 'dbt', 'GCP', 'Terraform', 'Snowflake', 'Vector Databases', 'RAG Frameworks', 'Web Scraping'
              ].map((skill) => (
                <div key={skill} className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-3 rounded-lg text-center font-semibold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 flex items-center justify-center min-h-[3rem]">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
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
              <a 
                href="https://linkedin.com/in/paolo-cadei-a56197226"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-orange-600 mr-4" />
                <div>
                  <p className="font-semibold text-slate-800">LinkedIn</p>
                  <p className="text-gray-600 text-sm">linkedin.com/in/paolo-cadei-a56197226</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;