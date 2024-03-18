import React from "react";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="bg-white h-10 flex gap-16 justify-center items-center text-lg ">
          <li>
            <a href="#" className="hover:text-red-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-400">
              Browse
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-400">
              How it works
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-400">
              Our Plans
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-400">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-400">
              Contact us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-400">
              Help
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-400">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-400">
              Referal
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
