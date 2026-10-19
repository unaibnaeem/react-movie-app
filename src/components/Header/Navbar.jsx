import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import Search from "./Search";

const navLinks = [
  {
    title: "Watched",
    to: "/watched",
  },
  {
    title: "Favourites",
    to: "/favourites",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="bg-violet-600">
      <div className="mx-auto p-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-between">
          <div>
            <Logo />
          </div>
          <div className="md:w-64 lg:w-96">
            <Search />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-violet-500 hover:text-white"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex text-xl md:hidden">
            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:border-violet-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-violet-800 focus:ring-offset-2 focus:ring-offset-violet-700"
            >
              <span className="sr-only">Open Main Menu</span>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {isOpen ? (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-violet-500 hover:text-white"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;
