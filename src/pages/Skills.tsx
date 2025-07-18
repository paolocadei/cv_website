import React from 'react';
import { Code, Database, BarChart3, Cloud, Terminal, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "blue",
      skills: [
        { name: "Python", level: 95, description: "Advanced data analysis, machine learning, web scraping" },
        { name: "SQL", level: 90, description: "Complex queries, database design, optimization" },
        { name: "R", level: 75, description: "Statistical analysis, data visualization" }
      ]
    },
    {
      title: "Data Tools & Platforms",
      icon: Database,
      color: "green",
      skills: [
        { name: "dbt", level: 85, description: "Data transformation, modeling, documentation" },
        { name: "Tableau", level: 80, description: "Interactive dashboards, data visualization" },
        { name: "BigQuery", level: 75, description: "Large-scale data processing and analytics" },
        { name: "PostgreSQL", level: 80, description: "Database management and optimization" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "purple",
      skills: [
        { name: "GCP (Google Cloud Platform)", level: 80, description: "Cloud infrastructure, data pipelines" },
        { name: "Terraform", level: 70, description: "Infrastructure as code, automation" },
        { name: "Docker", level: 65, description: "Containerization, deployment" },
        { name: "CI/CD", level: 70, description: "Automated testing and deployment" }
      ]
    },
    {
      title: "Business & Analytics",
      icon: BarChart3,
      color: "orange",
      skills: [
        { name: "Microsoft Office", level: 90, description: "Advanced Excel, PowerPoint, Word" },
        { name: "Business Intelligence", level: 85, description: "KPI development, reporting" },
        { name: "Data Modeling", level: 80, description: "Dimensional modeling, schema design" }
      ]
    },
    {
      title: "Development Tools",
      icon: Terminal,
      color: "indigo",
      skills: [
        { name: "Git", level: 75, description: "Version control, collaboration" },
        { name: "YAML", level: 70, description: "Configuration management" },
        { name: "Scrapy", level: 80, description: "Web scraping frameworks" },
        { name: "Selenium", level: 75, description: "Web automation, dynamic scraping" }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-50 to-blue-100 text-blue-600 border-blue-200",
      green: "from-green-50 to-green-100 text-green-600 border-green-200",
      purple: "from-purple-50 to-purple-100 text-purple-600 border-purple-200",
      orange: "from-orange-50 to-orange-100 text-orange-600 border-orange-200",
      indigo: "from-indigo-50 to-indigo-100 text-indigo-600 border-indigo-200"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getProgressColor = (color: string) => {
    const colorMap = {
      blue: "bg-blue-500",
      green: "bg-green-500",
      purple: "bg-purple-500",
      orange: "bg-orange-500",
      indigo: "bg-indigo-500"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Technical Skills</h1>
            <p className="text-xl text-gray-600">My expertise in data science and engineering technologies</p>
          </div>

          {/* Skills Categories */}
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <div key={categoryIndex} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-8">
                    <div className={`bg-gradient-to-r ${getColorClasses(category.color)} p-4 rounded-lg mr-4 border`}>
                      <IconComponent className={`w-8 h-8 ${getColorClasses(category.color).split(' ')[2]}`} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">{category.title}</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="text-lg font-semibold text-slate-800">{skill.name}</h3>
                          <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                        </div>
                        
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                          <div 
                            className={`h-2 rounded-full ${getProgressColor(category.color)} transition-all duration-1000`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        
                        <p className="text-sm text-gray-600">{skill.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Languages Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mt-12">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-pink-50 to-pink-100 text-pink-600 border-pink-200 p-4 rounded-lg mr-4 border">
                <Globe className="w-8 h-8 text-pink-600" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Languages</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-slate-800">English</span>
                  <div className="flex space-x-1">
                    {[1,2,3,4,5].map((dot) => (
                      <div key={dot} className="w-3 h-3 rounded-full bg-pink-500"></div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-slate-800">Italian</span>
                  <div className="flex space-x-1">
                    {[1,2,3,4,5].map((dot) => (
                      <div key={dot} className="w-3 h-3 rounded-full bg-pink-500"></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-slate-800">Spanish</span>
                  <div className="flex space-x-1">
                    {[1,2,3].map((dot) => (
                      <div key={dot} className="w-3 h-3 rounded-full bg-pink-500"></div>
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
                      <div key={dot} className="w-3 h-3 rounded-full bg-pink-500"></div>
                    ))}
                    {[3,4,5].map((dot) => (
                      <div key={dot} className="w-3 h-3 rounded-full bg-gray-300"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications & Learning */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-xl p-8 mt-12">
            <h2 className="text-2xl font-bold mb-4">Continuous Learning</h2>
            <p className="text-lg leading-relaxed opacity-90 mb-6">
              I'm passionate about staying current with the latest technologies and methodologies in data science. 
              I regularly engage with new tools, frameworks, and best practices to ensure my skills remain cutting-edge 
              and relevant to industry needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">8+</div>
                <div className="text-gray-300">Programming Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">15+</div>
                <div className="text-gray-300">Tools & Platforms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">3+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;