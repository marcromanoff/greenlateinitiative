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

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "Why Join" },
    { to: "/get-involved", label: "Get Involved" },
    { to: "/process", label: "Process" },
    { to: "/grading", label: "Grading" },
    { to: "/calculator", label: "GreenScore" },
    { to: "/awards", label: "Awards" },
    { to: "/vendors", label: "Vendors" },
    { to: "/downloads", label: "Downloads" },
    { to: "/faq", label: "FAQ" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white border-b relative">
      <div className="max-w-7xl mx-auto px-4">
        {isMobile ? (
          <div>
            <div className="flex justify-between items-center h-16">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-gray-700 transition-all duration-500 transform hover:scale-110"
              >
                <Menu size={24} />
              </button>
            </div>
            {isMenuOpen && (
              <div className="absolute top-16 left-0 w-full bg-white border-b z-50 animate-slide-in-right">
                <div className="flex flex-col p-4 space-y-4">
                  {links.map((link, index) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setIsMenuOpen(false)}
                      className={`px-2 py-1 text-sm font-medium transition-all duration-500 transform hover:scale-105 ${
                        isActive(link.to)
                          ? "text-primary border-l-2 border-primary animate-slide-in-right"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                      style={{ 
                        animationDelay: `${index * 50}ms`,
                        opacity: 0,
                        animation: `slide-in-right 0.5s ease-out ${index * 50}ms forwards`
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex justify-center items-center h-16">
            <div className="flex space-x-8">
              {links.map((link, index) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-all duration-500 transform hover:scale-110 ${
                    isActive(link.to)
                      ? "border-b-2 border-primary text-primary scale-105"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    opacity: 0,
                    animation: `${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} 0.5s ease-out ${index * 100}ms forwards`
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;