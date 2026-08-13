import { NavLink } from "react-router";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto flex flex-col items-center gap-6 px-6 py-8">
        
        <nav className="flex items-center gap-6">
          <NavLink
            to="/"
            className="text-sm text-gray-600 transition-colors hover:text-gray-900"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="text-sm text-gray-600 transition-colors hover:text-gray-900"
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className="text-sm text-gray-600 transition-colors hover:text-gray-900"
          >
            Contact
          </NavLink>
        </nav>

        <p className="text-sm text-gray-500">
          © Felix M. Morales Jr. | All rights reserved.
        </p>

      </div>
    </footer>
  );
}