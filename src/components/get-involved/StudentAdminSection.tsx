import { GraduationCap, Clipboard } from "lucide-react";

const StudentAdminSection = () => {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSe9HXGiGSVEkz2A0CchDkamFtvNTNFBYQTyGHPojLx0errswA/viewform?usp=header";

  return (
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      <div className="bg-white p-8 pb-16 rounded-lg shadow-md group hover:shadow-lg transition-all duration-300">
        <h2 className="text-2xl font-semibold mb-4">For Students</h2>
        <p className="mb-6">Nominate Your School for the GreenPlate Challenge. Put a spotlight on your school's sustainability efforts and make a real impact!</p>
        <a 
          href={formUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 group relative"
        >
          <GraduationCap className="w-5 h-5 animate-bounce" />
          <span>Student Nomination Form</span>
          <span className="absolute -bottom-12 left-0 right-0 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-600">
            Start making a difference at your school
          </span>
        </a>
      </div>
      
      <div className="bg-white p-8 pb-16 rounded-lg shadow-md group hover:shadow-lg transition-all duration-300">
        <h2 className="text-2xl font-semibold mb-4">For Administrators</h2>
        <p className="mb-6">Join the GreenPlate Program. Showcase your school's commitment to health, sustainability, and the future.</p>
        <a 
          href={formUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 group relative"
        >
          <Clipboard className="w-5 h-5 animate-pulse" />
          <span>Administrator Form</span>
          <span className="absolute -bottom-12 left-0 right-0 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-600">
            Lead your school towards sustainability
          </span>
        </a>
      </div>
    </div>
  );
};

export default StudentAdminSection;