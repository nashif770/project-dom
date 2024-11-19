import React from "react";

const PlanetStatus = ({ planet }) => {
  console.log(planet);
  if (!planet) return <div>Planet not found!</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-6 rounded shadow-md">
        <table className="min-w-full table-auto">
          <tbody>
            <tr className=" text-center ">
              <td className="px-4 py-2 font-semibold">Population</td>
              <td className="px-4 py-2 font-semibold">Happiness</td>
              <td className="px-4 py-2 font-semibold">Minerals</td>
              <td className="px-4 py-2 font-semibold">Energy</td>
              <td className="px-4 py-2 font-semibold">Food</td>
            </tr>
            <tr className="text-center">
              <td className="px-4 py-2">{planet.population}</td>
              <td className="px-4 py-2">{planet.happiness}%</td>
              <td className="px-4 py-2">{planet.resources.minerals}</td>
              <td className="px-4 py-2">{planet.resources.energy}</td>
              <td className="px-4 py-2">{planet.resources.food}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlanetStatus;
