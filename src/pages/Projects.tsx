import React from 'react';
import { Link } from 'react-router-dom';
import { FolderOpen, ExternalLink, Github, Calendar, Code, Mail } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Customer Segmentation Analysis",
      description: "Developed a comprehensive customer segmentation model using K-means clustering and RFM analysis for an e-commerce dataset with 500k+ records.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Tableau"],
      year: "2024",
      category: "Machine Learning",
      color: "blue"
    },
    {
      title: "Real Estate Price Prediction",
      description: "Built a machine learning model to predict Amsterdam housing prices using web-scraped data, achieving 85% accuracy with Random Forest regression.",
      technologies: ["Python", "Scrapy", "XGBoost", "BeautifulSoup"],
      year: "2023",
      category: "Data Science",
      color: "green"
    },
    {
      title: "Data Pipeline Automation",
      description: "Designed and implemented an automated ETL pipeline using Apache Airflow and dbt for processing daily sales data from multiple sources.",
      technologies: ["dbt", "Apache Airflow", "PostgreSQL", "Docker"],
      year: "2024",
      category: "Data Engineering",
      color: "purple"
    },
    {
      title: "Business Intelligence Dashboard",
      description: "Created an interactive executive dashboard in Tableau for KPI monitoring and performance analysis, serving 50+ stakeholders across different departments.",
      technologies: ["Tableau", "SQL", "PostgreSQL", "Data Modeling"],
      year: "2023",
      category: "Business Intelligence",
      color: "orange"
    },
    {
      title: "LLM-Powered Data Query System",
      description: "Developed an intelligent RAG model that interprets natural language questions and generates SQL queries for seamless database interaction.",
      technologies: ["Python", "LLM", "RAG", "GCP", "Vertex AI"],
      year: "2024",
      category: "AI/ML",
      color: "indigo"
    },
    {
      title: "Web Scraping Framework",
      description: "Built a robust web scraping framework for real estate data collection, handling dynamic websites and large-scale data extraction.",
      technologies: ["Python", "Scrapy", "Selenium", "BeautifulSoup"],
      year: "2022",
      category: "Data Collection",
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-50 to-blue-100 border-blue-500 text-blue-600",
      green: "from-green-50 to-green-100 border-green-500 text-green-600",
      purple: "from-purple-50 to-purple-100 border-purple-500 text-purple-600",
      orange: "from-orange-50 to-orange-100 border-orange-500 text-orange-600",
      indigo: "from-indigo-50 to-indigo-100 border-indigo-500 text-indigo-600",
      red: "from-red-50 to-red-100 border-red-500 text-red-600"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Projects Portfolio</h1>
            <p className="text-xl text-gray-600">Showcasing my data science and engineering work</p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className={`h-2 bg-gradient-to-r ${getColorClasses(project.color).split(' ')[0]} ${getColorClasses(project.color).split(' ')[1]}`}></div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`bg-gradient-to-r ${getColorClasses(project.color).split(' ')[0]} ${getColorClasses(project.color).split(' ')[1]} p-3 rounded-lg mr-4`}>
                        <FolderOpen className={`w-6 h-6 ${getColorClasses(project.color).split(' ')[2]}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{project.year}</span>
                          <span className="mx-2">•</span>
                          <span>{project.category}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-400 hover:text-orange-600 transition-colors">
                        <Github className="w-5 h-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-orange-600 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-500">
                      <Code className="w-4 h-4 mr-1" />
                      <span>{project.technologies.length} Technologies</span>
                    </div>
                    <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors flex items-center">
                      <span>View Details</span>
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Categories */}
          <div className="bg-white rounded-xl shadow-lg p-8 mt-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Project Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: "Machine Learning", count: 2, color: "blue" },
                { name: "Data Engineering", count: 2, color: "purple" },
                { name: "Business Intelligence", count: 1, color: "orange" },
                { name: "AI/ML", count: 1, color: "indigo" },
                { name: "Data Science", count: 1, color: "green" },
                { name: "Web Scraping", count: 1, color: "red" }
              ].map((category, index) => (
                <div key={index} className={`text-center p-4 bg-gradient-to-br ${getColorClasses(category.color).split(' ')[0]} ${getColorClasses(category.color).split(' ')[1]} rounded-lg`}>
                  <div className={`text-2xl font-bold ${getColorClasses(category.color).split(' ')[2]} mb-1`}>
                    {category.count}
                  </div>
                  <div className="text-sm font-semibold text-gray-700">
                    {category.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-8 mt-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Interested in My Work?</h2>
            <p className="text-xl mb-6 opacity-90">
              I'm always excited to discuss new projects and opportunities in data science and engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://github.com/paolocadei"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <Github className="w-5 h-5 mr-2" />
                View GitHub
              </a>
              <a 
                href="mailto:paolo.cadei2001@gmail.com"
                className="bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-800 transition-colors flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;