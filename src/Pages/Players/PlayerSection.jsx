import { useState } from "react";
import PlayerCard from "../../Components/PlayerCard";
import players from "../../data";
import ButtonToggle from "../../Components/toggle-button/toggle-button";
import SelectedPlayer from "../../Components/selected-player/selected-player";
// import "./player-section.css";

const MAX_PLAYERS = 6;

function PlayerSection({ tokens, setTokens, showAlert }) {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [showAvailable, setShowAvailable] = useState(true);

  const handleToggle = () => {
    setShowAvailable(!showAvailable);
  };

  const handleSelectPlayer = (player) => {
    if (selectedPlayers.length >= MAX_PLAYERS) {
      showAlert.error("Maximum player limit reached.");
      return;
    }
    if (tokens < player.price) {
      showAlert.error("Not enough tokens to buy this player.");
      return;
    }
    if (selectedPlayers.includes(player)) {
      showAlert.error("Player already selected.");
      return;
    }

    setSelectedPlayers([...selectedPlayers, player]);
    setTokens(tokens - player.price);
    showAlert.success(`Congratulations on buying ${player.name}.`);
  };

  const handleRemovePlayer = (player) => {
    setSelectedPlayers(selectedPlayers.filter((p) => p.id !== player.id));
    setTokens(tokens + player.price);
    showAlert.info(`${player.name} has been removed from your squad.`);
  };

  const handleAddMore = () => {
    setShowAvailable(true);
  };

  return (
    <div className="w-9/12 mx-auto mt-12 mb-52">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold text-xl">
          {showAvailable ? "Available Players" : `Selected Players (${selectedPlayers.length}/${MAX_PLAYERS})`}
        </h2>
        <ButtonToggle
          showAvailable={showAvailable}
          toggle={handleToggle}
          selectedCount={selectedPlayers.length}
        />
      </div>

      {showAvailable ? (
        <div className="grid grid-cols-3 gap-4">
          {players.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              onSelect={() => handleSelectPlayer(player)}
              isAvailable
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {selectedPlayers.map((player) => (
            <SelectedPlayer
              key={player.id}
              player={player}
              onRemove={() => handleRemovePlayer(player)}
            />
          ))}
          <div className="flex justify-left mt-6">
            <button
              onClick={handleAddMore}
              className="px-6 py-3 bg-yellow-300 text-black font-semibold rounded-lg hover:bg-yellow-400 transition duration-200"
            >
              Add More
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PlayerSection;