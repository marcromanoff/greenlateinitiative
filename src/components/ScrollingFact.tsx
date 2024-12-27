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
      <div className="relative whitespace-nowrap">
        <div className="animate-scroll-left inline-block">
          <span className="text-primary font-semibold px-4">{fact}</span>
          <span className="text-primary font-semibold px-4">•</span>
        </div>
        <div className="animate-scroll-left inline-block absolute left-full">
          <span className="text-primary font-semibold px-4">{fact}</span>
          <span className="text-primary font-semibold px-4">•</span>
        </div>
      </div>
    </div>
  );
};

export default ScrollingFact;