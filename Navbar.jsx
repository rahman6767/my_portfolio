import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold text-green-600">
          Abdur Rahman
        </h1>

        <div className="space-x-6">
          <NavLink to="/" className="hover:text-green-600">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-green-600">
            About
          </NavLink>
          <NavLink to="/projects" className="hover:text-green-600">
            Projects
          </NavLink>
          <NavLink to="/contact" className="hover:text-green-600">
            Contact
          </NavLink>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
