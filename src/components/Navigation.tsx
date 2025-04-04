
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useIsMobile } from "../hooks/use-mobile";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "./ui/button";
import { toast } from "sonner";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const { user, signOut, isAdmin, roles } = useAuth();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const goToAdminDashboard = () => {
    navigate('/admin');
  };

  console.log('Navigation render - Auth state:', { 
    userEmail: user?.email,
    isAdmin,
    roles,
    userId: user?.id 
  });

  const handleSignOut = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (isSigningOut) return;

    console.log('Sign out clicked');
    setIsSigningOut(true);
    
    try {
      console.log('Attempting to sign out...');
      await signOut();
      console.log('Successfully signed out');
    } catch (error) {
      console.error('Error signing out:', error);
      toast.error('Failed to sign out');
      setIsSigningOut(false);
    }
  };

  const links = [
    { to: "/", label: "Home" },
    { to: "/what-is-greenplate", label: "What is GreenPlate" },
    { to: "/get-involved", label: "Get Involved" },
    { to: "/process", label: "Process" },
    { to: "/points-system", label: "Points System" },
    { to: "/grading", label: "Grading" },
    { to: "/awards", label: "Medals & Awards" },
    { to: "/vendors", label: "Vendors" },
    { to: "/downloads", label: "Downloads" },
    { to: "/faq", label: "FAQ" },
    { to: "/contact", label: "Contact" },
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
              <div className="flex items-center gap-2">
                {user ? (
                  <>
                    {isAdmin && (
                      <Button 
                        variant="default"
                        size="sm"
                        onClick={goToAdminDashboard}
                      >
                        Admin Dashboard
                      </Button>
                    )}
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={handleSignOut}
                      disabled={isSigningOut}
                    >
                      {isSigningOut ? 'Signing out...' : 'Sign Out'}
                    </Button>
                  </>
                ) : (
                  <Link to="/auth">
                    <Button variant="outline" size="sm">
                      Sign In
                    </Button>
                  </Link>
                )}
              </div>
            </div>
            {isMenuOpen && (
              <div className="absolute top-16 left-0 w-full bg-white border-b z-50 animate-fade-in">
                <div className="flex flex-col p-4 space-y-4">
                  {links.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setIsMenuOpen(false)}
                      className={`px-2 py-1 text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
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
            )}
          </div>
        ) : (
          <div className="flex justify-between items-center h-16">
            <div className="flex justify-between flex-1">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    isActive(link.to)
                      ? "border-b-2 border-primary text-primary animate-fade-in scale-105"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="ml-4 flex items-center gap-4">
              {user ? (
                <>
                  {isAdmin && (
                    <Button 
                      variant="default"
                      size="sm"
                      onClick={goToAdminDashboard}
                    >
                      Admin Dashboard
                    </Button>
                  )}
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleSignOut}
                    disabled={isSigningOut}
                  >
                    {isSigningOut ? 'Signing out...' : 'Sign Out'}
                  </Button>
                </>
              ) : (
                <Link to="/auth">
                  <Button variant="outline" size="sm">
                    Sign In
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
