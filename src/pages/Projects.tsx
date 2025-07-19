import React, { useState } from 'react';
import { FolderOpen, ExternalLink, Github, Calendar, Code, Mail, X, ChevronRight, Lock } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAccessDenied, setShowAccessDenied] = useState(false);

  const projects = [
    {
      title: "CustomerDataGPT (IKEA)",
      description: "Developed an LLM-powered RAG model in Python to answer natural language questions about GCP tables, generate SQL queries, and provide insights. Integrated with Slack for seamless user interaction.",
      technologies: ["Python", "GCP", "Slack API/APP", "RAG LLM", "Qdrant (Vector Database)"],
      year: "2023-2024",
      category: "AI/ML Engineering",
      color: "blue",
      githubAccess: false, // No access to this code
      detailedDescription: {
        overview: "CustomerDataGPT is an innovative LLM-powered application designed to democratize data access at IKEA by allowing non-technical stakeholders to query complex databases using natural language. The system leverages Retrieval-Augmented Generation (RAG) to provide accurate, contextual responses about customer data stored in Google Cloud Platform.",
        challenges: [
          "Complex schema mapping for natural language understanding",
          "Maintaining data privacy and security compliance",
          "Integrating seamlessly with existing Slack workflows",
          "Handling ambiguous queries and providing meaningful suggestions"
        ],
        solution: [
          "Implemented a sophisticated RAG architecture using Qdrant vector database for semantic search",
          "Created a robust SQL query generation system with validation and safety checks",
          "Built custom Slack integration with interactive UI components",
          "Developed context-aware response system that learns from user interactions"
        ],
        impact: [
          "Reduced data query response time from hours to minutes",
          "Enabled 200+ non-technical users to access customer insights independently",
          "Improved decision-making speed by 60% across multiple departments",
          "Achieved 95% query accuracy rate with continuous learning improvements"
        ],
        technicalDetails: "Built using Python with LangChain framework, deployed on GCP Cloud Run with auto-scaling capabilities. Utilized Vertex AI for LLM inference and Qdrant for vector embeddings storage. Implemented comprehensive logging and monitoring using Cloud Logging and Datadog."
      }
    },
    {
      title: "A Lean Retrieval-Augmented LLM Pipeline for Enterprise-Scale Text-to-SQL",
      description: "Built a cost-efficient, agentic LLM pipeline for the Spider 2.0-Snow benchmark using retrieval-augmented generation (RAG), schema compression, and hybrid vector search to translate natural language into SQL with strong performance and minimal compute.",
      technologies: ["Python", "OpenAI o3-mini", "Qdrant", "RAG LLM", "Snowflake"],
      year: "2023",
      category: "Data Science",
      color: "green",
      githubAccess: true, // Public access
      detailedDescription: {
        overview: "A comprehensive machine learning project that predicts real estate prices in Amsterdam by analyzing market trends, property features, and neighborhood characteristics. The system combines web scraping, feature engineering, and advanced ML algorithms to deliver accurate price predictions.",
        challenges: [
          "Dynamic website structures requiring adaptive scraping strategies",
          "Handling missing and inconsistent data from multiple sources",
          "Feature selection from 100+ potential variables",
          "Model overfitting due to limited historical data"
        ],
        solution: [
          "Developed robust web scraping framework with rotating proxies and error handling",
          "Implemented advanced data cleaning and imputation techniques",
          "Used recursive feature elimination and correlation analysis for feature selection",
          "Applied cross-validation and regularization techniques to prevent overfitting"
        ],
        impact: [
          "Achieved 85% prediction accuracy on test dataset",
          "Reduced price estimation error margin by 40% compared to traditional methods",
          "Created insights into key price-driving factors in Amsterdam real estate market",
          "Developed reusable framework for other European cities"
        ],
        technicalDetails: "Utilized ensemble methods including Random Forest, XGBoost, and Gradient Boosting. Implemented feature engineering pipeline with polynomial features and interaction terms. Used Scrapy for large-scale data collection with custom middleware for handling JavaScript-rendered content."
      }
    },
    {
      title: "Data Pipeline Automation",
      description: "Designed and implemented an automated ETL pipeline using Apache Airflow and dbt for processing daily sales data from multiple sources.",
      technologies: ["dbt", "Apache Airflow", "PostgreSQL", "Docker"],
      year: "2024",
      category: "Data Engineering",
      color: "purple",
      githubAccess: false, // No access to this code
      detailedDescription: {
        overview: "A scalable, automated data pipeline solution that processes daily sales data from multiple sources, transforms it using dbt, and orchestrates workflows with Apache Airflow. The system ensures data quality, reliability, and timely delivery of business-critical insights.",
        challenges: [
          "Managing complex dependencies between data sources",
          "Ensuring data quality and consistency across transformations",
          "Handling varying data volumes and processing times",
          "Implementing robust error handling and recovery mechanisms"
        ],
        solution: [
          "Designed modular dbt models with clear lineage and documentation",
          "Implemented Airflow DAGs with dynamic task generation and smart retries",
          "Created comprehensive data quality tests and monitoring alerts",
          "Built containerized deployment with Docker for consistent environments"
        ],
        impact: [
          "Reduced manual data processing time from 8 hours to 30 minutes",
          "Improved data accuracy by 99.5% through automated quality checks",
          "Enabled real-time business intelligence reporting",
          "Decreased data pipeline maintenance overhead by 70%"
        ],
        technicalDetails: "Built with Apache Airflow 2.0+ using TaskGroups and XComs for complex workflows. Implemented dbt with Jinja templating for dynamic SQL generation. Used PostgreSQL with partitioning for optimal performance and Docker Compose for local development."
      }
    },
    {
      title: "Business Intelligence Dashboard",
      description: "Created an interactive executive dashboard in Tableau for KPI monitoring and performance analysis, serving 50+ stakeholders across different departments.",
      technologies: ["Tableau", "SQL", "PostgreSQL", "Data Modeling"],
      year: "2023",
      category: "Business Intelligence",
      color: "orange",
      githubAccess: false, // No access to this code
      detailedDescription: {
        overview: "A comprehensive business intelligence solution that provides real-time visibility into key performance indicators across multiple departments. The dashboard serves as a central hub for executive decision-making and departmental performance tracking.",
        challenges: [
          "Integrating data from disparate systems and departments",
          "Creating intuitive visualizations for diverse user personas",
          "Ensuring real-time data accuracy and consistency",
          "Balancing detailed insights with executive-level summaries"
        ],
        solution: [
          "Designed star schema data model for optimal query performance",
          "Created role-based dashboard views with personalized KPI sets",
          "Implemented real-time data connections with automated refresh schedules",
          "Built interactive drill-down capabilities for detailed analysis"
        ],
        impact: [
          "Reduced executive reporting preparation time by 80%",
          "Improved cross-departmental visibility and alignment",
          "Enabled data-driven decision making for 50+ stakeholders",
          "Increased meeting efficiency with pre-built analytical insights"
        ],
        technicalDetails: "Built using Tableau Server with custom SQL connectors to PostgreSQL. Implemented row-level security for data governance. Created calculated fields with complex business logic and custom color palettes for brand consistency."
      }
    },
    {
      title: "LLM-Powered Data Query System",
      description: "Developed an intelligent RAG model that interprets natural language questions and generates SQL queries for seamless database interaction.",
      technologies: ["Python", "LLM", "RAG", "GCP", "Vertex AI"],
      year: "2024",
      category: "AI/ML",
      color: "indigo",
      githubAccess: true, // Public access
      detailedDescription: {
        overview: "An advanced natural language to SQL system that bridges the gap between business users and complex databases. Using cutting-edge LLM technology and RAG architecture, the system enables intuitive data exploration through conversational interfaces.",
        challenges: [
          "Mapping natural language to complex SQL join operations",
          "Handling schema evolution and maintaining query accuracy",
          "Ensuring secure and efficient query execution",
          "Managing context and maintaining conversation flow"
        ],
        solution: [
          "Implemented semantic schema mapping using vector embeddings",
          "Built query validation and optimization layer for safety",
          "Created conversational memory system for context preservation",
          "Developed feedback loop for continuous model improvement"
        ],
        impact: [
          "Reduced average query formulation time from 20 minutes to 30 seconds",
          "Enabled 150+ business users to access data independently",
          "Achieved 92% query success rate with natural language inputs",
          "Decreased IT support tickets for data requests by 75%"
        ],
        technicalDetails: "Leveraged Vertex AI's PaLM 2 model with custom fine-tuning on domain-specific queries. Implemented using LangChain framework with custom chains for query generation and validation. Deployed on GCP Cloud Run with automatic scaling."
      }
    },
    {
      title: "Web Scraping Framework",
      description: "Built a robust web scraping framework for real estate data collection, handling dynamic websites and large-scale data extraction.",
      technologies: ["Python", "Scrapy", "Selenium", "BeautifulSoup"],
      year: "2022",
      category: "Data Collection",
      color: "red",
      githubAccess: true, // Public access
      detailedDescription: {
        overview: "A comprehensive web scraping framework designed for large-scale data collection from dynamic real estate websites. The system handles complex JavaScript rendering, anti-bot measures, and provides reliable data extraction capabilities.",
        challenges: [
          "Bypassing sophisticated anti-bot detection systems",
          "Handling dynamic content and JavaScript-heavy websites",
          "Managing large-scale concurrent scraping operations",
          "Maintaining data consistency across different website structures"
        ],
        solution: [
          "Implemented rotating proxy pools with intelligent IP management",
          "Combined Scrapy with Selenium for JavaScript-rendered content",
          "Built adaptive parsing logic for varying website structures",
          "Created comprehensive error handling and retry mechanisms"
        ],
        impact: [
          "Successfully collected 2M+ property listings across 15 major cities",
          "Achieved 99.8% uptime with robust error handling",
          "Reduced data collection costs by 60% compared to third-party services",
          "Created reusable framework adopted by 3 other projects"
        ],
        technicalDetails: "Built with Scrapy framework using custom middlewares for proxy rotation and user-agent spoofing. Integrated Selenium with headless Chrome for JavaScript execution. Implemented distributed scraping using Scrapyd for horizontal scaling."
      }
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "from-blue-50 to-blue-100 border-blue-500 text-blue-600",
      green: "from-green-50 to-green-100 border-green-500 text-green-600",
      purple: "from-purple-50 to-purple-100 border-purple-500 text-purple-600",
      orange: "from-orange-50 to-orange-100 border-orange-500 text-orange-600",
      indigo: "from-indigo-50 to-indigo-100 border-indigo-500 text-indigo-600",
      red: "from-red-50 to-red-100 border-red-500 text-red-600"
    };
    return colorMap[color] || colorMap.blue;
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const handleGithubClick = (project) => {
    if (!project.githubAccess) {
      setShowAccessDenied(true);
      setTimeout(() => setShowAccessDenied(false), 3000);
    } else {
      // Open GitHub link - you can customize this URL
      window.open(`https://github.com/paolocadei/${project.title.toLowerCase().replace(/\s+/g, '-')}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Projects Portfolio</h1>
            <p className="text-xl text-gray-600">Showcasing my work</p>
          </div>

          {/* Access Denied Toast */}
          {showAccessDenied && (
            <div className="fixed top-4 right-4 z-50 bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg shadow-lg flex items-center animate-bounce">
              <Lock className="w-5 h-5 mr-2" />
              <span className="font-semibold">Sorry... Access denied for permission reasons</span>
            </div>
          )}

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
                      <button 
                        onClick={() => handleGithubClick(project)}
                        className={`p-2 transition-colors ${
                          project.githubAccess 
                            ? 'text-gray-400 hover:text-orange-600' 
                            : 'text-gray-300 hover:text-red-500'
                        }`}
                        title={project.githubAccess ? 'View source code' : 'Access restricted'}
                      >
                        {project.githubAccess ? <Github className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
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
                    <button 
                      onClick={() => openProjectModal(project)}
                      className="text-orange-600 font-semibold hover:text-orange-700 transition-colors flex items-center"
                    >
                      <span>View Details</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
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
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText('paolo.cadei2001@gmail.com');
                  alert('Email address copied to clipboard!');
                }}
                className="bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-800 transition-colors flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Copy Email
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] w-full overflow-hidden">
            {/* Modal Header */}
            <div className={`bg-gradient-to-r ${getColorClasses(selectedProject.color).split(' ')[0]} ${getColorClasses(selectedProject.color).split(' ')[1]} p-6`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`bg-white p-3 rounded-lg mr-4`}>
                    <FolderOpen className={`w-8 h-8 ${getColorClasses(selectedProject.color).split(' ')[2]}`} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800">{selectedProject.title}</h2>
                    <div className="flex items-center text-gray-600 mt-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{selectedProject.year}</span>
                      <span className="mx-2">•</span>
                      <span>{selectedProject.category}</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={closeProjectModal}
                  className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="overflow-y-auto max-h-[calc(90vh-120px)] p-6">
              <div className="space-y-8">
                {/* Overview */}
                <section>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Project Overview</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedProject.detailedDescription.overview}</p>
                </section>

                {/* Technologies */}
                <section>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Challenges */}
                <section>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Key Challenges</h3>
                  <ul className="space-y-3">
                    {selectedProject.detailedDescription.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 bg-red-500`}></div>
                        <span className="text-gray-700">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Solution */}
                <section>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Solutions Implemented</h3>
                  <ul className="space-y-3">
                    {selectedProject.detailedDescription.solution.map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 bg-green-500`}></div>
                        <span className="text-gray-700">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Impact */}
                <section>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Impact & Results</h3>
                  <ul className="space-y-3">
                    {selectedProject.detailedDescription.impact.map((impact, index) => (
                      <li key={index} className="flex items-start">
                        <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 bg-blue-500`}></div>
                        <span className="text-gray-700">{impact}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Technical Details */}
                <section>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Technical Implementation</h3>
                  <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
                    {selectedProject.detailedDescription.technicalDetails}
                  </p>
                </section>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                  <button 
                    onClick={() => handleGithubClick(selectedProject)}
                    className={`flex items-center justify-center px-6 py-3 rounded-lg transition-colors ${
                      selectedProject.githubAccess 
                        ? 'bg-gray-800 text-white hover:bg-gray-900' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!selectedProject.githubAccess}
                  >
                    {selectedProject.githubAccess ? <Github className="w-5 h-5 mr-2" /> : <Lock className="w-5 h-5 mr-2" />}
                    {selectedProject.githubAccess ? 'View Source Code' : 'Access Restricted'}
                  </button>
                  <button className="flex items-center justify-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;