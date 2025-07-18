import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Professional Experience</h1>
            <p className="text-xl text-gray-600">My Career Journey in Data Science & Analytics</p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            
            {/* Business Intelligence Role */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-orange-500">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start mb-4 lg:mb-0">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4 mt-1">
                    <Briefcase className="w-8 h-8 text-orange-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800">Business Intelligence</h2>
                    <p className="text-orange-600 font-semibold text-lg">YOKOY - TRAVELPERK</p>
                    <div className="flex items-center text-gray-600 mt-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>June 2024 - Current</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Role Description</h3>
                <p className="text-gray-700 mb-4">
                  Working as part of the cross-functional Business Intelligence team, supporting multiple departments 
                  with a particular focus on Marketing and HR operations.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Key Responsibilities</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Working as part of the cross-functional <strong>Business Intelligence</strong> team, supporting multiple departments with a particular focus on Marketing and HR
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Maintaining and developing data pipelines using <strong>dbt</strong> and <strong>PostgreSQL</strong>, ensuring efficient data transformation and integration
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Optimising data workflows to improve reliability, scalability, and performance in <strong>dbt</strong>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Designing, building, and maintaining reporting and interactive dashboards in <strong>Tableau</strong>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Creating and maintaining comprehensive <strong>documentation</strong> for data models, pipelines, and <strong>dashboards</strong> to ensure transparency and knowledge sharing
                  </li>
                </ul>
              </div>
            </div>

            {/* Data Engineer Internship */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start mb-4 lg:mb-0">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4 mt-1">
                    <Briefcase className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800">Data Engineer Internship</h2>
                    <p className="text-blue-600 font-semibold text-lg">INGKA (IKEA DIGITAL)</p>
                    <div className="flex items-center text-gray-600 mt-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Sep 2023 - June 2024</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Role Description</h3>
                <p className="text-gray-700 mb-4">
                  Worked as part of the Customer DataTeam on multiple innovative projects involving cloud infrastructure, 
                  machine learning, and data pipeline automation.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Key Projects & Achievements</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <strong>dbt + BigQuery</strong> setup (using <strong>Terraform, GCP, CI/CD, YAML, Docker</strong>)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Designed and implemented an <strong>LLM-powered RAG</strong> model using <strong>Python</strong> to handle inquiries about <strong>GCP</strong> tables. The model can interpret natural language questions, provide insights into table contents, and generate <strong>SQL</strong> queries for seamless and intuitive data interaction
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Retrieved and processed data using <strong>dbt</strong> and <strong>BigQuery</strong>, supporting efficient model creation and analytics
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Developed a <strong>SQL linting</strong> script utilizing <strong>SQLFluff</strong>, automating code formatting and improving interpretability through terminal commands
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Worked with various Google components, including <strong>Firestore, Vertex AI</strong>, and <strong>Generative Studio AI</strong>
                  </li>
                </ul>
              </div>
            </div>

            {/* Junior Data Engineer */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-500">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start mb-4 lg:mb-0">
                  <div className="bg-green-100 p-3 rounded-lg mr-4 mt-1">
                    <Briefcase className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800">Junior Data Engineer</h2>
                    <p className="text-green-600 font-semibold text-lg">KR&A Real Estate DataAnalysis FinTech Start-Up</p>
                    <div className="flex items-center text-gray-600 mt-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Oct 2021 - Jan 2023</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Role Description</h3>
                <p className="text-gray-700 mb-4">
                  Supporting decision-making, providing insights and up-to-date data in the Real Estate sector. 
                  Focused on data collection, processing, and analysis for market intelligence.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Main Responsibilities</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Data Collection/Preparation</h4>
                    <ul className="space-y-2 text-gray-700 ml-4">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <strong>Web Scraping with Python</strong> using <strong>Scrapy, Selenium</strong> and <strong>BeautifulSoup</strong> (also on dynamic websites)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Data Processing/Analysis</h4>
                    <ul className="space-y-2 text-gray-700 ml-4">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Analysed complex, high-volume, high-dimensionality data from varying sources using <strong>Python</strong> and <strong>SQL</strong>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Identified and evaluated the quality of different data sources
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Career Summary */}
          <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Career Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">3+</div>
                <div className="text-gray-700 font-semibold">Years Experience</div>
                <div className="text-sm text-gray-600 mt-1">Data Engineering & BI</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                <div className="text-gray-700 font-semibold">Companies</div>
                <div className="text-sm text-gray-600 mt-1">From Startup to Enterprise</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
                <div className="text-gray-700 font-semibold">Technologies</div>
                <div className="text-sm text-gray-600 mt-1">Mastered & Applied</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experience;