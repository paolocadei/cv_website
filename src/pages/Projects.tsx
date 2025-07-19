import React, { useState } from 'react';
import { FolderOpen, ExternalLink, Github, Calendar, Code, Mail, X, ChevronRight, Lock, Image } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAccessDenied, setShowAccessDenied] = useState(false);
  const [imageError, setImageError] = useState({});
  const [zoomedImage, setZoomedImage] = useState(null);

  const projects = [
    {
      title: "CustomerDataGPT (IKEA)",
      description: "Developed an LLM-powered RAG model in Python to answer natural language questions about GCP tables, generate SQL queries, and provide insights. Integrated with Slack for seamless user interaction.",
      technologies: ["Python", "GCP", "Slack API/APP", "RAG LLM", "Qdrant (Vector Database)"],
      year: "2023-2024",
      category: "AI/ML Engineering",
      color: "blue",
      githubAccess: false,
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
      technologies: ["Python", "OpenAI o3-mini", "Qdrant", "RAG LLM", "Snowflake", "Agentic Conversational AI"],
      year: "2025",
      category: "AI/ML Engineering",
      color: "green",
      githubAccess: true,
      githubLink: "https://github.com/paolocadei/Spider2.0-Thesis",
      images: [
        "src/images/Master_Thesis/overview.png",
        "src/images/Master_Thesis/question_answering_phase.png"
      ], 
      detailedDescription: {
        overview: "This project addresses the challenge of translating natural language questions into SQL queries on large-scale, enterprise-grade databases. It introduces a lightweight Retrieval-Augmented Generation (RAG) pipeline optimized for the Spider 2.0-Snow benchmark using schema-aware vector search, a dual-agent architecture, and minimal model usage.",
        challenges: [
          "Low accuracy of existing text-to-SQL models on large and complex enterprise schemas",
          "High compute cost and carbon emissions of LLM-heavy pipelines",
          "Handling ambiguous user questions and under-documented schema elements",
          "Avoiding prompt overflow from overly wide or noisy table structures"
        ],
        solution: [
          "Designed a dual-agent loop (Generator + Checker) to generate and validate SQL queries iteratively",
          "Condensed schema using parameterized templates and LLM-generated documentation for under-described tables",
          "Implemented hybrid sparse+dense retrieval with Qdrant to maximize relevant context inclusion",
          "Limited LLM usage to ≤6 calls and ≤3 DB queries per task using o3-mini, slashing compute and emissions"
        ],
        impact: [
          "Achieved 33.24% execution accuracy on Spider 2.0-Snow (74% stratified split), approaching SoTA despite minimal resources",
          "Reduced token usage by ~50% vs competing systems while improving retrieval and verification quality",
          "Created a reproducible, live-database-ready evaluation framework for real-world enterprise text-to-SQL",
          "Demonstrated that schema quality and context selection can rival raw model size in driving performance"
        ],
        technicalDetails: "The system is built in Python, using OpenAI o3-mini for inference. Retrieval uses hybrid sparse/dense embedding storage in Qdrant, and schema elements are compressed and enriched prior to model input. Execution accuracy is computed live on Snowflake using SQL validation with fallback and retry logic. Evaluation is stratified across 405 natural language questions from the Spider 2.0-Snow benchmark."
      }
    },
    {
      title: "Business Intelligence Dashboard",
      description: "Created an interactive executive dashboard in Tableau for KPI monitoring and performance analysis, serving 50+ stakeholders across different departments.",
      technologies: ["Tableau", "SQL", "PostgreSQL", "Data Modeling"],
      year: "2023",
      category: "Business Intelligence",
      color: "orange",
      githubAccess: false,
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
      title: "Web Scraping Framework",
      description: "Built a robust web scraping framework for real estate data collection, handling dynamic websites and large-scale data extraction.",
      technologies: ["Python", "Scrapy", "Selenium", "BeautifulSoup"],
      year: "2022",
      category: "Data Collection",
      color: "red",
      githubAccess: true,
      githubLink: "https://github.com/paolocadei/REIT-s-Scrapers",
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
    },
    {
    title: "Reinforcement Learning (Small Projects)",
    description: "Implemented and compared RL algorithms like Q-Learning, SARSA, and Monte Carlo to solve OpenAI Gym environments such as Cliff Walking and Taxi Driver.",
    technologies: ["Python", "NumPy", "OpenAI Gym", "Matplotlib", "RL Algorithms"],
    year: "2024",
    category: "Reinforcement Learning",
    color: "purple",
    githubAccess: true,
    githubLink: "https://github.com/paolocadei/reinforcement-learning-experiments",
    detailedDescription: {
      overview: "This project explores foundational reinforcement learning techniques applied to two classic control problems: Cliff Walking and Taxi Driver. Implemented and compared on-policy and off-policy algorithms with focus on value-based learning and exploration-exploitation trade-offs.",
      challenges: [
        "Tuning exploration parameters (ε, decay rates) for stable learning",
        "Visualizing policy convergence in discrete state-action spaces",
        "Avoiding divergence in off-policy methods without proper update control",
        "Balancing fairness in episodic sampling for Monte Carlo methods"
      ],
      solution: [
        "Implemented tabular versions of SARSA, Q-learning, and Monte Carlo control from scratch",
        "Used ε-greedy and decayed ε strategies for exploration control",
        "Tracked cumulative reward and policy evolution over episodes",
        "Built visual heatmaps to compare learned policies across algorithms"
      ],
      impact: [
        "Demonstrated clear differences in stability and convergence speed between SARSA and Q-learning",
        "Validated that Monte Carlo control performs well with sufficient episodes but slower convergence",
        "Gained intuition on algorithmic bias from on-policy vs off-policy learning",
        "Created reproducible, well-documented experiments for teaching and analysis"
      ],
      technicalDetails: "Built in Python using NumPy and OpenAI Gym's built-in `CliffWalking-v0` and `Taxi-v3` environments. Results visualized using Matplotlib. All RL logic implemented manually to avoid reliance on high-level libraries like Stable Baselines. Each algorithm includes logging, evaluation scripts, and reproducibility seeds."
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
    setImageError({});
    setZoomedImage(null);
  };

  const openImageZoom = (imagePath, event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('Opening zoom for:', imagePath); // Debug log
    setZoomedImage(imagePath);
  };

  const closeImageZoom = (event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log('Closing zoom'); // Debug log
    setZoomedImage(null);
  };

  const handleGithubClick = (project) => {
    if (!project.githubAccess) {
      setShowAccessDenied(true);
      setTimeout(() => setShowAccessDenied(false), 3000);
    } else {
      window.open(project.githubLink, '_blank');
    }
  };

  const handleImageError = (imagePath) => {
    setImageError(prev => ({
      ...prev,
      [imagePath]: true
    }));
  };

  // Get images for a project (handles both single image and multiple images)
  const getProjectImages = (project) => {
    if (project.images && Array.isArray(project.images)) {
      return project.images;
    } else if (project.image) {
      return [project.image];
    }
    return [];
  };

  // Handle keyboard events for image zoom
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        if (zoomedImage) {
          closeImageZoom();
        } else if (selectedProject) {
          closeProjectModal();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [zoomedImage, selectedProject]);

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
          <div className="bg-white rounded-xl max-w-5xl max-h-[90vh] w-full overflow-hidden">
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
                {/* Project Images */}
                {getProjectImages(selectedProject).length > 0 && (
                  <section>
                    <h3 className="text-xl font-bold text-slate-800 mb-4">Project Preview</h3>
                    <div className={`grid gap-4 ${getProjectImages(selectedProject).length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                      {getProjectImages(selectedProject).map((imagePath, index) => (
                        <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-gray-50 cursor-zoom-in group">
                          {!imageError[imagePath] ? (
                            <div className="relative">
                              <img 
                                src={imagePath} 
                                alt={`${selectedProject.title} preview ${index + 1}`}
                                className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-300"
                                style={{ maxHeight: 'none', height: 'auto' }}
                                onClick={(e) => openImageZoom(imagePath, e)}
                                onError={() => handleImageError(imagePath)}
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                                <div className="bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  Click to zoom
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="w-full h-64 flex items-center justify-center bg-gray-100">
                              <div className="text-center text-gray-500">
                                <Image className="w-12 h-12 mx-auto mb-2 opacity-50" />
                                <p>Image not available</p>
                                <p className="text-sm">({imagePath})</p>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </section>
                )}

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

      {/* Image Zoom Modal */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-[60] flex items-center justify-center p-4 cursor-zoom-out"
          onClick={closeImageZoom}
        >
          <div className="relative max-w-full max-h-full">
            <button 
              onClick={(e) => closeImageZoom(e)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src={zoomedImage} 
              alt="Zoomed view"
              className="max-w-full max-h-[90vh] object-contain shadow-2xl"
              style={{ imageRendering: 'auto' }}
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg text-sm">
              Press ESC or click outside to close
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;