const Navbar = () => {
    return (
      <nav className="navbar bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
        {/* Left Side - Logo */}
        <div className="flex items-center">
          <a className="text-2xl font-bold tracking-wide uppercase">War Room</a>
        </div>
  
        {/* Center - Navigation Links (Hidden on Small Screens) */}
        <div className="hidden md:flex space-x-6 navbar-center">
          <a href="/" className="hover:text-yellow-400 cursor-pointer transition">Home</a>
          <a href="/players" className="hover:text-yellow-400 cursor-pointer transition">Players</a>
          <a className="hover:text-yellow-400 cursor-pointer transition">Auction</a>
          <a className="hover:text-yellow-400 cursor-pointer transition">Leaderboard</a>
        </div>
  
        {/* Right Side - Join Auction & Profile */}
        <div className="flex items-center gap-4">
          <button className="btn bg-yellow-500 hover:bg-yellow-600 text-black px-5 py-2 rounded-lg font-semibold hidden md:block">
            Join Auction
          </button>
  
          {/* Mobile Menu Button */}
          <div className="md:hidden dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-800 rounded-lg mt-3 w-52 p-2 shadow-lg text-white"
            >
              <li><a className="hover:text-yellow-400 cursor-pointer transition">Home</a></li>
              <li><a className="hover:text-yellow-400 cursor-pointer transition">Players</a></li>
              <li><a className="hover:text-yellow-400 cursor-pointer transition">Auction</a></li>
              <li><a className="hover:text-yellow-400 cursor-pointer transition">Leaderboard</a></li>
              <li><a className="hover:text-yellow-400 cursor-pointer transition">Join Auction</a></li>
            </ul>
          </div>
  
          {/* User Profile Dropdown */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-800 rounded-lg mt-3 w-52 p-2 shadow-lg text-white"
            >
              <li>
                <a className="hover:text-yellow-400 transition">Profile</a>
              </li>
              <li>
                <a className="hover:text-yellow-400 transition">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;