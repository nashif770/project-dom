"use client";
import PlanetStatus from "@/app/planetComponents/PlanetStatus";
import PlanetSummary from "@/app/planetComponents/PlanetSummery";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Planet = ({ params }) => {
  const [planet, setPlanet] = useState(null);
  const { id } = React.use(params); // Extract planet id from params

  useEffect(() => {
    axios
      .get("/planets.json") // Adjust path if needed
      .then((response) => {
        // Find the planet by ID
        const planetData = response.data.find(
          (planet) => planet.id === parseInt(id)
        ); // Assuming the ID is a number
        setPlanet(planetData); // Set the found planet data
      })
      .catch((error) => {
        console.error("Error fetching planets data:", error);
      });
  }, [id]);

  // Handling planet not found
  if (planet === null) return <div>Loading...</div>;
  if (!planet) return <div>Planet not found!</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-4">{planet.name}</h1>
      <PlanetStatus planet={planet}></PlanetStatus>
      <PlanetSummary planet={planet}></PlanetSummary>
    </div>
  );
};

export default Planet;
