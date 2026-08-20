import { useState } from "react";
import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo / Brand */}
          <NavLink to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Felix Logo"
              className="h-10 w-auto object-contain"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-6 sm:space-x-8 md:flex">
            <NavLink
              to="/"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              About
            </NavLink>

            <NavLink
              to="/projects"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              Projects
            </NavLink>

            {/* Contact Button */}
            <NavLink to="/contact">
              <Button>Contact</Button>
            </NavLink>
          </nav>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-gray-700 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col gap-4">

              <NavLink
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                About
              </NavLink>

              <NavLink
                to="/projects"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                Projects
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
              >
                <Button>Contact</Button>
              </NavLink>

            </div>
          </nav>
        )}
      </div>
    </header>
  );
}