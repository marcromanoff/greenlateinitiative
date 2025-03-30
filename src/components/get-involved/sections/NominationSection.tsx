
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface NominationSectionProps {
  title: string;
  description: string;
  buttonText: string;
  Icon: LucideIcon;
  onButtonClick: () => void;
  imageSrc: string;
  imageAlt: string;
  imageCredit: string;
}

const NominationSection = ({
  title,
  description,
  buttonText,
  Icon,
  onButtonClick,
  imageSrc,
  imageAlt,
  imageCredit
}: NominationSectionProps) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-700 mb-6">
        {description}
      </p>
      <div className="flex flex-col gap-4">
        <button
          onClick={onButtonClick}
          className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300"
        >
          <Icon className="w-5 h-5" />
          <span>{buttonText}</span>
        </button>
        <p className="text-sm text-gray-600 text-center">
          {title === "Quick Start" ? "Be the spark for your school" : "Every answer counts. Every point brings change."}
        </p>
        <div className="mt-4 space-y-2">
          <div className="relative h-48 rounded-lg overflow-hidden">
            <img 
              src={imageSrc}
              alt={imageAlt}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-sm text-gray-500 italic">{imageCredit}</p>
        </div>
      </div>
    </div>
  );
};

export default NominationSection;
