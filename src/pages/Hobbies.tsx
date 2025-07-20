import React, { useState } from 'react';
import { 
  Heart, BookOpen, Mountain, Brain, Gamepad2, 
  Camera, ChefHat, X
} from 'lucide-react';

const Hobbies = () => {
  const hobbies = [
    {
      name: "Reading",
      description: "I love diving into books, no matter what they are.",
      icon: BookOpen,
      color: "blue",
      activities: ["Fantasy", "Philosophy", "Meditation", "Self-Improvement", "Romance"],
      link: {
        url: "https://www.goodreads.com/user/show/166373035-paolo",
        text: "Check out my Goodreads here !!!"
      }
    },
    {
      name: "Meditating",
      description: "Daily meditation helps me maintain focus and mental clarity. I practice mindfulness and breathing techniques for a calm daily life.",
      icon: Brain,
      color: "purple",
      activities: ["Mindfulness", "Breathing exercises", "Daily practice"]
    },
    {
      name: "Board Games",
      icon: Gamepad2,
      color: "indigo",
      description: "I enjoy strategic and social board games that bring friends together.",
      activities: [
        "Strategy games",
        "Cooperative games",
        "Family-friendly games",
        "Solo campaigns",
      ],
    },
    {
      name: "Cooking",
      icon: ChefHat,
      color: "red",
      description: "Being Italian, cooking is a passion, especially traditional recipes.",
      activities: [
        "Pasta dishes",
        "Baking bread",
        "Desserts",
        "Seasonal cooking",
      ],
    },
    {
      name: "Photography",
      icon: Camera,
      color: "pink",
      description: "Photography helps me capture moments and improve my artistic eye.",
      activities: [
        "Landscape photos",
        "Street photography",
        "Portrait shots",
        "Black & white",
      ],
    },
    {
      name: "Bouldering",
      description: "Rock climbing challenges both my physical and mental strength. I enjoy the problem-solving aspect and the community at climbing gyms.",
      icon: Mountain,
      color: "green",
      activities: ["Indoor climbing", "Problem solving", "Strength training", "Community events"]
    }
  ];

  const [modalHobby, setModalHobby] = useState(null);
  const [visibleRecipes, setVisibleRecipes] = useState({});

  const toggleRecipe = (recipeName) => {
    setVisibleRecipes((prev) => ({
      ...prev,
      [recipeName]: !prev[recipeName],
    }));
  };

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "from-blue-50 to-blue-100 text-blue-600 border-blue-300 hover:bg-blue-100",
      green: "from-green-50 to-green-100 text-green-600 border-green-300 hover:bg-green-100",
      purple: "from-purple-50 to-purple-100 text-purple-600 border-purple-300 hover:bg-purple-100",
      orange: "from-orange-50 to-orange-100 text-orange-600 border-orange-300 hover:bg-orange-100",
      indigo: "from-indigo-50 to-indigo-100 text-indigo-600 border-indigo-300 hover:bg-indigo-100",
      red: "from-red-50 to-red-100 text-red-600 border-red-300 hover:bg-red-100",
      pink: "from-pink-50 to-pink-100 text-pink-600 border-pink-300 hover:bg-pink-100",
    };
    return colorMap[color] || colorMap.blue;
  };

  const getBackgroundColor = (color) => {
    const colorMap = {
      blue: "bg-blue-600",
      green: "bg-green-600", 
      purple: "bg-purple-600",
      orange: "bg-orange-600",
      indigo: "bg-indigo-600",
      red: "bg-red-600",
      pink: "bg-pink-600",
    };
    return colorMap[color] || colorMap.blue;
  };

  // Detailed content for modal for each hobby
  const modalContent = {
    "Board Games": (
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-4 text-indigo-700">
            My Favorite Board Games
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            I'm passionate about board games that bring people together and challenge strategic thinking. 
            Here are some of my favorites that I love playing with friends and family.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Catan",
              category: "Strategy",
              players: "3-4 players",
              duration: "60-90 min",
              thoughts: "Great for group play with negotiation and resource management. Always fun with friends!",
              color: "blue"
            },
            {
              name: "Pandemic",
              category: "Cooperative",
              players: "2-4 players", 
              duration: "45-60 min",
              thoughts: "Perfect if you love working as a team to overcome challenges. Intense and rewarding.",
              color: "green"
            },
            {
              name: "Ticket to Ride",
              category: "Family-friendly",
              players: "2-5 players",
              duration: "30-60 min",
              thoughts: "Easy to learn, great for beginners and kids. Travel the world through train routes!",
              color: "purple"
            },
          ].map((game) => (
            <div
              key={game.name}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-xl font-bold text-blue-800">{game.name}</h4>
                <span className="bg-blue-200 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  {game.category}
                </span>
              </div>
              <div className="space-y-2 mb-3">
                <p className="text-blue-600 text-sm font-medium">👥 {game.players}</p>
                <p className="text-blue-600 text-sm font-medium">⏱️ {game.duration}</p>
              </div>
              <p className="text-blue-700 leading-relaxed">{game.thoughts}</p>
            </div>
          ))}
        </div>
      </div>
    )

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Personal Interests & Hobbies</h1>
            <p className="text-xl text-gray-600">What I enjoy doing in my free time</p>
          </div>

          {/* Hobbies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {hobbies.map((hobby, index) => {
              const IconComponent = hobby.icon;
              const colorClasses = getColorClasses(hobby.color);
              const bgColor = getBackgroundColor(hobby.color);
              
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`bg-gradient-to-r ${colorClasses} p-4 rounded-lg mr-4 border`}>
                        <IconComponent className={`w-8 h-8 ${hobby.color === 'blue' ? 'text-blue-600' : 
                          hobby.color === 'green' ? 'text-green-600' : 
                          hobby.color === 'purple' ? 'text-purple-600' :
                          hobby.color === 'indigo' ? 'text-indigo-600' :
                          hobby.color === 'red' ? 'text-red-600' :
                          hobby.color === 'pink' ? 'text-pink-600' : 'text-blue-600'}`} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                        {hobby.name}
                      </h3>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {hobby.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">
                        What I enjoy:
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {hobby.activities.map((activity, actIndex) => (
                          <div
                            key={actIndex}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <span className={`w-2 h-2 rounded-full mr-2 ${
                              hobby.color === 'blue' ? 'bg-blue-600' : 
                              hobby.color === 'green' ? 'bg-green-600' : 
                              hobby.color === 'purple' ? 'bg-purple-600' :
                              hobby.color === 'indigo' ? 'bg-indigo-600' :
                              hobby.color === 'red' ? 'bg-red-600' :
                              hobby.color === 'pink' ? 'bg-pink-600' : 'bg-blue-600'
                            }`}></span>
                            {activity}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Special link for Reading */}
                    {hobby.link && (
                      <div className="mt-6">
                        <a
                          href={hobby.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-block text-sm font-semibold px-5 py-2 rounded-md border-2 shadow-sm transition duration-200 ease-in-out hover:bg-opacity-20 hover:shadow-md ${
                            hobby.color === 'blue' ? 'text-blue-600 border-blue-600' : 
                            hobby.color === 'green' ? 'text-green-600 border-green-600' : 
                            hobby.color === 'purple' ? 'text-purple-600 border-purple-600' :
                            hobby.color === 'indigo' ? 'text-indigo-600 border-indigo-600' :
                            hobby.color === 'red' ? 'text-red-600 border-red-600' :
                            hobby.color === 'pink' ? 'text-pink-600 border-pink-600' : 'text-blue-600 border-blue-600'
                          }`}
                        >
                          {hobby.link.text}
                        </a>
                      </div>
                    )}

                    {/* Learn More button for modal hobbies */}
                    {["Board Games", "Photography", "Cooking"].includes(hobby.name) && (
                      <div className="mt-6">
                        <button
                          onClick={() => setModalHobby(hobby.name)}
                          className={`inline-block text-sm font-semibold px-5 py-2 rounded-md border-2 shadow-sm transition duration-200 ease-in-out hover:bg-opacity-20 hover:shadow-md ${
                            hobby.color === 'blue' ? 'text-blue-600 border-blue-600' : 
                            hobby.color === 'green' ? 'text-green-600 border-green-600' : 
                            hobby.color === 'purple' ? 'text-purple-600 border-purple-600' :
                            hobby.color === 'indigo' ? 'text-indigo-600 border-indigo-600' :
                            hobby.color === 'red' ? 'text-red-600 border-red-600' :
                            hobby.color === 'pink' ? 'text-pink-600 border-pink-600' : 'text-blue-600 border-blue-600'
                          }`}
                        >
                          Learn More
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Let's Connect!</h2>
            <p className="text-xl mb-6 opacity-90">
              I'd love to chat about shared interests or collaborate on exciting projects.
            </p>
            <button 
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText('paolo.cadei2001@gmail.com');
                alert('Email address copied to clipboard!');
              }}
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Heart className="w-5 h-5 mr-2" />
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {modalHobby && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={() => {
            setModalHobby(null);
            setVisibleRecipes({});
          }}
        >
          <div
            className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden relative shadow-2xl border border-gray-200 transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-orange-50 via-orange-100 to-orange-50 px-8 py-6 border-b border-orange-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-orange-500 p-3 rounded-lg mr-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-orange-800">{modalHobby}</h2>
                </div>
                <button
                  onClick={() => {
                    setModalHobby(null);
                    setVisibleRecipes({});
                  }}
                  className="p-2 text-orange-500 hover:text-orange-700 hover:bg-orange-200 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="overflow-y-auto max-h-[calc(90vh-120px)] p-8 bg-gradient-to-br from-white to-gray-50">
              {modalContent[modalHobby]}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hobbies;