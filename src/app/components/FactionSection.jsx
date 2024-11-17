import React from "react";

const factions = [
  // Religious Factions
  {
    name: "The Caliphate of Noor",
    description:
      "A powerful Islamic theocracy based on the teachings of the Quran and Sharia law.",
    link: "/factions/caliphate-of-noor",
  },
  {
    name: "The Holy Kingdom of Salvia",
    description:
      "A Christian theocracy where divine monarchy and the Church guide the people.",
    link: "/factions/holy-kingdom-of-salvia",
  },
  {
    name: "The Divine Council of Zion",
    description:
      "A Jewish theocracy that draws from the Torah and the divine governance of ancient Israel.",
    link: "/factions/divine-council-of-zion",
  },
  {
    name: "The Vedic Dominion of Dharmapra",
    description:
      "A Hindu theocracy guided by the teachings of the Vedas, emphasizing Dharma and divine rule.",
    link: "/factions/vedic-dominion-of-dharmapra",
  },
  {
    name: "The Divine Empire of Shambhala",
    description:
      "A Buddhist theocracy with rulers seen as enlightened beings who lead with wisdom and compassion.",
    link: "/factions/divine-empire-of-shambhala",
  },
  {
    name: "The Empire of Ahnka",
    description:
      "A Sikh theocracy focused on equality, justice, and service to humanity based on Sikh principles.",
    link: "/factions/empire-of-ahnka",
  },
  {
    name: "The Eternal Order of Ra",
    description:
      "An Egyptian-inspired theocracy ruled by divine monarchs who maintain cosmic order and harmony.",
    link: "/factions/eternal-order-of-ra",
  },
  {
    name: "The Cross and Crescent Union",
    description:
      "An interfaith theocracy that blends the teachings of Christianity and Islam into one governing system.",
    link: "/factions/cross-and-crescent-union",
  },
  {
    name: "The Holy Triumvirate",
    description:
      "A polytheistic theocracy where multiple deities guide governance, blending various ancient traditions.",
    link: "/factions/holy-triumvirate",
  },

  // Democracy Factions
  {
    name: "The United Republic of Novara",
    description:
      "A democratic republic where the people elect their representatives and leaders.",
    link: "/factions/united-republic-of-novara",
  },
  {
    name: "The Federation of Solaria",
    description:
      "A federation of self-governing states bound together by a shared democratic constitution.",
    link: "/factions/federation-of-solaria",
  },
  {
    name: "The Commonwealth of Thallia",
    description:
      "A representative democracy where citizens hold the power to vote on policies and leaders.",
    link: "/factions/commonwealth-of-thallia",
  },
  {
    name: "The Free States of Galia",
    description:
      "A decentralized democracy where each state has significant autonomy while participating in a common union.",
    link: "/factions/free-states-of-galia",
  },

  // Autocracy Factions
  {
    name: "The Dominion of Aztar",
    description:
      "An autocratic state ruled by a single, absolute ruler who holds full control over the empire.",
    link: "/factions/dominion-of-aztar",
  },
  {
    name: "The Supreme Empire of Draxia",
    description:
      "An empire where a supreme ruler makes all decisions, with limited input from the population.",
    link: "/factions/supreme-empire-of-draxia",
  },
  {
    name: "The Tyranny of Belhara",
    description:
      "A brutal regime ruled by a tyrant, with the people having little to no power in governance.",
    link: "/factions/tyranny-of-belhara",
  },

  // Monarchy Factions
  {
    name: "The Empire of Lysandria",
    description:
      "A powerful monarchy with a hereditary ruler who holds near absolute power over the empire.",
    link: "/factions/empire-of-lysandria",
  },
  {
    name: "The Royal Federation of Althoria",
    description:
      "A monarchy where a royal family rules the nation, with various noble families holding territories.",
    link: "/factions/royal-federation-of-althoria",
  },
  {
    name: "The Kingdom of Glorian",
    description:
      "A classical kingdom ruled by a monarch with the support of a powerful aristocracy.",
    link: "/factions/kingdom-of-glorian",
  },

  // Oligarchy Factions
  {
    name: "The Oligarchic Syndicate of Felaion",
    description:
      "An oligarchy where a small group of wealthy individuals and corporations control the state.",
    link: "/factions/oligarchic-syndicate-of-felaion",
  },
  {
    name: "The Syndicate of Zorath",
    description:
      "A capitalist oligarchy where a handful of elite families control both the economy and politics.",
    link: "/factions/syndicate-of-zorath",
  },
  {
    name: "The Aristocratic Coalition of Fersan",
    description:
      "An oligarchy composed of a coalition of aristocratic families ruling with a shared vision.",
    link: "/factions/aristocratic-coalition-of-fersan",
  },

  // Technocracy Factions
  {
    name: "The Technocratic Federation of Syphar",
    description:
      "A technocracy governed by experts and scientists who prioritize technological advancement and innovation.",
    link: "/factions/technocratic-federation-of-syphar",
  },
  {
    name: "The Council of Syntha",
    description:
      "A technocratic government where elected leaders must have proven technical expertise to rule.",
    link: "/factions/council-of-syntha",
  },

  // Military Dictatorship Factions
  {
    name: "The Military Junta of Regarda",
    description:
      "A military dictatorship where the armed forces control the state and the government is led by a general.",
    link: "/factions/military-junta-of-regarda",
  },
  {
    name: "The Iron Fist of Novior",
    description:
      "A harsh military regime led by a powerful general, enforcing strict laws and discipline.",
    link: "/factions/iron-fist-of-novior",
  },

  // Other Factions (Non-Category)
  {
    name: "The Autonomous Collective of Zepheron",
    description:
      "A cooperative faction where all members work towards mutual prosperity and collective decision-making.",
    link: "/factions/autonomous-collective-of-zepheron",
  },
  {
    name: "The Interstellar Corporate Guild",
    description:
      "A corporate-run faction where powerful corporations control the economy and dictate the direction of the state.",
    link: "/factions/interstellar-corporate-guild",
  },
];

const FactionsSection = () => {
  return (
    <section id="factions" className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Factions</h2>
        <p className="text-center mb-12">
          Choose from a variety of factions, each with its unique governing
          principles, culture, and gameplay. Explore each faction to understand
          their values and strategies.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {factions.map((faction, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">{faction.name}</h3>
              <p className="text-lg mb-4">{faction.description}</p>
              <a
                href={faction.link}
                className="text-red-600 hover:text-red-800 font-semibold"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactionsSection;
