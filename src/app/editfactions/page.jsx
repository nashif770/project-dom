"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import * as XLSX from "xlsx";

const editfactions = () => {
  const [factions, setFactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch faction data from the JSON file
  useEffect(() => {
    axios
      .get("/factionDetails.json") // Replace with the correct path to your factions JSON file
      .then((response) => {
        setFactions(response.data); // Assuming the JSON is an array of faction objects
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load faction data.");
        setLoading(false);
      });
  }, []);

  // Loading state
  if (loading) {
    return <div className="text-center text-xl">Loading factions...</div>;
  }

  // Error state
  if (error) {
    return <div className="text-center text-xl text-red-500">{error}</div>;
  }

  // Function to export data to Excel
  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(
      factions.map((faction) => ({
        Name: faction.name,
        Region: faction.region,
        Leader: faction.leader,
        Population: faction.population,
        "Fleet Size": faction.fleetSize,
        Homeworld: faction.homeworld,
        Strengths: faction.strengths.join(", "),
        Weaknesses: faction.weaknesses.join(", "),
        Allies: faction.allies.join(", "),
        Rivals: faction.rivals.join(", "),
        Resources: faction.resources.join(", "),
        "Primary Exports": faction.primaryExports.join(", "),
        Currency: faction.currency,
        "Special Units": faction.specialUnits.join(", "),
        "Defensive Capabilities": faction.defensiveCapabilities.join(", "),
        "Cultural Values": faction.culturalValues.join(", "),
        Languages: faction.languages.join(", "),
        Religions: `${
          faction.religion.dominantBeliefs
        } | ${faction.religion.philosophicalMovements
          .map((movement) => movement.name)
          .join(", ")}`,
        Philosophy: `${faction.philosophy.dominantIdeologies.join(
          ", "
        )} | ${faction.philosophy.keyPhilosophers
          .map((philosopher) => philosopher.name)
          .join(", ")}`,
        History: faction.history,
        "Player Role": faction.playerRole.ally,
        "AI Behavior": `${faction.aiBehavior.diplomatic} | ${faction.aiBehavior.strategic} | ${faction.aiBehavior.combat}`,
        "Negative Traits": `${faction.negativeTraits.techDependency} | ${faction.negativeTraits.isolationistTendencies}`,
      }))
    );
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Factions");
    XLSX.writeFile(wb, "factions.xlsx");
  };

  return (
    <div className="p-3">
      <h1 className="text-4xl font-semibold text-center mb-8 text-black">
        Faction Details
      </h1>
      <button
        onClick={exportToExcel}
        className="bg-green-500 text-white px-4 py-2 rounded-lg mb-4 hover:bg-green-700 transition-colors"
      >
        Export to Excel
      </button>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Sl No.
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Name
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Region
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Leader
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Population
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Fleet Size
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Homeworld
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Strengths
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Weaknesses
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Allies
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Rivals
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Resources
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Primary Exports
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Currency
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Special Units
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Defensive Capabilities
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Cultural Values
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Languages
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Religions
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Philosophy
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                History
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Player Role
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                AI Behavior
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Negative Traits
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {factions.map((faction, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-2 border border-gray-300">
                  {index + 1}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {faction.name}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {faction.region}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {faction.leader}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {faction.population}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {faction.fleetSize}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {faction.homeworld}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {faction.strengths.join(", ")}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {faction.weaknesses.join(", ")}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {faction.allies.join(", ")}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {faction.rivals.join(", ")}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {faction.resources.join(", ")}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {faction.primaryExports.join(", ")}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {faction.currency}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {faction.specialUnits.join(", ")}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {faction.defensiveCapabilities.join(", ")}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {faction.culturalValues.join(", ")}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {faction.languages.join(", ")}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {faction.religion.dominantBeliefs} |{" "}
                  {faction.religion.philosophicalMovements
                    .map((movement) => movement.name)
                    .join(", ")}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {faction.philosophy.dominantIdeologies.join(", ")} |{" "}
                  {faction.philosophy.keyPhilosophers
                    .map((philosopher) => philosopher.name)
                    .join(", ")}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {faction.history}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {faction.playerRole.ally}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {faction.aiBehavior.diplomatic} |{" "}
                  {faction.aiBehavior.strategic} | {faction.aiBehavior.combat}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {faction.negativeTraits.techDependency} |{" "}
                  {faction.negativeTraits.isolationistTendencies}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <Link
                    href={`/editfaction/${faction.id}`}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default editfactions;
