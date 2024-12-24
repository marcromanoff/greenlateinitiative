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
    <div className="w-full overflow-hidden bg-secondary/10 py-4 my-8">
      <div
        className={`inline-block whitespace-nowrap animate-scroll-left text-primary font-semibold ${
          isVisible ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000`}
      >
        {/* Double the text to create seamless loop */}
        <span className="mr-16">{fact}</span>
        <span>{fact}</span>
      </div>
    </div>
  );
};

export default ScrollingFact;