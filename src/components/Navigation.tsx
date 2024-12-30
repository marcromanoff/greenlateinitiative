import { Link, useLocation } from "react-router-dom";
import { useIsMobile } from "../hooks/use-mobile";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      label: "Home",
      to: "/",
      standalone: true,
    },
    {
      label: "About GreenPlate",
      items: [
        { label: "What is GreenPlate", to: "/what-is-greenplate" },
        { label: "Why GreenPlate", to: "/about" },
      ],
    },
    {
      label: "Participation",
      items: [
        { label: "Get Involved", to: "/get-involved" },
        { label: "GreenPlate Ambassador", to: "/ambassador" },
        { label: "GreenGauge", to: "/calculator" },
      ],
    },
    {
      label: "Evaluation Process",
      items: [
        { label: "Process", to: "/process" },
        { label: "Grading", to: "/grading" },
      ],
    },
    {
      label: "Recognition",
      items: [{ label: "Awards", to: "/awards" }],
    },
    {
      label: "Resources",
      items: [
        { label: "Vendors", to: "/vendors" },
        { label: "Downloads", to: "/downloads" },
      ],
    },
    {
      label: "Support and Information",
      items: [
        { label: "FAQ", to: "/faq" },
        { label: "Contact", to: "/contact" },
      ],
    },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const renderMobileMenu = () => (
    <div>
      <div className="flex justify-between items-center h-16 px-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-500 hover:text-gray-700 transition-all duration-300"
        >
          <Menu size={24} />
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b z-50 animate-fade-in">
          <div className="flex flex-col p-4 space-y-4">
            {menuItems.map((item, index) => (
              <div key={index} className="space-y-2">
                {item.standalone ? (
                  <Link
                    to={item.to!}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-2 py-1 text-sm font-medium transition-all duration-300 ${
                      isActive(item.to!)
                        ? "text-primary border-l-2 border-primary"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <div className="text-sm font-semibold text-gray-900 px-2">
                      {item.label}
                    </div>
                    <div className="pl-4 space-y-1">
                      {item.items?.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.to}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block px-2 py-1 text-sm transition-all duration-300 ${
                            isActive(subItem.to)
                              ? "text-primary border-l-2 border-primary"
                              : "text-gray-500 hover:text-gray-700"
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderDesktopMenu = () => (
    <NavigationMenu className="max-w-none justify-start px-4">
      <NavigationMenuList className="space-x-2">
        {menuItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            {item.standalone ? (
              <Link
                to={item.to!}
                className={`inline-flex items-center px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-gray-100 ${
                  isActive(item.to!)
                    ? "text-primary bg-gray-50"
                    : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <>
                <NavigationMenuTrigger
                  className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 ${
                    item.items?.some((subItem) => isActive(subItem.to))
                      ? "text-primary"
                      : "text-gray-700"
                  }`}
                >
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute left-0 top-full w-auto animate-fade-in z-50">
                  <div className="grid w-[200px] gap-2 p-4 bg-white shadow-lg rounded-lg">
                    {item.items?.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.to}
                        className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 ${
                          isActive(subItem.to)
                            ? "text-primary bg-gray-50"
                            : "text-gray-700"
                        }`}
                      >
                        <div className="text-sm font-medium leading-none">
                          {subItem.label}
                        </div>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );

  return (
    <nav className="bg-white border-b fixed w-full top-0 z-50">
      <div className="max-w-[98rem] mx-auto">
        {isMobile ? renderMobileMenu() : renderDesktopMenu()}
      </div>
    </nav>
  );
};

export default Navigation;