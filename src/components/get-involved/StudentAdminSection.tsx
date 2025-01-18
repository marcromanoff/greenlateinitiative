import { GraduationCap, Clipboard } from "lucide-react";

const StudentAdminSection = () => {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSe9HXGiGSVEkz2A0CchDkamFtvNTNFBYQTyGHPojLx0errswA/viewform?usp=header";

  return (
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
        <h2 className="text-2xl font-semibold mb-4">For students</h2>
        <p className="text-gray-700 mb-6">
          Nominate Your School for the GreenPlate Challenge. Put a spotlight on your school's sustainability efforts and make a real impact!
        </p>
        <div className="flex flex-col gap-4">
          <a 
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300"
          >
            <GraduationCap className="w-5 h-5" />
            <span>Student Nomination Form</span>
          </a>
          <p className="text-sm text-gray-600 text-center">
            Start making a difference at your school
          </p>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
        <h2 className="text-2xl font-semibold mb-4">For Administrators</h2>
        <p className="text-gray-700 mb-6">
          Join the GreenPlate Program. Showcase your school's commitment to health, sustainability, and the future.
        </p>
        <div className="flex flex-col gap-4">
          <a 
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300"
          >
            <Clipboard className="w-5 h-5" />
            <span>Administrator Form</span>
          </a>
          <p className="text-sm text-gray-600 text-center">
            Lead your school towards sustainability
          </p>
          <div className="mt-4 space-y-2">
            <div className="relative h-48 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/166b33be-226e-4fb6-9372-cb7c431eebe5.png"
                alt="Sustainable catering display"
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-sm text-gray-500 italic">Photo credit: Sage Dining</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentAdminSection;