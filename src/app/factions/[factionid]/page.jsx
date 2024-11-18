"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const FactionDetail = ({ params }) => {
  const [faction, setFaction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isClient, setIsClient] = useState(false);

  const { factionid } = React.use(params);
  const id = factionid;

  useEffect(() => {
    setIsClient(true); // Set isClient to true once the component has mounted
  }, []);

  useEffect(() => {
    if (id && isClient) {
      axios
        .get(`/factionDetails.json`) // Fetch from the JSON file
        .then((response) => {
          const selectedFaction = response.data.find(
            (faction) => faction.id === id
          );
          setFaction(selectedFaction);
          setLoading(false);
        })
        .catch((err) => {
          setError("Failed to load faction details.");
          setLoading(false);
        });
    }
  }, [id, isClient]);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  if (loading) {
    return <div>Loading faction details...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!faction) {
    return <div>Faction not found.</div>;
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-4xl font-bold">{faction.name}</h1>
      <p>{faction.description}</p>

      <p>
        <strong>Tagline:</strong> {faction.tagline}
      </p>
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
      <p>
        <strong>Region:</strong> {faction.region}
      </p>
      <p>
        <strong>Country:</strong> {faction.country}
      </p>
      <p>
        <strong>Ruling System:</strong> {faction.rulingSystem}
      </p>
      <p>
        <strong>Core Philosophy:</strong> {faction.corePhilosophy}
      </p>
      <p>
        <strong>Influence:</strong> {faction.influence}
      </p>
      <p>
        <strong>Species:</strong> {faction.species.join(", ")}
      </p>

      <div>
        <strong>Diversity:</strong>
        <ul className="list-disc pl-6">
          {Object.entries(faction.diversity).map(([species, percentage]) => (
            <li key={species}>
              {species}: {percentage}%
            </li>
          ))}
        </ul>
      </div>

      <div>
        <strong>Controlled Regions:</strong>
        <ul className="list-disc pl-6">
          {faction.controlledRegions.map((region, index) => (
            <li key={index}>{region}</li>
          ))}
        </ul>
      </div>

      <div>
        <strong>Resources:</strong>
        <ul className="list-disc pl-6">
          {faction.resources.map((resource, index) => (
            <li key={index}>{resource}</li>
          ))}
        </ul>
      </div>

      <div>
        <strong>Allies:</strong>
        <ul className="list-disc pl-6">
          {faction.allies.map((ally, index) => (
            <li key={index}>{ally}</li>
          ))}
        </ul>
      </div>

      <div>
        <strong>Rivals:</strong>
        <ul className="list-disc pl-6">
          {faction.rivals.map((rival, index) => (
            <li key={index}>{rival}</li>
          ))}
        </ul>
      </div>

      <div>
        <strong>Neutral:</strong>
        <ul className="list-disc pl-6">
          {faction.neutral.map((neutral, index) => (
            <li key={index}>{neutral}</li>
          ))}
        </ul>
      </div>

      <div>
        <strong>Primary Exports:</strong>
        <ul className="list-disc pl-6">
          {faction.primaryExports.map((exportItem, index) => (
            <li key={index}>{exportItem}</li>
          ))}
        </ul>
      </div>

      <div>
        <strong>Primary Imports:</strong>
        <ul className="list-disc pl-6">
          {faction.primaryImports.map((importItem, index) => (
            <li key={index}>{importItem}</li>
          ))}
        </ul>
      </div>

      <p>
        <strong>Currency:</strong> {faction.currency}
      </p>

      <div>
        <strong>Special Units:</strong>
        <ul className="list-disc pl-6">
          {faction.specialUnits.map((unit, index) => (
            <li key={index}>{unit}</li>
          ))}
        </ul>
      </div>

      <div>
        <strong>Defensive Capabilities:</strong>
        <ul className="list-disc pl-6">
          {faction.defensiveCapabilities.map((defense, index) => (
            <li key={index}>{defense}</li>
          ))}
        </ul>
      </div>

      <div>
        <strong>Cultural Values:</strong>
        <ul className="list-disc pl-6">
          {faction.culturalValues.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>

      <div>
        <strong>Languages:</strong>
        <ul className="list-disc pl-6">
          {faction.languages.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </div>

      <p>
        <strong>History:</strong> {faction.history}
      </p>

      <div>
        <strong>Religion:</strong>
        <p>Dominant Beliefs: {faction.religion.dominantBeliefs}</p>
        <strong>Philosophical Movements:</strong>
        <ul className="list-disc pl-6">
          {faction.religion.philosophicalMovements.map((movement, index) => (
            <li key={index}>
              {movement.name} ({movement.adherents}%): {movement.focus}
            </li>
          ))}
        </ul>

        <div>
          <strong>Minor Religions:</strong>
          <ul className="list-disc pl-6">
            {faction.religion.minorReligions.map((minorReligion, index) => (
              <li key={index}>{minorReligion}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <strong>Philosophy:</strong>
        <strong>Dominant Ideologies:</strong>
        <ul className="list-disc pl-6">
          {faction.philosophy.dominantIdeologies.map((ideology, index) => (
            <li key={index}>{ideology}</li>
          ))}
        </ul>

        <div>
          <strong>Key Philosophers:</strong>
          <ul className="list-disc pl-6">
            {faction.philosophy.keyPhilosophers.map((philosopher, index) => (
              <li key={index}>
                {philosopher.name} (Works: {philosopher.works.join(", ")})
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <strong>Player Role:</strong>
        <p>{faction.playerRole.ally}</p>
        <p>{faction.playerRole.adversary}</p>
      </div>

      <div>
        <strong>AI Behavior:</strong>
        <p>
          <strong>Diplomatic:</strong> {faction.aiBehavior.diplomatic}
        </p>
        <p>
          <strong>Strategic:</strong> {faction.aiBehavior.strategic}
        </p>
        <p>
          <strong>Combat:</strong> {faction.aiBehavior.combat}
        </p>
        <div>
          <strong>Negative Traits:</strong>
          <ul className="list-disc pl-6">
            {Object.entries(faction.aiBehavior.negative).map(
              ([trait, description], index) => (
                <li key={index}>
                  {trait}: {description}
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      <div>
        <strong>Negative Traits:</strong>
        <ul className="list-disc pl-6">
          {Object.entries(faction.negativeTraits).map(
            ([trait, description], index) => (
              <li key={index}>
                {trait}: {description}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default FactionDetail;
