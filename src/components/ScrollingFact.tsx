import { useEffect, useState } from "react";

interface ScrollingFactProps {
  fact: string;
}

const ScrollingFact = ({ fact }: ScrollingFactProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-secondary/10 py-4">
      <div
        className={`animate-scroll-left whitespace-nowrap text-primary font-semibold ${
          isVisible ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        {fact}
      </div>
    </div>
  );
};

export default ScrollingFact;