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

                {/* rest of the section remains unchanged */}
              </div>

              {/* Bachelor's Degree */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-center mb-4 lg:mb-0">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <GraduationCap className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-2xl font-bold text-slate-800 text-left">Bachelor's Degree</h2>
                      <p className="text-blue-600 font-semibold text-left">Business Analytics</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span className="font-semibold">2020 - 2024</span>
                  </div>
                </div>
              </div>

              {/* KDG - International Business Management */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-purple-500">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-center mb-4 lg:mb-0">
                    <div className="bg-purple-100 p-3 rounded-lg mr-4">
                      <GraduationCap className="w-8 h-8 text-purple-600" />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-2xl font-bold text-slate-800 text-left">Transition Period</h2>
                      <p className="text-purple-600 font-semibold text-left">International Business Management</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span className="font-semibold">2019 - 2020</span>
                  </div>
                </div>
              </div>

              {/* High School */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-500">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-center mb-4 lg:mb-0">
                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                      <GraduationCap className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="flex flex-col">
                      <h2 className="text-2xl font-bold text-slate-800 text-left">High School Diploma</h2>
                      <p className="text-green-600 font-semibold text-left">Liceo Linguistico</p>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span className="font-semibold">2014 - 2019</span>
                  </div>
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