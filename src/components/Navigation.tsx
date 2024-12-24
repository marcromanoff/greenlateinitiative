import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white border-b">
      <div className="flex justify-between items-center h-16">
        <div className="flex space-x-8 px-4">
          <Link
            to="/"
            className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
              isActive("/")
                ? "border-b-2 border-primary text-primary"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
              isActive("/about")
                ? "border-b-2 border-primary text-primary"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            About
          </Link>
          <Link
            to="/grading"
            className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
              isActive("/grading")
                ? "border-b-2 border-primary text-primary"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Grading
          </Link>
          <Link
            to="/process"
            className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
              isActive("/process")
                ? "border-b-2 border-primary text-primary"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Process
          </Link>
          <Link
            to="/awards"
            className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
              isActive("/awards")
                ? "border-b-2 border-primary text-primary"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Awards
          </Link>
          <Link
            to="/get-involved"
            className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
              isActive("/get-involved")
                ? "border-b-2 border-primary text-primary"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Get Involved
          </Link>
          <Link
            to="/downloads"
            className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
              isActive("/downloads")
                ? "border-b-2 border-primary text-primary"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Downloads
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;