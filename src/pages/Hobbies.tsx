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

  const [modalHobby, setModalHobby] = useState<string | null>(null);
  const [visibleRecipes, setVisibleRecipes] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleRecipe = (recipeName: string) => {
    setVisibleRecipes((prev) => ({
      ...prev,
      [recipeName]: !prev[recipeName],
    }));
  };

 const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-50 to-blue-100 text-blue-600 border-blue-300 hover:bg-blue-100",
      green: "from-green-50 to-green-100 text-green-600 border-green-300 hover:bg-green-100",
      purple: "from-purple-50 to-purple-100 text-purple-600 border-purple-300 hover:bg-purple-100",
      orange: "from-orange-50 to-orange-100 text-orange-600 border-orange-300 hover:bg-orange-100",
      indigo: "from-indigo-50 to-indigo-100 text-indigo-600 border-indigo-300 hover:bg-indigo-100",
      red: "from-red-50 to-red-100 text-red-600 border-red-300 hover:bg-red-100",
      pink: "from-pink-50 to-pink-100 text-pink-600 border-pink-300 hover:bg-pink-100",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  // Detailed content for modal for each hobby
  const modalContent: { [key: string]: JSX.Element } = {
    "Board Games": (
      <>
        <h3 className="text-3xl font-bold mb-6 text-indigo-700 border-b border-indigo-300 pb-2">
          My Favorite Board Games
        </h3>
        <div className="space-y-6">
          {[
            {
              name: "Catan",
              category: "Strategy",
              thoughts:
                "Great for group play with negotiation and resource management. Always fun with friends!",
            },
            {
              name: "Pandemic",
              category: "Cooperative",
              thoughts:
                "Perfect if you love working as a team to overcome challenges. Intense and rewarding.",
            },
            {
              name: "Ticket to Ride",
              category: "Family-friendly",
              thoughts:
                "Easy to learn, great for beginners and kids. Travel the world through train routes!",
            },
          ].map((game) => (
            <div
              key={game.name}
              className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 className="text-xl font-semibold text-indigo-800">{game.name}</h4>
              <p className="italic text-indigo-600 mb-1">{game.category}</p>
              <p className="text-indigo-700">{game.thoughts}</p>
            </div>
          ))}
        </div>
      </>
    ),

    Cooking: (
      <>
        <h3 className="text-3xl font-bold mb-6 text-red-700 border-b border-red-300 pb-2">
          My Favorite Recipes
        </h3>
        <div className="space-y-6">
          {[
            {
              name: "Classic Spaghetti Carbonara",
              recipe: `Ingredients:
- Spaghetti
- Eggs
- Pancetta
- Pecorino Romano
- Black pepper

Instructions:
1. Cook spaghetti until al dente.
2. Fry pancetta until crispy.
3. Whisk eggs and cheese.
4. Combine pasta with pancetta and egg mixture off the heat.
5. Serve immediately with extra cheese and pepper.`,
            },
            {
              name: "Tiramisu",
              recipe: `Ingredients:
- Mascarpone cheese
- Eggs
- Sugar
- Coffee
- Ladyfingers
- Cocoa powder

Instructions:
1. Mix egg yolks with sugar and mascarpone.
2. Dip ladyfingers in coffee.
3. Layer in dish alternating ladyfingers and cream.
4. Chill for several hours.
5. Dust with cocoa before serving.`,
            },
          ].map(({ name, recipe }) => (
            <div
              key={name}
              className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 className="text-xl font-semibold text-red-800 mb-2">{name}</h4>
              <button
                onClick={() => toggleRecipe(name)}
                className="px-3 py-1 bg-red-100 text-red-700 rounded-md border border-red-300 hover:bg-red-200 transition-colors"
              >
                {visibleRecipes[name] ? "Hide Recipe" : "Show Recipe"}
              </button>
              {visibleRecipes[name] && (
                <pre className="mt-3 whitespace-pre-wrap text-red-700 bg-red-50 p-3 rounded-md border border-red-200">
                  {recipe}
                </pre>
              )}
            </div>
          ))}
        </div>
      </>
    ),

    Photography: (
      <>
        <h3 className="text-3xl font-bold mb-6 text-pink-700 border-b border-pink-300 pb-2">
          My Photography Portfolio
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
              description: "Sunset over the mountains, captured during a hiking trip.",
            },
            {
              url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
              description: "Street portrait taken in downtown during golden hour.",
            },
            {
              url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80",
              description: "Black & white cityscape showcasing urban textures and lines.",
            },
            {
              url: "https://images.unsplash.com/photo-1465311445049-d7f644a69d4d?auto=format&fit=crop&w=600&q=80",
              description: "Macro shot of a flower with delicate petal details.",
            },
          ].map(({ url, description }, idx) => (
            <figure
              key={idx}
              className="rounded-lg overflow-hidden border border-pink-300 shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={url}
                alt={description}
                className="w-full h-48 object-cover"
              />
              <figcaption className="p-3 text-pink-700 text-sm">{description}</figcaption>
            </figure>
          ))}
        </div>
      </>
    ),
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Your existing header and hobbies grid here */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {hobbies.map((hobby, index) => {
              const IconComponent = hobby.icon;
              const colorClasses = getColorClasses(hobby.color);
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div
                        className={`bg-gradient-to-r ${colorClasses} p-4 rounded-lg mr-4 border`}
                      >
                        <IconComponent
                          className={`w-8 h-8 ${colorClasses
                            .split(" ")
                            .slice(2, 3)}`}
                        />
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
                            <span
                              className={`w-2 h-2 rounded-full mr-2 ${colorClasses
                                .split(" ")
                                .slice(2, 3)
                                .toString()
                                .replace("text-", "bg-")}`}
                            ></span>
                            {activity}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Learn More button styled */}
                    {["Board Games", "Photography", "Cooking"].includes(
                      hobby.name
                    ) && (
                      <div className="mt-6">
                        <button
                          onClick={() => setModalHobby(hobby.name)}
                          className={`inline-block text-sm font-semibold px-5 py-2 rounded-md
                            border-2 border-current shadow-sm
                            transition duration-200 ease-in-out
                            hover:bg-opacity-20 hover:shadow-md
                            ${colorClasses.split(" ")[2]} `}
                          style={{ opacity: 1 }}
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

          {/* Modal Popup */}
          {modalHobby && (
            <div
              className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-6"
              onClick={() => {
                setModalHobby(null);
                setVisibleRecipes({});
              }}
            >
              <div
                className="bg-white rounded-xl max-w-4xl w-full max-h-[80vh] overflow-y-auto p-8 relative shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => {
                    setModalHobby(null);
                    setVisibleRecipes({});
                  }}
                  className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl font-bold"
                  aria-label="Close modal"
                >
                  &times;
                </button>

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