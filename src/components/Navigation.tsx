import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-primary">
            GreenPlate Initiative
          </Link>
          <div className="flex space-x-4">
            <Link
              to="/"
              className={`${
                isActive("/") ? "text-primary" : "text-gray-600"
              } hover:text-primary transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${
                isActive("/about") ? "text-primary" : "text-gray-600"
              } hover:text-primary transition-colors`}
            >
              About
            </Link>
            <Link
              to="/grading"
              className={`${
                isActive("/grading") ? "text-primary" : "text-gray-600"
              } hover:text-primary transition-colors`}
            >
              Grading
            </Link>
            <Link
              to="/get-involved"
              className={`${
                isActive("/get-involved") ? "text-primary" : "text-gray-600"
              } hover:text-primary transition-colors`}
            >
              Get Involved
            </Link>
            <Link
              to="/downloads"
              className={`${
                isActive("/downloads") ? "text-primary" : "text-gray-600"
              } hover:text-primary transition-colors`}
            >
              Downloads
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;