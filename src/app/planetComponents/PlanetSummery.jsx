import React, { useState, useEffect } from "react";

const PlanetSummary = ({ planet }) => {
  if (!planet) return <div>Planet not found!</div>;

  const [planetData, setPlanetData] = useState(planet);

  const addStructureToBiome = (biomeName, structureName) => {
    // Find the biome
    const updatedPlanet = { ...planetData };
    const biome = updatedPlanet.biomes.find((b) => b.name === biomeName);

    // Check if there is space to add the structure
    if (biome.slots.length < biome.slotCount) {
      biome.slots.push(structureName);
      setPlanetData(updatedPlanet); // Update planet state
    } else {
      alert("No more space in this biome!");
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      {/* Planet Image Placeholder */}
      <div
        className="w-[300px] h-[300px] bg-gray-300 rounded-lg m-auto mb-6"
        style={{ backgroundColor: "#ddd" }}
      >
        {/* You can replace this div with an actual image later */}
        <p className="text-center text-xl text-gray-700">Planet Image Here</p>
      </div>

      {/* Biomes and Slots */}
      {planetData.biomes.map((biome) => (
        <div key={biome.name} className="mb-4">
          <h3 className="text-xl font-bold">{biome.name}</h3>
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: biome.slotCount }).map((_, index) => (
              <div
                key={index}
                className={`h-[50px] border rounded-lg flex items-center justify-center cursor-pointer ${
                  biome.industryslots[index]
                    ? "bg-green-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => {
                  const structure = prompt(
                    "Enter structure to build (Research Lab, Mining Facility, etc.)"
                  );
                  addStructureToBiome(biome.name, structure);
                }}
              >
                {biome.industryslots[index] || "Empty"}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlanetSummary;
