import React from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setLoggedIn = props.setLoggedIn;
  return (
    <div className="flex w-full p-2 px-10 bg-white text-2xl justify-between text-black">
      <Link className="text-red-500" to="/">
        <a>KanganMane</a>
      </Link>
      <nav className="flex justify-center items-center">
        <ul className="flex text-lg gap-6 text-black">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">ContactUs</Link>
          </li>
        </ul>
      </nav>
      <div className="text-lg gap-6 flex flex-row text-black">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="cursor-pointer mybtn text-black" >Log In</button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="signup">
            <button className="cursor-pointer mybtn text-black" >Sign Up</button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button className="cursor-pointer mybtn text-black" 
              onClick={() => {
                setLoggedIn(false);
                toast.success("Logged  Out Successfully")
              }}
            >
              Log Out
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="dashboard">
            <button className="cursor-pointer mybtn text-black" >Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
