import React, { useState } from 'react';
import { 
  Heart, BookOpen, Mountain, Brain, Gamepad2, 
  Camera, ChefHat 
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
      description: "Strategic board games combine fun with analytical thinking. I enjoy both competitive and cooperative games with friends and family.",
      icon: Gamepad2,
      color: "orange",
      activities: ["Strategy games", "Social gaming", "Game nights", "Competitive play", "Least amount of luck games"],
      moreInfo: "Board games stimulate my strategic thinking and social skills. I love classics like Catan, cooperative games like Pandemic, and chess."
    },
    {
      name: "Cooking",
      description: "I'm Italian...no more needs to be said !!!",
      icon: ChefHat,
      color: "red",
      activities: ["International cuisine", "Relaxation", "Healthy cooking"],
      moreInfo: "Cooking is my creative outlet. I enjoy experimenting with traditional Italian recipes and exploring other cuisines."
    },
    {
      name: "Photography",
      description: "Capturing moments and exploring composition through photography. I particularly enjoy landscape and street photography during travels.",
      icon: Camera,
      color: "pink",
      activities: ["Landscape photography", "Street photography", "Travel documentation", "Photo editing"],
      moreInfo: "Photography allows me to see the world differently. I focus on light, composition, and storytelling through images."
    },
    {
      name: "Bouldering",
      description: "Rock climbing challenges both my physical and mental strength. I enjoy the problem-solving aspect and the community at climbing gyms.",
      icon: Mountain,
      color: "green",
      activities: ["Indoor climbing", "Problem solving", "Strength training", "Community events"]
    }
  ];

  const [modalHobby, setModalHobby] = useState<string | null>(null);

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-50 to-blue-100 text-blue-600 border-blue-200",
      green: "from-green-50 to-green-100 text-green-600 border-green-200",
      purple: "from-purple-50 to-purple-100 text-purple-600 border-purple-200",
      orange: "from-orange-50 to-orange-100 text-orange-600 border-orange-200",
      indigo: "from-indigo-50 to-indigo-100 text-indigo-600 border-indigo-200",
      red: "from-red-50 to-red-100 text-red-600 border-red-200",
      pink: "from-pink-50 to-pink-100 text-pink-600 border-pink-200"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  // Content for modals by hobby name
  const modalContent: { [key: string]: JSX.Element } = {
    "Board Games": (
      <>
        <h3 className="text-3xl font-bold mb-4">Board Games</h3>
        <p className="mb-4">I love strategic and social board games. Here are some links to my favorite games and communities:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="https://boardgamegeek.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">BoardGameGeek</a></li>
          <li><a href="https://www.tabletopgaming.co.uk/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Tabletop Gaming Magazine</a></li>
          <li><a href="https://boardgamearena.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Board Game Arena - Play online</a></li>
        </ul>
      </>
    ),
    "Photography": (
      <>
        <h3 className="text-3xl font-bold mb-4">Photography</h3>
        <p className="mb-4">Photography helps me capture moments and improve my artistic eye. Check out some inspirational sites and my favorite styles:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="https://500px.com/" target="_blank" rel="noopener noreferrer" className="text-pink-600 underline">500px - Photography community</a></li>
          <li><a href="https://www.nationalgeographic.com/photography" target="_blank" rel="noopener noreferrer" className="text-pink-600 underline">National Geographic Photography</a></li>
          <li><a href="https://digital-photography-school.com/" target="_blank" rel="noopener noreferrer" className="text-pink-600 underline">Digital Photography School</a></li>
        </ul>
      </>
    ),
    "Cooking": (
      <>
        <h3 className="text-3xl font-bold mb-4">Cooking</h3>
        <p className="mb-4">Being Italian, cooking is a passion! Here are some of my favorite recipe sites and inspirations:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="https://www.greatitalianchefs.com/" target="_blank" rel="noopener noreferrer" className="text-red-600 underline">Great Italian Chefs</a></li>
          <li><a href="https://www.seriouseats.com/" target="_blank" rel="noopener noreferrer" className="text-red-600 underline">Serious Eats</a></li>
          <li><a href="https://www.bonappetit.com/" target="_blank" rel="noopener noreferrer" className="text-red-600 underline">Bon Appetit</a></li>
        </ul>
      </>
    )
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header and Intro - unchanged */}

          {/* Hobbies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {hobbies.map((hobby, index) => {
              const IconComponent = hobby.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`bg-gradient-to-r ${getColorClasses(hobby.color)} p-4 rounded-lg mr-4 border`}>
                        <IconComponent className={`w-8 h-8 ${getColorClasses(hobby.color).split(' ')[2]}`} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                        {hobby.name}
                      </h3>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {hobby.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-slate-800 mb-3">What I enjoy:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {hobby.activities.map((activity, actIndex) => (
                          <div key={actIndex} className="flex items-center text-sm text-gray-600">
                            <span className={`w-2 h-2 rounded-full mr-2 ${getColorClasses(hobby.color).split(' ')[2].replace('text-', 'bg-')}`}></span>
                            {activity}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Link from original code */}
                    {hobby.link && (
                      <div className="mt-6">
                        <a
                          href={hobby.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-block text-sm font-medium ${getColorClasses(hobby.color).split(' ')[2]} hover:underline`}
                        >
                          {hobby.link.text}
                        </a>
                      </div>
                    )}

                    {/* Add Learn More button only for Board Games, Photography, Cooking */}
                    {["Board Games", "Photography", "Cooking"].includes(hobby.name) && (
                      <div className="mt-6">
                        <button
                          onClick={() => setModalHobby(hobby.name)}
                          className={`inline-block text-sm font-semibold px-4 py-2 rounded-md
                            ${getColorClasses(hobby.color).split(' ')[2]} 
                            bg-opacity-90 hover:bg-opacity-100 transition-opacity duration-200`}
                          style={{ opacity: 0.9 }} // less transparent
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

          {/* Hobby Categories and Philosophy unchanged */}

          {/* Modal Popup */}
          {modalHobby && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-6"
              onClick={() => setModalHobby(null)} // close when clicking background
            >
              <div
                className="bg-white rounded-xl max-w-4xl w-full max-h-[80vh] overflow-y-auto p-8 relative"
                onClick={e => e.stopPropagation()} // prevent closing modal when clicking inside content
              >
                <button
                  onClick={() => setModalHobby(null)}
                  className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl font-bold"
                  aria-label="Close modal"
                >
                  &times;
                </button>

                {/* Render modal content */}
                {modalContent[modalHobby]}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hobbies;