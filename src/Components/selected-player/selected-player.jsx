
function SelectedPlayer({ player, onRemove }) {
  return (
    <div className="flex border-2 rounded-lg p-4 items-center justify-between">
        <div className="flex gap-6 items-center">
            <img
                src={player.image}
                alt={player.name}
                className="w-[80px] h-[80px] rounded-lg"
            />
            <div className="flex flex-col text-left gap-1">
                <h3>{player.name}</h3>
                <p className="text-gray-600 text-sm">{player.role}</p>
                <p className="text-gray-600 text-sm">Price: ${player.price.toLocaleString()}</p>
            </div>
        </div>
        <div>
            <button onClick={onRemove} className="border-2 rounded-lg p-2">
                Remove Player
            </button>
        </div>
    </div>
  );
}

export default SelectedPlayer;
