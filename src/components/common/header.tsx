import { useState } from "react";
import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo / Brand */}
          <div className="shrink-0">
            <NavLink
              to="/"
              className="text-xl font-bold text-gray-900"
            >
              IRON59
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 sm:space-x-8">
            <NavLink
              to="/"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
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
            className="md:hidden text-2xl text-gray-700"
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden border-t border-gray-200 py-4">
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