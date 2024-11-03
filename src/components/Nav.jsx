import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="justify-center bg-grey-900 p-3 flex space-x-4  ">
        <Link to="/" className="hover:bg-blue-300 duration-300 rounded">
          Homepage
        </Link>
        <Link to="/service" className="hover:bg-blue-300 duration-300 rounded">
          Service
        </Link>
        <Link to="/portfolio" className="hover:bg-blue-300 duration-300 rounded">
          Portfolio
        </Link>
        <Link to="/contact" className="hover:bg-blue-300 duration-300 rounded">
          Contact
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
