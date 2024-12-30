import { Link, useLocation } from "react-router-dom";
import { useIsMobile } from "../hooks/use-mobile";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const menuCategories = [
    {
      title: "About GreenPlate",
      links: [
        { to: "/what-is-greenplate", label: "What is GreenPlate" },
        { to: "/about", label: "Why GreenPlate" },
      ]
    },
    {
      title: "Participation",
      links: [
        { to: "/get-involved", label: "Get Involved" },
        { to: "/ambassador", label: "GreenPlate Ambassador" },
        { to: "/calculator", label: "GreenGauge" },
      ]
    },
    {
      title: "Evaluation Process",
      links: [
        { to: "/process", label: "Process" },
        { to: "/grading", label: "Grading" },
      ]
    },
    {
      title: "Recognition",
      links: [
        { to: "/awards", label: "Awards" },
      ]
    },
    {
      title: "Resources",
      links: [
        { to: "/vendors", label: "Vendors" },
        { to: "/downloads", label: "Downloads" },
      ]
    },
    {
      title: "Support and Information",
      links: [
        { to: "/faq", label: "FAQ" },
        { to: "/contact", label: "Contact" },
      ]
    }
  ];

  return (
    <nav className="bg-white border-b relative">
      <div className="max-w-[98rem] mx-auto px-4">
        {isMobile ? (
          <div>
            <div className="flex justify-between items-center h-16">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-gray-700 transition-all duration-300 transform hover:scale-105"
              >
                <Menu size={24} />
              </button>
            </div>
            {isMenuOpen && (
              <div className="absolute top-16 left-0 w-full bg-white border-b z-50 animate-fade-in">
                <div className="flex flex-col p-4 space-y-6">
                  {menuCategories.map((category, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                        {category.title}
                      </h3>
                      <div className="space-y-2 pl-2">
                        {category.links.map((link) => (
                          <Link
                            key={link.to}
                            to={link.to}
                            onClick={() => setIsMenuOpen(false)}
                            className={`block px-2 py-1 text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                              isActive(link.to)
                                ? "text-primary border-l-2 border-primary animate-fade-in"
                                : "text-gray-500 hover:text-gray-700"
                            }`}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex justify-between items-center h-16">
            <div className="flex justify-between w-full">
              {menuCategories.map((category, index) => (
                <div key={index} className="group relative">
                  <div className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 cursor-pointer">
                    {category.title}
                    <div className="absolute left-0 top-full mt-2 w-48 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      {category.links.map((link) => (
                        <Link
                          key={link.to}
                          to={link.to}
                          className={`block px-4 py-2 text-sm transition-all duration-300 ${
                            isActive(link.to)
                              ? "text-primary bg-gray-50"
                              : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;