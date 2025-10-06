import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
        const links = <>
        <Link to='/'><li className="m-3 font-extrabold ">Home</li></Link>
       <Link to='/about'><li className="m-3 font-extrabold ">About</li></Link>
       <Link to='/readList'><li className="m-3 font-extrabold ">ReadList</li></Link>
        </>
  return (
    <div className=" bg-base-100 shadow-sm">
    <div className=" navbar max-w-6xl mx-auto">
        <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
     

        <a className="text-3xl font-extrabold"><span className="text-[#50B1C9]">Book </span>| Vibes</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end gap-4  ">
           <button className="w-23 btn btn-info hover:saturate-50 hover:rotate-y-20 ">Sing in</button>
        <a className=" w-23 btn btn-success hover:saturate-50 hover:rotate-y-12">Sing up</a>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
