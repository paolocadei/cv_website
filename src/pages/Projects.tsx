import React, { useState } from 'react';
import { FolderOpen, ExternalLink, Github, Calendar, Code, Mail, X, ChevronRight, Lock, Image } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAccessDenied, setShowAccessDenied] = useState(false);
  const [imageError, setImageError] = useState({});
  const [zoomedImage, setZoomedImage] = useState(null);

  const projects = [
    {
      title: "UTM Campaign Builder",
      description: "Internal Streamlit application for generating UTM-compliant campaign names with linked campaign codes (4-digit code paired with MD5 hash). Solved naming convention inconsistencies that previously resulted in poor campaign attribution data.",
      technologies: ["Python", "Streamlit", "Bash", "OrbStack", "Snowflake", "dbt", "Docker"],
      year: "2024-2025",
      category: "Data & Backend Engineering",
      color: "green",
      githubAccess: false,
      detailedDescription: {
        overview: "The UTM Campaign Builder is a production-grade Streamlit application that solves a critical data quality issue: naming convention inconsistencies that resulted in untrackable campaigns and poor data in Looker. The system uses dropdown-based field selection to enforce strict naming conventions while generating linked campaign codes (4-digit identifier + MD5 hash) that preserve all campaign metadata for enrichment in data pipelines.",
        challenges: [
          "Teams not following UTM naming conventions, resulting in campaigns with incomplete or incorrect metadata",
          "Unable to track and enrich campaign data in Looker due to inconsistent naming",
          "Need to encode campaign metadata in a compact, reversible format for URL compatibility",
          "Integrating campaign data seamlessly with Snowflake and dbt pipelines",
          "Managing Docker containerization and local development environment with OrbStack"
        ],
        solution: [
          "Designed dropdown-based UI for controlled campaign attribute selection, enforcing naming standards",
          "Implemented linked campaign code system: 4-digit identifier paired with MD5 hash of campaign fields for data integrity",
          "Created dbt pipelines to automatically decode and enrich campaign data within Snowflake for analytics",
          "Containerized the entire application with Docker, using OrbStack for local development environment",
          "Built data validation layer to ensure every campaign is properly tracked and searchable in Looker"
        ],
        impact: [
          "Eliminated manual UTM creation errors by 100% through enforced naming standards",
          "Recovered and properly attributed previously untrackable campaign data in Looker",
          "Enabled stakeholders to see complete campaign information and performance metrics",
          "Improved data consistency across Marketing, Analytics, and Product teams",
          "Reduced campaign metadata enrichment time from manual lookup to automated dbt execution",
          "Created audit trail of all campaign attributes through linked campaign codes"
        ],
        technicalDetails: "Built with Python and Streamlit for the frontend interface. Campaign codes use a two-part system: a 4-digit identifier for user readability plus an MD5 hash of all campaign fields for data integrity and recovery. Backend runs in Docker containers (managed via OrbStack for local development) with Snowflake service account authentication. Campaign data flows into Snowflake where dbt models automatically decode and enrich the campaign records for consumption in Looker and Tableau dashboards. Bash scripts handle deployment and environment configuration."
      }
    },
    {
      title: "Expense Tracker for Family Business",
      description: "Full-stack expense management platform for family business with automated receipt scanning using Gemini AI, multi-currency support, and integration with Google Sheets and Drive for seamless financial reporting.",
      technologies: ["Python", "Gemini AI", "Google Sheets API", "Google Drive API", "GCP", "Authentication"],
      year: "2024-2025",
      category: "Full Stack Development",
      color: "blue",
      githubAccess: false,
      detailedDescription: {
        overview: "The Expense Tracker is a comprehensive financial management solution built for a family business to streamline cash flow tracking and receipt management. It combines positive and negative cash flow recording with intelligent receipt digitization using Google's Gemini AI, enabling automated extraction of payment amounts and status. All data is stored in Google Sheets with receipt images automatically backed up to Google Drive, creating a centralized, auditable financial record.",
        challenges: [
          "Accurately extracting payment amounts from diverse receipt formats using computer vision",
          "Handling partial payments and determining payment status automatically",
          "Managing multi-currency transactions with real-time conversion rates",
          "Securing API credentials for GCP services while maintaining ease of use",
          "Integrating multiple Google APIs (Sheets, Drive) into a single seamless workflow",
          "Ensuring data consistency between the application and Google Sheets"
        ],
        solution: [
          "Integrated Gemini AI vision capabilities to automatically detect and extract payment amounts from receipt images",
          "Implemented payment status logic to determine if expenses are fully paid, partially paid, or pending",
          "Built real-time currency conversion using live exchange rate APIs for multiple currency pairs",
          "Created secure GCP service account authentication with encrypted credential management",
          "Developed dual-API integration: Google Sheets API for financial records, Google Drive API for receipt storage",
          "Implemented login security page with role-based access control for family business users"
        ],
        impact: [
          "Reduced receipt processing time from 15+ minutes per receipt to <30 seconds per image",
          "Automated 95% of manual data entry for expense tracking, reducing human error",
          "Provided real-time financial visibility with automatic Google Sheets updates",
          "Eliminated need for physical receipt storage with automated Google Drive backup",
          "Enabled multi-currency expense tracking without manual conversion calculations",
          "Created auditable financial trail with receipt images linked to every transaction"
        ],
        technicalDetails: "Backend developed in Python with Flask for API routes. Computer vision powered by Google's Gemini 1.5 Flash API for receipt analysis. Google Sheets API handles all financial record storage with automatic formatting and calculations. Google Drive API manages receipt image storage with folder organization by date and category. GCP service account authentication with encrypted key management ensures security. Currency conversion integrated with live exchange rate feeds. Frontend includes secure login system with role-based access for different family members. Automated Google Sheets formulas calculate totals, balances, and generate monthly financial summaries."
      }
    },
    {
      title: "CustomerDataGPT (IKEA)",
      description: "Developed an LLM-powered RAG model in Python to answer natural language questions about GCP tables, generate SQL queries, and provide insights. Integrated with Slack for seamless user interaction.",
      technologies: ["Python", "GCP", "Slack API/APP", "RAG LLM", "Qdrant (Vector Database)"],
      year: "2023-2024",
      category: "AI/ML Engineering",
      color: "blue",
      githubAccess: false,
      detailedDescription: {
        overview: "CustomerDataGPT is an innovative LLM-powered application designed to democratize data access at IKEA by allowing non-technical stakeholders to query complex databases using natural language. The system leverages Retrieval-Augmented Generation (RAG) to provide accurate, contextual responses about customer data stored in Google Cloud Platform. The user can chat with the model using Slack as an interface.",
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
          "Reduced issues with siloed information and long waiting time when data location is not known"
        ],
        technicalDetails: "Built using Python, deployed on GCP Cloud Run with auto-scaling capabilities. Utilized Vertex AI for LLM inference and Qdrant for vector embeddings storage. Used Slack as interface."
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
        "CV/images/Master_Thesis/overview.png",
        "CV/images/Master_Thesis/question_answering_phase.png"
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
      title: "Geolocation Guesser AI",
      description: "Developed a CNN-based AI system inspired by GeoGuessr to predict the subregion of an image's origin using Google Street View data. Integrated explainable AI for visual interpretability, leveraging Grad-CAM and Gemini for enhanced understanding of predictions.",
      technologies: [
        "Python",
        "PyTorch",
        "ResNet (ResNet18/50/101)",
        "Grad-CAM",
        "Google Street View API",
        "Gemini AI"
      ],
      year: "2024",
      category: "AI/ML Engineering",
      color: "green",
      githubAccess: true,
      githubLink: "https://github.com/paolocadei/Geolocation-Guesser-AI",
      detailedDescription: {
        overview: "Geolocation Guesser AI is a deep learning project designed to identify the subregion of the world where a given image was captured, using convolutional neural networks trained on a diverse set of street view images. The project aims to mimic the challenge of the game GeoGuessr, providing interpretable and accurate predictions by highlighting the key visual features driving the model's decisions.",
        challenges: [
          "Handling significant class imbalance across 126 countries and subregions",
          "Extracting meaningful features from diverse and unstructured street view images",
          "Ensuring interpretability of model predictions for trust and validation",
          "Improving accuracy in underrepresented regions with limited training data"
        ],
        solution: [
          "Utilized transfer learning with ResNet variants (ResNet18, ResNet50, ResNet101) fine-tuned for geolocation tasks",
          "Implemented extensive data augmentation (flipping, skewing, brightness changes) to address class imbalance",
          "Applied Grad-CAM for interpretability, visualizing influential image regions",
          "Integrated automated object recognition (Gemini 1.5 Flash) to analyze key regions highlighted by Grad-CAM"
        ],
        impact: [
          "Achieved 47.56% test accuracy and 73.01% top-3 accuracy on a 25,000-image international dataset",
          "Enabled interpretable predictions by identifying visual cues (e.g., vegetation, signage, buildings) relevant to specific geographies",
          "Established a reproducible AI pipeline for future extensions, such as text recognition and fine-grained location prediction"
        ],
        technicalDetails: "Built in Python using PyTorch for model training and inference. Dataset consisted of 25,000 geo-tagged images (640x640px) spanning 126 countries with ISO code-based labeling. Data augmentation and transfer learning were central to model robustness. Grad-CAM was used for explainability, and Gemini AI supported post-hoc object identification in image regions most influential for predictions."
      }
    },
    {
      title: "Business Intelligence Dashboards",
      description: "Created interactive dashboards in Tableau for KPI monitoring and performance analysis, serving departments in Yokoy with a particular focus on the Marketing department.",
      technologies: ["Tableau", "SQL", "PostgreSQL", "Data Modeling", "dbt"],
      year: "2024-2025",
      category: "Business Intelligence",
      color: "orange",
      githubAccess: false,
      detailedDescription: {
        overview: "A comprehensive business intelligence solution that provides real-time visibility into key performance indicators across multiple departments. The dashboard serves as a central hub for decision-making and departmental performance tracking.",
        challenges: [
          "Integrating data from disparate systems and departments",
          "Creating intuitive visualizations for diverse user personas",
          "Ensuring real-time data accuracy and consistency"
        ],
        solution: [
          "Created role-based dashboard views with personalized KPI sets",
          "Implemented real-time data connections with automated refresh schedules",
          "Built interactive drill-down capabilities for detailed analysis"
        ],
        impact: [
          "Improved cross-departmental visibility and alignment",
          "Enabled data-driven decision making across Marketing",
          "Empowered Marketing team to track campaign performance and ROI in real-time",
          "Shortened KPI reporting cycles from weekly to daily, improving agility",
          "Standardized KPI definitions across departments to reduce ambiguity and improve trust in data",
          "Enhanced executive engagement by providing high-level summaries with drill-down capability"
        ],
        technicalDetails: "Built using Tableau and dbt with custom SQL connectors to PostgreSQL. Created models in dbt as well as calculated fields with complex business logic."
      }
    },
    {
      title: "Reinforcement Learning (Small Projects)",
      description: "Implemented and compared RL algorithms like Q-Learning, SARSA, and Monte Carlo to solve manually built Cliff Walking and OpenAI Gym's Taxi Driver environments.",
      technologies: ["Python", "NumPy", "OpenAI Gym (Taxi)", "Matplotlib", "RL Algorithms"],
      year: "2024",
      category: "Reinforcement Learning",
      color: "purple",
      githubAccess: true,
      githubLink: "https://github.com/paolocadei/Reinforcement-Deep-Learning",
      detailedDescription: {
        overview: "This project explores fundamental reinforcement learning algorithms applied to two environments: a custom-built Cliff Walking gridworld and OpenAI Gym's Taxi-v3. Implementations include Q-Learning, SARSA, and Monte Carlo control, with a focus on value function learning and exploration strategies.",
        challenges: [
          "Designing and debugging a custom environment for Cliff Walking with proper reward dynamics",
          "Ensuring fair episode termination logic and consistent state transitions",
          "Comparing on-policy vs. off-policy algorithms under the same exploration constraints",
          "Visualizing value and policy convergence across discrete spaces"
        ],
        solution: [
          "Built a from-scratch gridworld simulator for the Cliff Walking problem with configurable rewards and transitions",
          "Used OpenAI Gym for standardization and benchmarking with Taxi-v3",
          "Implemented and tested tabular SARSA, Q-Learning, and Monte Carlo control algorithms in both settings",
          "Created modular evaluation pipelines with episode reward tracking and heatmap policy visualization"
        ],
        impact: [
          "Gained hands-on understanding of policy learning dynamics in finite MDPs",
          "Observed more conservative paths from SARSA vs. aggressive shortcuts in Q-Learning",
          "Highlighted convergence properties and trade-offs in algorithm design through controlled experiments",
          "Provided reusable code templates for teaching RL fundamentals and benchmarking custom environments"
        ],
        technicalDetails: "All algorithms were implemented in Python using only NumPy for numerical operations. Cliff Walking was simulated with a custom gridworld class implementing the MDP framework manually. Taxi Driver used OpenAI Gym's Taxi-v3 environment. Visualization of state-value maps and policies was done using Matplotlib. Reproducibility ensured via fixed seeds and configurable training parameters."
      }
    },
    {
      title: "Data Science Assignments",
      description: "A collection of practical data science assignments covering supervised and unsupervised learning, regularization, regression, time series forecasting, text analysis, and advanced model selection using real-world datasets.",
      technologies: [
        "Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", 
        "Statsmodels", "Jupyter Notebook"
      ],
      year: "2023",
      category: "Machine Learning & Data Analysis",
      color: "blue",
      githubAccess: true,
      githubLink: "https://github.com/paolocadei/DataScienceMethods",
      detailedDescription: {
        overview: "A comprehensive set of Jupyter notebook assignments implementing core data science methods, including data preprocessing, regression and classification, regularization, clustering, kernel methods, time series analysis, bagging and boosting, with thorough EDA and performance evaluation on standard and real-world datasets.",
        challenges: [
          "Structuring exploratory data analysis and feature engineering for noisy real-world datasets",
          "Implementing and tuning a variety of supervised and unsupervised algorithms",
          "Evaluating and visualizing model performance using best practices",
          "Transitioning between regression and classification tasks efficiently within similar data domains"
        ],
        solution: [
          "Applied robust preprocessing pipelines and automated feature engineering using scikit-learn and pandas",
          "Integrated and compared multiple regression and classification algorithms (linear regression, lasso, ridge, SVM, kNN, kernel ridge, ensemble methods, etc.)",
          "Leveraged advanced visualization (Matplotlib, Seaborn) to communicate results and insights clearly",
          "Explored unsupervised learning (clustering, density estimation), model selection, and regularization techniques"
        ],
        impact: [
          "Created a modular and reusable codebase for common data science workflows",
          "Improved predictive performance on multiple public datasets through iterative tuning and selection",
          "Provided clear, educational notebooks used as teaching/example material for advanced data science methods",
          "Enabled extension to new domains (text analysis, time series forecasting) beyond static tabular data"
        ],
        technicalDetails: "All assignments are developed in Jupyter Notebooks using Python 3, with extensive application of the scikit-learn ecosystem for modeling, regularization, ensemble methods, and pipeline management. Pandas and numpy are used for efficient data handling, while statsmodels supports statistical modeling and inference. Visualizations are crafted with matplotlib and seaborn. The repository features modular code with reproducible experiments and rich markdown explanations to aid understanding and teaching."
      }
    },
    {
      title: "Web Scraping Framework",
      description: "Built multiple web scraping frameworks for real estate data collection, handling dynamic websites and large-scale data extraction.",
      technologies: ["Python", "Scrapy", "Selenium", "BeautifulSoup"],
      year: "2021",
      category: "Data Collection",
      color: "red",
      githubAccess: true,
      githubLink: "https://github.com/paolocadei/REIT-s-Scrapers",
      detailedDescription: {
        overview: "A comprehensive web scraping framework designed for large-scale data collection from dynamic real estate websites. The system handles complex JavaScript rendering and provides reliable data extraction capabilities.",
        challenges: [
          "Handling dynamic content and JavaScript-heavy websites",
          "Managing large-scale concurrent scraping operations",
          "Maintaining data consistency across different website structures"
        ],
        solution: [
          "Combined Scrapy with Selenium for JavaScript-rendered content",
          "Built adaptive parsing logic for varying website structures",
          "Created comprehensive error handling and retry mechanisms"
        ],
        impact: [
          "Successfully collected 2M+ property listings across 15 major cities",
          "Achieved 99.8% uptime with robust error handling",
          "Reduced data collection costs by 90% compared to previous methods."
        ],
        technicalDetails: "Built with Scrapy framework. Integrated Selenium with headless Chrome for JavaScript execution. Implemented distributed scraping using Scrapy for horizontal scaling."
      }
    },
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
            <p className="text-l text-gray-600">(Work In Progress)</p>
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
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                      {getProjectImages(selectedProject).map((imagePath, index) => (
                        <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-gray-50 cursor-zoom-in group">
                          {!imageError[imagePath] ? (
                            <div className="relative">
                              <img 
                                src={imagePath} 
                                alt={`${selectedProject.title} preview ${index + 1}`}
                                className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-300"
                                style={{ maxHeight: 'none', height: 'auto' }}
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  openImageZoom(imagePath, e);
                                }}
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