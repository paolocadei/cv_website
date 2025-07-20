import React, { useState } from 'react';
import { 
  Heart, BookOpen, Mountain, Brain, Gamepad2, 
  Camera, ChefHat, X
} from 'lucide-react';

const DotRating = ({ grade }) => {
  return (
    <div className="flex space-x-1 mt-3">
      {[1, 2, 3, 4, 5].map((dot) => (
        <div
          key={dot}
          className={`w-3 h-3 rounded-full ${
            dot <= grade ? 'bg-orange-500' : 'bg-gray-300'
          }`}
        ></div>
      ))}
    </div>
  );
};

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
        image: "CV/images/meditation.jpeg",
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
          "Family-friendly games"
        ],
      },
      {
        name: "Cooking",
        icon: ChefHat,
        color: "red",
        image: "CV/images/food.jpeg",
        description: "Being Italian, cooking is a passion, especially traditional recipes.",
        activities: [
          "Fusion",
          "Vegetarian",
          "Baking bread",
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
        activities: ["Indoor climbing", "Strength training", "Community events"]
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
            My Board Games
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            I'm passionate about board games that bring people together and challenge strategic thinking. 
            Here are some of my favorites that I love playing with friends and family.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
            {
              name: "Catan",
              category: "Strategy",
              players: "3-4 players",
              duration: "60-90 min",
              thoughts: "Great for group play with negotiation and resource management. Always fun with friends!",
              color: "blue",
              myGrade: 3,
              bggLink: "https://boardgamegeek.com/boardgame/13/catan"
            },
            {
              name: "Pandemic",
              category: "Cooperative",
              players: "2-4 players", 
              duration: "45-60 min",
              thoughts: "Perfect if you love working as a team to overcome challenges. Intense and rewarding.",
              color: "green",
              myGrade: 4,
              bggLink: "https://boardgamegeek.com/boardgame/30549/pandemic"
            },
            {
              name: "Ticket to Ride",
              category: "Family-friendly",
              players: "2-5 players",
              duration: "30-60 min",
              thoughts: "Easy to learn, great for beginners and kids. Travel the world through train routes!",
              color: "purple",
              myGrade: 4,
              bggLink: "https://boardgamegeek.com/boardgame/9209/ticket-ride"
            },
            {
              name: "Small World",
              category: "Area Control",
              players: "2-5 players",
              duration: "40-80 min",
              thoughts: "Fun, fast-paced territory game with unique race powers. Light-hearted but tactical.",
              color: "orange",
              myGrade: 4,
              bggLink: "https://boardgamegeek.com/boardgame/40692/small-world"
            },
            {
              name: "Azul",
              category: "Abstract",
              players: "2-4 players",
              duration: "30-45 min",
              thoughts: "Beautiful tile-laying game with simple rules but deep strategy.",
              color: "blue",
              myGrade: 4,
              bggLink: "https://boardgamegeek.com/boardgame/230802/azul"
            },
            {
              name: "Cascadia",
              category: "Puzzle/Tile-laying",
              players: "1-4 players",
              duration: "30-45 min",
              thoughts: "Relaxing and elegant. Nature-themed puzzler with smart spatial decisions.",
              color: "green",
              myGrade: 2,
              bggLink: "https://boardgamegeek.com/boardgame/295947/cascadia"
            },
            {
              name: "Splendor",
              category: "Engine-building",
              players: "2-4 players",
              duration: "30 min",
              thoughts: "Quick and satisfying. Build an engine to acquire gems and prestige.",
              color: "gold",
              myGrade: 3,
              bggLink: "https://boardgamegeek.com/boardgame/148228/splendor"
            },
            {
              name: "Dune: Imperium – Uprising",
              category: "Deck-building/Worker Placement",
              players: "1-6 players",
              duration: "60-120 min",
              thoughts: "Intense hybrid of deck-building and strategy. A great evolution of Dune: Imperium.",
              color: "red",
              myGrade: 4,
              bggLink: "https://boardgamegeek.com/boardgame/397598/dune-imperium-uprising"
            },
            {
              name: "Castle Panic",
              category: "Cooperative/Tower Defense",
              players: "1-6 players",
              duration: "45-60 min",
              thoughts: "Family-friendly and engaging. Great intro to co-op board games.",
              color: "brown",
              myGrade: 3,
              bggLink: "https://boardgamegeek.com/boardgame/43443/castle-panic"
            },
            {
              name: "Noctiluca",
              category: "Dice Drafting",
              players: "1-4 players",
              duration: "30-45 min",
              thoughts: "Gorgeous and calming, with a clever drafting mechanic.",
              color: "teal",
              myGrade: 2,
              bggLink: "https://boardgamegeek.com/boardgame/269752/noctiluca"
            },
            {
              name: "Spicy",
              category: "Bluffing/Party",
              players: "2-6 players",
              duration: "15-30 min",
              thoughts: "Quick bluffing card game with striking art. Great for laughs.",
              color: "red",
              myGrade: 3,
              bggLink: "https://boardgamegeek.com/boardgame/299169/spicy"
            },
            {
              name: "Onitama",
              category: "Abstract/2-Player",
              players: "2 players",
              duration: "10-20 min",
              thoughts: "Elegant and fast-paced. Chess-like with rotating move sets.",
              color: "black",
              myGrade: 4,
              bggLink: "https://boardgamegeek.com/boardgame/160477/onitama"
            },
            {
              name: "Debatable",
              category: "Party/Debate",
              players: "3-16 players",
              duration: "20-45 min",
              thoughts: "Hilarious debate-based game. Great for extroverted groups.",
              color: "yellow",
              myGrade: 4,
              bggLink: "https://boardgamegeek.com/boardgame/227026/debatable"
            },
            {
              name: "Summoner Wars (Second Edition)",
              category: "Tactical Skirmish",
              players: "2 players",
              duration: "30-60 min",
              thoughts: "Fast, strategic, and full of variety. Deck and board in one.",
              color: "gray",
              myGrade: 3,
              bggLink: "https://boardgamegeek.com/boardgame/332800/summoner-wars-second-edition"
            },
            {
              name: "Arcs",
              category: "Sci-Fi Strategy",
              players: "2-4 players",
              duration: "60-120 min",
              thoughts: "Ambitious storytelling meets deep galactic conflict. Big potential!",
              color: "navy",
              myGrade: 4,
              bggLink: "https://boardgamegeek.com/boardgame/359871/arcs"
            },
            {
              name: "Chronicles of Crime",
              category: "Detective/Story-driven",
              players: "1-4 players",
              duration: "60-90 min",
              thoughts: "Immersive crime-solving with app integration. Feels like a modern mystery movie.",
              color: "darkred",
              myGrade: 4,
              bggLink: "https://boardgamegeek.com/boardgame/239188/chronicles-crime"
            },
            {
              name: "Mycelia",
              category: "Deck-building/Abstract",
              players: "1-4 players",
              duration: "45-60 min",
              thoughts: "Unique mushroom-themed deck-builder with smooth turns and earthy charm.",
              color: "forestgreen",
              myGrade: 3,
              bggLink: "https://boardgamegeek.com/boardgame/384933/mycelia"
            },
            {
              name: "Paint the Roses",
              category: "Deduction/Cooperative",
              players: "2-5 players",
              duration: "45-60 min",
              thoughts: "Queen of Hearts is after you! A tense deduction game with whimsical art.",
              color: "pink",
              myGrade: 3,
              bggLink: "https://boardgamegeek.com/boardgame/342942/paint-roses"
            },
            {
              name: "Saboteur",
              category: "Bluffing/Hidden Roles",
              players: "3-10 players",
              duration: "30 min",
              thoughts: "Easy and chaotic bluff game. Who's sabotaging the mine?",
              color: "gold",
              myGrade: 3,
              bggLink: "https://boardgamegeek.com/boardgame/9220/saboteur"
            },
            {
              name: "Exploding Kittens",
              category: "Party",
              players: "2-5 players",
              duration: "15 min",
              thoughts: "Silly, fast-paced chaos. Cats, explosions, and betrayal!",
              color: "hotpink",
              myGrade: 2,
              bggLink: "https://boardgamegeek.com/boardgame/172225/exploding-kittens"
            },
            {
              name: "Jaipur",
              category: "Card Game/2-Player",
              players: "2 players",
              duration: "30 min",
              thoughts: "Quick, clever trading duel with elegant pacing.",
              color: "rose",
              myGrade: 4,
              bggLink: "https://boardgamegeek.com/boardgame/54043/jaipur"
            },
            {
              name: "Hanamikoji",
              category: "2-Player/Strategy",
              players: "2 players",
              duration: "15-30 min",
              thoughts: "Tense and elegant. Simple choices with deep consequences.",
              color: "plum",
              myGrade: 4,
              bggLink: "https://boardgamegeek.com/boardgame/158600/hanamikoji"
            },
            {
              name: "Quoridor",
              category: "Abstract",
              players: "2-4 players",
              duration: "15-20 min",
              thoughts: "Simple to learn, brain-burning to master. Great head-to-head duel.",
              color: "wood",
              myGrade: 3,
              bggLink: "https://boardgamegeek.com/boardgame/624/quoridor"
            },
            {
              name: "Diamant",
              category: "Push Your Luck",
              players: "3-8 players",
              duration: "30 min",
              thoughts: "Quick fun with treasure and traps. Great for big groups!",
              color: "amber",
              myGrade: 4,
              bggLink: "https://boardgamegeek.com/boardgame/15512/diamant"
            },
            {
              name: "The Crew",
              category: "Cooperative/Trick-taking",
              players: "2-5 players",
              duration: "20 min",
              thoughts: "Teamwork in space! A cooperative twist on classic trick-taking.",
              color: "sky",
              myGrade: 4,
              bggLink: "https://boardgamegeek.com/boardgame/284083/crew-quest-planet-nine"
            },
            {
              name: "Lost Cities",
              category: "Card Game/2-Player",
              players: "2 players",
              duration: "30 min",
              thoughts: "Tense, minimal, and addictive. A classic 2-player duel.",
              color: "cyan",
              myGrade: 4,
              bggLink: "https://boardgamegeek.com/boardgame/50/lost-cities"
            },
            {
              name: "Sobek",
              category: "Set Collection",
              players: "2 players",
              duration: "20-30 min",
              thoughts: "Sleek Egyptian theme and clever tactical choices. Fast and fun.",
              color: "bronze",
              myGrade: 3,
              bggLink: "https://boardgamegeek.com/boardgame/341539/sobek-2-players"
            },
            {
              name: "Blue Lagoon",
              category: "Area Control/Set Collection",
              players: "2-4 players",
              duration: "30-45 min",
              thoughts: "Colorful and cutthroat. Great intro to abstract area control.",
              color: "aqua",
              myGrade: 3,
              bggLink: "https://boardgamegeek.com/boardgame/255460/blue-lagoon"
            },
            {
              name: "Survive: Escape from Atlantis!",
              category: "Survival/Family",
              players: "2-4 players",
              duration: "45 min",
              thoughts: "Sharks, sea monsters, and sinking land! A hilarious classic.",
              color: "navy",
              myGrade: 3,
              bggLink: "https://boardgamegeek.com/boardgame/2653/survive-escape-atlantis"
            },
            {
              name: "Carcassonne",
              category: "Tile-laying",
              players: "2-5 players",
              duration: "35 min",
              thoughts: "Relaxing and iconic. Great for casual and strategic minds.",
              color: "lightblue",
              myGrade: 4,
              bggLink: "https://boardgamegeek.com/boardgame/822/carcassonne"
            },
            {
              name: "Mysterium",
              category: "Cooperative/Deduction",
              players: "2-7 players",
              duration: "45-60 min",
              thoughts: "Beautifully eerie. One player is a ghost guiding the rest with visions!",
              color: "midnightblue",
              myGrade: 4,
              bggLink: "https://boardgamegeek.com/boardgame/181304/mysterium"
            },
            {
              name: "Libertalia: Winds of Galecrest",
              category: "Simultaneous Action/Strategy",
              players: "1-6 players",
              duration: "45-60 min",
              thoughts: "Pirate-themed card clash with bluffing and clever timing.",
              color: "steelblue",
              myGrade: 4,
              bggLink: "https://boardgamegeek.com/boardgame/343905/libertalia-winds-galecrest"
            },
            {
              name: "Stratego",
              category: "Classic Strategy",
              players: "2 players",
              duration: "45 min",
              thoughts: "Timeless head-to-head bluffing game. Hidden ranks and mind games.",
              color: "crimson",
              myGrade: 3,
              bggLink: "https://boardgamegeek.com/boardgame/242/stratego"
            },
            {
              name: "The Quest for El Dorado",
              category: "Deck-building/Race",
              players: "2-4 players",
              duration: "45 min",
              thoughts: "Race through the jungle by building the right deck. Smart and quick.",
              color: "jungle",
              myGrade: 4,
              bggLink: "https://boardgamegeek.com/boardgame/217372/quest-el-dorado"
            }
          ].map((game) => (
            <div
              key={game.name}
              className="bg-white border border-gray-200 p-4 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-lg font-bold text-slate-800">{game.name}</h4>
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                  {game.category}
                </span>
              </div>
              <p className="text-sm text-gray-600">👥 {game.players}</p>
              <p className="text-sm text-gray-600">⏱️ {game.duration}</p>
              <p className="text-gray-700 text-sm mt-2 italic">"{game.thoughts}"</p>
              <DotRating grade={game.myGrade} />
              <a
                href={game.bggLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-sm underline mt-2 inline-block"
              >
                View on BGG
              </a>
            </div>
          ))}
        </div>
      </div>
    ),

    "Cooking": (
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

    "Photography": (
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
              className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl border border-pink-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
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
            <p className="text-l text-gray-600">...amongst other things</p>
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
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center flex-1">
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
                      {hobby.image && (
                        <div className="ml-6">
                          <img 
                            src={hobby.image} 
                            alt={hobby.name}
                            className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg"
                          />
                        </div>
                      )}
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
                    {["Board Games" /*, "Photography", "Cooking" */].includes(hobby.name) && (
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