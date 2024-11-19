"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios"; // Import axios

const planetspage = () => {
  const [planets, setPlanets] = useState([]);

  // Fetching data with Axios
  useEffect(() => {
    axios
      .get("/planets.json") // Adjust path if needed
      .then((response) => {
        setPlanets(response.data);
      })
      .catch((error) => {
        console.error("Error fetching planets data:", error);
      });
  }, []);

  // Combined stats calculations
  const combinedStats = planets.reduce(
    (acc, planet) => {
      acc.population += planet.population;
      acc.resources.minerals += planet.resources.minerals;
      acc.resources.energy += planet.resources.energy;
      acc.resources.food += planet.resources.food;
      acc.happiness += planet.happiness;
      return acc;
    },
    {
      population: 0,
      resources: {
        minerals: 0,
        energy: 0,
        food: 0,
      },
      happiness: 0,
    }
  );

  const averageHappiness = planets.length
    ? (combinedStats.happiness / planets.length).toFixed(2)
    : 0;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Your Planets</h1>

      {/* Planets List */}
      <div className="grid grid-cols-2 gap-6">
        <div
          className="grid gap-6 md:grid-cols-1 overflow-y-auto"
          style={{ maxHeight: "80vh" }}
        >
          {planets.map((planet) => (
            <div key={planet.id} className="bg-white p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{planet.name}</h2>
              <ul className="text-sm mt-2">
                <li>Population: {planet.population}</li>
                <li>Happiness: {planet.happiness}%</li>
                <li>Minerals: {planet.resources.minerals}</li>
                <li>Energy: {planet.resources.energy}</li>
                <li>Food: {planet.resources.food}</li>
              </ul>
              <div className="mt-4">
                <Link href={`/planetspage/${planet.id}`} passHref>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Manage Planet
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Combined Stats */}
        <div className="sticky top-6 bg-slate-500 m-2 p-4 text-white rounded">
          <h2 className="text-xl font-semibold">Combined Stats</h2>
          <ul className="text-sm mt-2">
            <li>Total Population: {combinedStats.population}</li>
            <li>Average Happiness: {averageHappiness}%</li>
            <li>Total Minerals: {combinedStats.resources.minerals}</li>
            <li>Total Energy: {combinedStats.resources.energy}</li>
            <li>Total Food: {combinedStats.resources.food}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default planetspage;
