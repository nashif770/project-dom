import React from "react";

const features = [
  {
    title: "Civilization and Faction Integration",
    description:
      "Join a preexisting civilization or faction to start your journey. Shape your role by participating in cultural, political, and diplomatic interactions.",
  },
  {
    title: "Planetary and Solar System Management",
    description:
      "Manage resources and industries on your planet to grow its economy. Expand your influence to eventually control the entire solar system.",
  },
  {
    title: "Trade, Commerce, and Economy",
    description:
      "Engage in interstellar trade with corporations, players, and NPCs. Establish trade routes and monopolies for economic dominance.",
  },
  {
    title: "Technological Advancement",
    description:
      "Research advanced technologies to build spaceships and colonize planets. Specialize in fields like AI, terraforming, or warp drives for strategic advantages.",
  },
  {
    title: "Exploration and Colonization",
    description:
      "Explore new solar systems and establish colonies on distant planets. Claim uncharted sectors for your civilization.",
  },
  {
    title: "Empire Interactions",
    description:
      "Trade with the empire or support its expeditions to gain favor. Fight under the empire’s banner to expand its territories.",
  },
  {
    title: "Conflict and Endgame Challenges",
    description:
      "Engage in battles or independently conquer sectors of the galaxy. Face galaxy-wide challenges like invasions, rebellions, or catastrophic events.",
  },
  {
    title: "Relics, Mysteries, and Legacy",
    description:
      "Uncover ancient artifacts and ruins to unlock powerful abilities. Leave a cultural and political legacy for your civilization.",
  },
];

const FeaturesSection = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-4" id="features">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8">Game Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
