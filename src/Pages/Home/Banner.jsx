import { useState, useEffect } from "react";

const Banner = () => {
  // Countdown Timer Logic
  const [timeLeft, setTimeLeft] = useState("2h 15m 30s");

  useEffect(() => {
    const timer = setInterval(() => {
      // Simulating countdown for example; replace with real time logic
      setTimeLeft((prev) => {
        const [h, m, s] = prev.split(/[hms ]+/).filter(Boolean).map(Number);
        let totalSeconds = h * 3600 + m * 60 + s - 1;
        if (totalSeconds <= 0) return "Auction Started!";
        const newH = Math.floor(totalSeconds / 3600);
        const newM = Math.floor((totalSeconds % 3600) / 60);
        const newS = totalSeconds % 60;
        return `${newH}h ${newM}m ${newS}s`;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div
        className="hero min-h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url(https://i.cdn.newsbytesapp.com/images/l197_39251611736143.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay absolute bg-black bg-opacity-80"></div>
        <div className="hero-content text-white">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-6xl font-extrabold uppercase">
              Bid. Win. Dominate!
            </h1>
            <p className="mb-5 text-lg">
              Join the most thrilling university player auction and build your dream team!
            </p>
            <div className="mb-5 text-xl font-semibold">
              Next Auction Starts In: <span className="text-yellow-400">{timeLeft}</span>
            </div>
            <div className="flex gap-4 justify-center">
              <button className="btn btn-primary px-6 py-1 text-lg">Join Auction</button>
              <button className="btn btn-outline px-6 py-1 text-lg">View Players</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;