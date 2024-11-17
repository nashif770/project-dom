const GameOverview = () => {
  return (
    <div className="bg-gray-800 text-white py-16 px-4" id="game-overview">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-8">
          Game Overview
        </h2>
        <p className="text-lg leading-relaxed text-center mb-8">
          Step into a galaxy teeming with civilizations, intrigue, and endless
          possibilities. In this game, you’ll manage planets, trade resources,
          build fleets, and participate in galaxy-wide conflicts to shape the
          future of your empire. The journey begins with managing a single
          planet but could end with you ruling entire sectors of space.
        </p>
        <div className="flex justify-center">
          <a
            href="#features"
            className="bg-red-600 text-white text-lg px-6 py-3 rounded-full hover:bg-red-700 transition duration-300"
          >
            Explore Features
          </a>
        </div>
      </div>
    </div>
  );
};

export default GameOverview;
