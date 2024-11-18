"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const Factions = () => {
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

  return (
    <div className="p-3">
      <h1 className="text-4xl font-semibold text-center mb-8 text-black">
        Faction Details
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {factions.map((faction, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition-transform"
          >
            <h2 className="text-2xl font-bold text-blue-600">{faction.name}</h2>
            <h2 className="font-bold text-slate-900">{faction.region}</h2>
            <p className="text-gray-700 my-2">{faction.description}</p>
            <p className="text-gray-500 italic">{faction.tagline}</p>
            <div className="mt-4 text-black">
              <p>
                <strong>Leader:</strong> {faction.leader}
              </p>
              <p>
                <strong>Population:</strong> {faction.population}
              </p>
              <p>
                <strong>Fleet Size:</strong> {faction.fleetSize}
              </p>
              <p>
                <strong>Homeworld:</strong> {faction.homeworld}
              </p>
            </div>

            {/* Show More button with Next.js Link */}
            <Link href={`/factions/${faction.id}`} passHref>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Show More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Factions;
