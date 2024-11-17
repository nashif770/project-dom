import React from "react";

const LoreSection = () => {
  const loreParagraphs = [
    {
      title: "The Rise of the Empire",
      description:
        "Millennia ago, the galaxy was fractured into countless warring factions. Out of the chaos, a singular force emerged: the Empire. Through diplomacy and conquest, it united the stars under a banner of progress and control, becoming the keystone of galactic civilization.",
    },
    {
      title: "The Civilizations",
      description:
        "The Empire's reign fostered the growth of diverse civilizations, each with its unique strengths and philosophies. From the industrious Arcani Collective to the war-hardened Karrak Dominion, every faction plays a role in shaping the galaxy’s destiny.",
    },
    {
      title: "A Galaxy in Turmoil",
      description:
        "The Empire’s power is waning. Rogue sectors, ancient threats, and internal strife challenge its authority. The balance of power is shifting, creating opportunities for ambitious leaders to rise and reshape the stars.",
    },
    {
      title: "The Frontier Awaits",
      description:
        "Vast unexplored regions hold untold secrets—ancient relics, mysterious phenomena, and uncharted worlds. Brave explorers and daring conquerors alike are drawn to the frontier, hoping to carve their names into the galaxy’s history.",
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-16 px-4" id="lore">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-8">
          Lore and Setting
        </h2>
        <div className="space-y-8">
          {loreParagraphs.map((lore, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-4">{lore.title}</h3>
              <p>{lore.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoreSection;
