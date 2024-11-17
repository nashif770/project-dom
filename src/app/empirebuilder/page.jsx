"use client";
import React, { useState } from "react";

const EmpireBuilder = () => {
  // State for form fields
  const [empireName, setEmpireName] = useState("");
  const [government, setGovernment] = useState("");
  const [rulingSystem, setRulingSystem] = useState("");
  const [empireType, setEmpireType] = useState([]);
  const [empireAttributes, setEmpireAttributes] = useState([]);
  const [influence, setInfluence] = useState({
    neighbors: "",
    stability: "",
    equality: "",
  });
  const [subFactions, setSubFactions] = useState({
    faction1: "",
    faction2: "",
    faction3: "",
  });
  const [resources, setResources] = useState({
    minerals: "",
    energy: "",
    food: "",
  });

  // Handle form input changes
  const handleInputChange = (e, setter) => {
    const { name, value } = e.target;
    setter((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e, setter, type) => {
    const { value, checked } = e.target;
    if (checked) {
      setter((prev) => [...prev, value]);
    } else {
      setter((prev) => prev.filter((item) => item !== value));
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      empireName,
      government,
      rulingSystem,
      empireType,
      empireAttributes,
      influence,
      subFactions,
      resources,
    });
    // Here, you could send the data to an API or save it locally
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-8 shadow-xl rounded-lg">
      <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
        Empire Builder
      </h1>

      <form onSubmit={handleSubmit}>
        {/* Empire Name */}
        <div className="mb-6">
          <label
            htmlFor="empire_name"
            className="block text-lg font-medium mb-2"
          >
            Empire Name:
          </label>
          <input
            type="text"
            id="empire_name"
            name="empire_name"
            value={empireName}
            onChange={(e) => setEmpireName(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Government Type */}
        <div className="mb-6">
          <label
            htmlFor="system_of_government"
            className="block text-lg font-medium mb-2"
          >
            System of Government:
          </label>
          <select
            id="system_of_government"
            name="system_of_government"
            value={government}
            onChange={(e) => setGovernment(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="Democracy">Democracy</option>
            <option value="Monarchy">Monarchy</option>
            <option value="Authoritarian">Authoritarian</option>
            <option value="Communist">Communist</option>
            <option value="Theocracy">Theocracy</option>
            <option value="Oligarchy">Oligarchy</option>
            <option value="Federalism">Federalism</option>
          </select>
        </div>

        {/* Ruling System */}
        <div className="mb-6">
          <label
            htmlFor="ruling_system"
            className="block text-lg font-medium mb-2"
          >
            Ruling System:
          </label>
          <select
            id="ruling_system"
            name="ruling_system"
            value={rulingSystem}
            onChange={(e) => setRulingSystem(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="Absolute Monarchy">Absolute Monarchy</option>
            <option value="Representative Democracy">
              Representative Democracy
            </option>
            <option value="Military Dictatorship">Military Dictatorship</option>
            <option value="One-Party State">One-Party State</option>
            <option value="Feudal System">Feudal System</option>
            <option value="Theocratic Rule">Theocratic Rule</option>
          </select>
        </div>

        {/* Empire Type */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Empire Type:</label>
          <div className="space-y-2">
            {[
              "Galactic Empire",
              "Trade Federation",
              "Religious State",
              "Military Power",
              "Scientific Research Hub",
              "Resource Mining Giant",
            ].map((type) => (
              <div key={type}>
                <input
                  type="checkbox"
                  id={type}
                  value={type}
                  checked={empireType.includes(type)}
                  onChange={(e) => handleCheckboxChange(e, setEmpireType)}
                  className="mr-2"
                />
                <label htmlFor={type}>{type}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Empire Attributes */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">
            Empire Attributes:
          </label>
          <div className="space-y-2">
            {[
              "Military Strength",
              "Economic Power",
              "Technological Advancement",
              "Diplomatic Influence",
              "Cultural Richness",
              "Population Size",
            ].map((attribute) => (
              <div key={attribute}>
                <input
                  type="checkbox"
                  id={attribute}
                  value={attribute}
                  checked={empireAttributes.includes(attribute)}
                  onChange={(e) => handleCheckboxChange(e, setEmpireAttributes)}
                  className="mr-2"
                />
                <label htmlFor={attribute}>{attribute}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Empire Influence */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">
            Empire Influence (Scale 1-10):
          </label>
          <div className="space-x-4">
            <input
              type="number"
              name="neighbors"
              value={influence.neighbors}
              onChange={(e) => handleInputChange(e, setInfluence)}
              placeholder="Neighboring factions"
              className="w-1/3 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="number"
              name="stability"
              value={influence.stability}
              onChange={(e) => handleInputChange(e, setInfluence)}
              placeholder="Internal stability"
              className="w-1/3 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="number"
              name="equality"
              value={influence.equality}
              onChange={(e) => handleInputChange(e, setInfluence)}
              placeholder="Social equality"
              className="w-1/3 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Sub-Factions */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">
            Sub-factions (Up to 3):
          </label>
          <div className="space-y-2">
            {["faction1", "faction2", "faction3"].map((faction, index) => (
              <input
                key={index}
                type="text"
                name={faction}
                value={subFactions[faction]}
                onChange={(e) => handleInputChange(e, setSubFactions)}
                placeholder={`Sub-faction ${index + 1} Name`}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Resources:</label>
          <div className="space-x-4">
            <input
              type="number"
              name="minerals"
              value={resources.minerals}
              onChange={(e) => handleInputChange(e, setResources)}
              placeholder="Minerals"
              className="w-1/3 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              name="energy"
              value={resources.energy}
              onChange={(e) => handleInputChange(e, setResources)}
              placeholder="Energy"
              className="w-1/3 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              name="food"
              value={resources.food}
              onChange={(e) => handleInputChange(e, setResources)}
              placeholder="Food"
              className="w-1/3 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500 focus:outline-none"
          >
            Build Empire
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmpireBuilder;
