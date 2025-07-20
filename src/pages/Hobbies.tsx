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
              className={`bg-gradient-to-br from-${game.color}-50 to-${game.color}-100 p-6 rounded-xl border border-${game.color}-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]`}
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className={`text-xl font-bold text-${game.color}-800`}>{game.name}</h4>
                <span className={`bg-${game.color}-200 text-${game.color}-700 px-3 py-1 rounded-full text-sm font-medium`}>
                  {game.category}
                </span>
              </div>
              <div className="space-y-2 mb-3">
                <p className={`text-${game.color}-600 text-sm font-medium`}>👥 {game.players}</p>
                <p className={`text-${game.color}-600 text-sm font-medium`}>⏱️ {game.duration}</p>
              </div>
              <p className={`text-${game.color}-700 leading-relaxed`}>{game.thoughts}</p>
            </div>
          ))}
        </div>
      </div>
    ),

    Cooking: (
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-4 text-red-700">
            Italian Cooking Passion
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Being Italian, cooking is in my blood! I love preparing traditional recipes that have been 
            passed down through generations. Here are some of my signature dishes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            {
              name: "Classic Spaghetti Carbonara",
              difficulty: "Medium",
              time: "20 minutes",
              image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?auto=format&fit=crop&w=600&q=80",
              recipe: `Ingredients:
• 400g Spaghetti
• 4 large eggs
• 200g Pancetta or Guanciale
• 100g Pecorino Romano (grated)
• Fresh black pepper
• Salt

Instructions:
1. Cook spaghetti in salted water until al dente
2. Fry pancetta until crispy and golden
3. Whisk eggs with grated cheese and black pepper
4. Drain pasta, reserve pasta water
5. Mix hot pasta with pancetta off the heat
6. Add egg mixture, toss quickly with pasta water
7. Serve immediately with extra cheese and pepper`,
            },
            {
              name: "Classic Tiramisu",
              difficulty: "Easy",
              time: "30 min + 4h chill",
              image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80",
              recipe: `Ingredients:
• 500g Mascarpone cheese
• 6 egg yolks
• 150g Sugar
• 300ml Strong coffee (cooled)
• 30 Ladyfinger cookies
• Unsweetened cocoa powder
• Dark chocolate shavings (optional)

Instructions:
1. Whisk egg yolks with sugar until pale
2. Add mascarpone and mix until smooth
3. Dip ladyfingers quickly in coffee
4. Layer in dish: cookies, then cream
5. Repeat layers, finish with cream
6. Chill for at least 4 hours
7. Dust with cocoa before serving`,
            },
          ].map(({ name, difficulty, time, image, recipe }) => (
            <div
              key={name}
              className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl border border-red-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <img 
                src={image} 
                alt={name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-2xl font-bold text-red-800">{name}</h4>
                  <div className="flex gap-2">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                      {difficulty}
                    </span>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                      {time}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => toggleRecipe(name)}
                  className="mb-4 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium shadow-sm w-full"
                >
                  {visibleRecipes[name] ? "Hide Recipe" : "Show Recipe"}
                </button>
                {visibleRecipes[name] && (
                  <div className="bg-white p-6 rounded-lg border border-red-200 shadow-inner">
                    <pre className="whitespace-pre-wrap text-red-800 font-mono text-sm leading-relaxed">
                      {recipe}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),

    Photography: (
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-4 text-pink-700">
            Photography Portfolio
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Photography allows me to capture moments and see the world through a different lens. 
            I enjoy experimenting with different styles and techniques to tell visual stories.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
              description: "Sunset over the mountains, captured during a hiking trip in the Alps.",
              category: "Landscape",
              settings: "f/8, 1/125s, ISO 100"
            },
            {
              url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
              description: "Street portrait taken in downtown during golden hour.",
              category: "Portrait",
              settings: "f/2.8, 1/250s, ISO 400"
            },
            {
              url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80",
              description: "Black & white cityscape showcasing urban textures and architectural lines.",
              category: "Urban",
              settings: "f/11, 1/60s, ISO 200"
            },
            {
              url: "https://images.unsplash.com/photo-1465311445049-d7f644a69d4d?auto=format&fit=crop&w=600&q=80",
              description: "Macro shot of a flower with delicate petal details and morning dew.",
              category: "Macro",
              settings: "f/5.6, 1/500s, ISO 100"
            },
          ].map(({ url, description, category, settings }, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl border border-pink-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="relative group">
                <img
                  src={url}
                  alt={description}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-pink-700 leading-relaxed mb-3">{description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-pink-600 text-sm font-mono bg-pink-100 px-3 py-1 rounded-full">
                    {settings}
                  </span>
                  <Camera className="w-5 h-5 text-pink-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  };

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

                    {/* Special link for Reading */}
                    {hobby.link && (
                      <div className="mt-6">
                        <a
                          href={hobby.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-block text-sm font-semibold px-5 py-2 rounded-md
                            border-2 border-current shadow-sm
                            transition duration-200 ease-in-out
                            hover:bg-opacity-20 hover:shadow-md
                            ${colorClasses.split(" ")[2]} `}
                        >
                          {hobby.link.text}
                        </a>
                      </div>
                    )}

                    {/* Learn More button for modal hobbies */}
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
            <a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText('paolo.cadei2001@gmail.com');
                alert('Email address copied to clipboard!');
              }}
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Heart className="w-5 h-5 mr-2" />
              Get In Touch
            </a>
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
        <div className="mb-8">
          <p className="text-lg text-gray-600 leading-relaxed">
            Being Italian, cooking is in my blood! I love preparing traditional recipes that have been 
            passed down through generations. Here are some of my signature dishes.
          </p>
        </div>
        <div className="space-y-6">
          {[
            {
              name: "Classic Spaghetti Carbonara",
              difficulty: "Medium",
              time: "20 minutes",
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
              difficulty: "Easy",
              time: "30 min + 4h chill",
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
              className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl border border-red-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-2xl font-bold text-red-800">{name}</h4>
                <div className="flex gap-2">
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                    {name === "Classic Spaghetti Carbonara" ? "Medium" : "Easy"}
                  </span>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                    {name === "Classic Spaghetti Carbonara" ? "20 min" : "30 min + chill"}
                  </span>
                </div>
              </div>
              <button
                onClick={() => toggleRecipe(name)}
                className="mb-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium shadow-sm"
              >
                {visibleRecipes[name] ? "Hide Recipe" : "Show Recipe"}
              </button>
              {visibleRecipes[name] && (
                <pre className="whitespace-pre-wrap text-red-800 bg-white p-4 rounded-lg border border-red-200 shadow-inner font-mono text-sm leading-relaxed">
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
        <div className="mb-8">
          <p className="text-lg text-gray-600 leading-relaxed">
            Photography allows me to capture moments and see the world through a different lens. 
            I enjoy experimenting with different styles and techniques to tell visual stories.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
              description: "Sunset over the mountains, captured during a hiking trip.",
              category: "Landscape",
            },
            {
              url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
              description: "Street portrait taken in downtown during golden hour.",
              category: "Portrait",
            },
            {
              url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80",
              description: "Black & white cityscape showcasing urban textures and lines.",
              category: "Urban",
            },
            {
              url: "https://images.unsplash.com/photo-1465311445049-d7f644a69d4d?auto=format&fit=crop&w=600&q=80",
              description: "Macro shot of a flower with delicate petal details.",
              category: "Macro",
            },
          ].map(({ url, description, category }, idx) => (
            <figure
              key={idx}
              className="rounded-xl overflow-hidden border border-pink-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-gradient-to-br from-pink-50 to-purple-50"
            >
              <img
                src={url}
                alt={description}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              <figcaption className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-medium">
                    {category}
                  </span>
                </div>
                <p className="text-pink-700 text-sm leading-relaxed">{description}</p>
              </figcaption>
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

          {/* Fixed content structure */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Personal Interests & Hobbies</h1>
            <p className="text-xl text-gray-600">What I enjoy doing in my free time</p>
          </div>

          {/* Hobbies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">