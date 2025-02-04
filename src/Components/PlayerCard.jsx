import icon from '../assets/user.png';
import flag from '../assets/finish.png';

const PlayerCard = ({ player, onSelect, isAvailable }) => {
  const { image, name, country, role, battingStyle, bowlingStyle, price } = player;
  
  return (
    <div className="rounded-lg p-4 border-2">
      <img src={image} alt={name} className="rounded-lg w-full h-[200px] object-cover" />
      
      <div className="flex items-center mt-4">
        <img src={icon} alt="Icon" className='w-6' />
        <h3 className="text-xl font-bold text-left">&nbsp;{name}</h3>
      </div>
      
      <div className="flex justify-between items-center border-b py-4">
        <div className='flex items-center'>
          <img src={flag} alt="Flag" className='w-4 h-4' />
          <p className="text-gray-500">&nbsp;{country}</p>
        </div>
        <p className="bg-gray-200 px-2 py-1 rounded-md">{role}</p>
      </div>
      
      <p className="text-left font-bold text-lg py-1">Rating</p>
      <div className="flex justify-between items-center py-2">
        <p>{battingStyle}</p>
        <p className="text-gray-600">{bowlingStyle}</p>
      </div>
      
      <div className="flex justify-between items-center mt-1">
        <p>Price: ${price.toLocaleString()}</p>
        {isAvailable && (
          <button 
            onClick={onSelect} 
            className="border-2 px-2 py-1 rounded-md hover:bg-yellow-300 hover:border-yellow-300"
          >
            Choose Player
          </button>
        )}
      </div>
    </div>
  );
};

export default PlayerCard;
