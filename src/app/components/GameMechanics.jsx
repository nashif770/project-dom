import React from "react";

const GameMechanics = () => {
  const mechanics = [
    {
      title: "Resource Management",
      description:
        "Gather resources from your planet’s industries and trade with other planets. Balance production, consumption, and trade to sustain your growth.",
    },
    {
      title: "Fleet Building & Combat",
      description:
        "Build your fleet from small fighters to massive capital ships. Engage in tactical space combat to defend your system or conquer others.",
    },
    {
      title: "Planetary Control",
      description:
        "Manage the infrastructure, economy, and politics of your planet. Each decision affects the planet's output, stability, and relations with other factions.",
    },
    {
      title: "Tech Progression",
      description:
        "Invest in research to unlock new technologies. From better resource harvesting methods to powerful new ships, your technological advancements will dictate your success.",
    },
    {
      title: "Expansion & Colonization",
      description:
        "Expand your empire by colonizing new planets within your solar system, and eventually, beyond. Use your fleet to explore and claim new worlds.",
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-16 px-4" id="game-mechanics">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-8">
          Game Mechanics
        </h2>
        <div className="space-y-8">
          {mechanics.map((mechanic, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-4">{mechanic.title}</h3>
              <p>{mechanic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameMechanics;
