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
      name: "Bouldering",
      description: "Rock climbing challenges both my physical and mental strength. I enjoy the problem-solving aspect and the community at climbing gyms.",
      icon: Mountain,
      color: "green",
      activities: ["Indoor climbing", "Problem solving", "Strength training", "Community events"]
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

  // Modal component
  const Modal = ({ hobbyName, content, onClose }: { hobbyName: string, content: string, onClose: () => void }) => (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-lg p-6 relative"
        onClick={e => e.stopPropagation()} // prevent modal close when clicking inside modal
      >
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold text-xl"
          aria-label="Close modal"
        >
          &times;
        </button>
        <h3 className="text-2xl font-bold mb-4">{hobbyName}</h3>
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Hobbies & Interests</h1>
            <p className="text-xl text-gray-600">What I enjoy doing in my free time</p>
          </div>

          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-lg mr-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Personal Interests</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Beyond my professional work, I have a diverse range of interests that 
              keep me balanced and continuously learning. These activities not only provide relaxation and enjoyment 
              but also contribute to my personal growth and often inspire creative approaches to problem-solving in my work.
            </p>
          </div>

          {/* Hobbies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {hobbies.map((hobby, index) => {
              const IconComponent = hobby.icon;
              const colorClasses = getColorClasses(hobby.color);
              const textColor = colorClasses.split(' ')[2]; // e.g. text-orange-600
              const bgColor = textColor.replace('text-', 'bg-'); // e.g. bg-orange-600

              // For hobbies with moreInfo, we add a button to open modal
              const hasMoreInfo = !!hobby.moreInfo;

              return (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`bg-gradient-to-r ${colorClasses} p-4 rounded-lg mr-4 border`}>
                        <IconComponent className={`w-8 h-8 ${textColor}`} />
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
                            <span className={`w-2 h-2 rounded-full mr-2 ${bgColor}`}></span>
                            {activity}
                          </div>
                        ))}
                      </div>
                    </div>

                    {hobby.link && (
                      <div className="mt-6">
                        <a
                          href={hobby.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-block text-sm font-medium ${textColor} hover:underline`}
                        >
                          {hobby.link.text}
                        </a>
                      </div>
                    )}

                    {hasMoreInfo && (
                      <button
                        onClick={() => setModalHobby(hobby.name)}
                        className={`mt-6 inline-block bg-gradient-to-r ${colorClasses} px-4 py-2 rounded font-semibold text-white hover:brightness-90 transition`}
                      >
                        Learn More
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Hobby Categories */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Interest Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="font-semibold text-slate-800">Intellectual</div>
                <div className="text-sm text-gray-600 mt-1">Reading, Learning</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                <Mountain className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="font-semibold text-slate-800">Physical</div>
                <div className="text-sm text-gray-600 mt-1">Bouldering, Fitness</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                <Brain className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <div className="font-semibold text-slate-800">Mental</div>
                <div className="text-sm text-gray-600 mt-1">Meditation, Mindfulness</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                <Gamepad2 className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <div className="font-semibold text-slate-800">Social</div>
                <div className="text-sm text-gray-600 mt-1">Games, Community</div>
              </div>
            </div>
          </div>

          {/* Personal Philosophy */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Work-Life Balance</h2>
            <p className="text-lg leading-relaxed opacity-90">
              I believe that diverse interests and hobbies are essential for personal growth and professional success. 
              Each activity teaches me something different - bouldering develops problem-solving under pressure, 
              meditation enhances focus and clarity, reading expands my knowledge base, and board games sharpen 
              strategic thinking. This variety keeps me energized and brings fresh perspectives into my life.
            </p>
          </div>

          {/* Modal */}
          {modalHobby && (
            <Modal
              hobbyName={modalHobby}
              content={hobbies.find(h => h.name === modalHobby)?.moreInfo || "More info coming soon."}
              onClose={() => setModalHobby(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
