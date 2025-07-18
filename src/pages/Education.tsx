import React from 'react';
import { GraduationCap, Calendar, Award, MapPin, ExternalLink } from 'lucide-react';

const Education = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Education</h1>
            <p className="text-xl text-gray-600 mb-12">My Academic Journey</p>

            {/* Academic Achievements */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Academic Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">8.6</div>
                  <div className="text-gray-700 font-semibold">Master's GPA</div>
                  <div className="text-sm text-gray-600 mt-1">Current Program</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">8.27</div>
                  <div className="text-gray-700 font-semibold">Bachelor's GPA</div>
                  <div className="text-sm text-gray-600 mt-1">Cum Laude</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">4</div>
                  <div className="text-gray-700 font-semibold">Years</div>
                  <div className="text-sm text-gray-600 mt-1">Academic Excellence</div>
                </div>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="space-y-8">
              {/* Master's Degree */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-orange-500">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-center mb-4 lg:mb-0">
                    <div className="bg-orange-100 p-3 rounded-lg mr-4">
                      <GraduationCap className="w-8 h-8 text-orange-600" />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-2xl font-bold text-slate-800 text-left">Master's Degree</h2>
                      <p className="text-orange-600 font-semibold text-left">Data Science and Business Analytics</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span className="font-semibold">2024 - Current</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-gray-500 mr-2" />
                    <span className="text-gray-700">Universiteit Van Amsterdam</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-700">GPA: <strong>8.6</strong></span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Program Highlights</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Advanced machine learning and statistical modeling techniques
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Business analytics and strategic decision-making
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Big data processing and cloud computing platforms
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Data visualization and storytelling with data
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Research methodology and thesis project
                    </li>
                  </ul>
                </div>

                <div className="flex justify-center">
                  <a
                    href="https://ase.uva.nl/content/masters/data-science-and-business-analytics-business-analytics/study-programme/study-programme.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Course Catalogue
                  </a>
                </div>
              </div>

              {/* Bachelor's Degree */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-center mb-4 lg:mb-0">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <GraduationCap className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-800">Bachelor's Degree</h2>
                      <p className="text-blue-600 font-semibold">Business Analytics</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span className="font-semibold">2020 - 2024</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-gray-500 mr-2" />
                    <span className="text-gray-700">Universiteit Van Amsterdam</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-700">GPA: <strong>8.27 - Cum Laude</strong></span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Program Highlights</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Foundations of data analysis and statistical methods
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Business intelligence and data-driven decision making
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Programming for data analysis (Python, R, SQL)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Operations research and optimization
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Econometrics and quantitative methods
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Capstone project in business analytics
                    </li>
                  </ul>
                </div>

                <div className="flex justify-center">
                  <a
                    href="https://www.uva.nl/en/programmes/bachelors/business-analytics/study-programme/study-programme.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Course Catalogue
                  </a>
                </div>
              </div>

              {/* KDG - International Business Management */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-purple-500">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-center mb-4 lg:mb-0">
                    <div className="bg-purple-100 p-3 rounded-lg mr-4">
                      <GraduationCap className="w-8 h-8 text-purple-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-800">Transition Period</h2>
                      <p className="text-purple-600 font-semibold">International Business Management</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span className="font-semibold">2019 - 2020</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-gray-500 mr-2" />
                    <span className="text-gray-700">Karel de Grote University of Applied Sciences and Arts, Antwerp, Belgium</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mb-4">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Focus Areas</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      International marketing and finance fundamentals
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Intercultural communication and business ethics
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Management practices and entrepreneurship
                    </li>
                  </ul>
                </div>

                <div className="flex justify-center">
                  <a
                    href="https://www.kdg.be/en/international-business-management"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Programme
                  </a>
                </div>
              </div>

              {/* High School */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-500">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-center mb-4 lg:mb-0">
                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                      <GraduationCap className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-800">High School Diploma</h2>
                      <p className="text-green-600 font-semibold">Liceo Linguistico</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span className="font-semibold">2014 - 2019</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-gray-500 mr-2" />
                    <span className="text-gray-700">Liceo DaVigo Nicoloso, Recco (GE), Italy</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">Program Highlights</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Advanced study of multiple foreign languages
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Literature and cultural studies
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      International communication and linguistics
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Foundation in humanities and social sciences
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
