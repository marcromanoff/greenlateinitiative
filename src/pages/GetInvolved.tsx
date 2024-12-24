import Navigation from "../components/Navigation";
import ScrollingFact from "../components/ScrollingFact";
import { GraduationCap, Clipboard } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GetInvolved = () => {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSe9HXGiGSVEkz2A0CchDkamFtvNTNFBYQTyGHPojLx0errswA/viewform?usp=header";

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-primary">Get Involved</h1>
          
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

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="process">The Process</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-semibold mb-6">Join the GreenPlate Initiative</h2>
                <p className="text-gray-600">
                  The GreenPlate Initiative is a comprehensive program designed to evaluate and improve the sustainability of school dining services. 
                  Whether you're a student passionate about making a difference or an administrator looking to lead change, 
                  we provide the tools and support needed to create more sustainable dining environments.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="process" className="space-y-8">
              <section className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">1</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Complete a brief form to receive more information</h3>
                  <p className="text-gray-600">Start your journey towards sustainability with a simple step.</p>
                </div>
              </section>

              <section className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">2</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Complete the Assessment Form</h3>
                  <p className="text-gray-600">Fill out a short form about your school's dining services. We'll evaluate your school's sustainability practices and provide a grade. After this, we will reach out to you and your suited administrator. Your school will receive a certificate based on your grade, which can be displayed in the cafeteria to showcase your commitment to sustainability.</p>
                </div>
              </section>

              <section className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">3</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Receive Resources and Guidance</h3>
                  <p className="text-gray-600">Once the assessment is complete, we'll provide tools and recommendations to help your school align with the GreenPlate grading standards. These resources will guide your efforts to improve sustainability at your school.</p>
                </div>
              </section>

              <section className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">4</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Re-submit for Improvement</h3>
                  <p className="text-gray-600">If your school's grade leaves room for improvement, don't worry! You'll have the opportunity to make updates, implement the recommendations, and re-submit the form for a new evaluation. This ensures your school has every chance to achieve excellence and recognition.</p>
                </div>
              </section>

              <section className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">5</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Gain Recognition and Support</h3>
                  <p className="text-gray-600">Schools excelling in sustainability will receive special recognition through the GreenPlate Initiative, celebrating their leadership in ethical dining. All participating schools will gain actionable insights, ensuring progress toward creating healthier, more sustainable dining programs.</p>
                </div>
              </section>
            </TabsContent>
          </Tabs>
        </div>

        <ScrollingFact fact="Schools generate 530,000 tons of food waste annually. Compostable utensils and better planning can reduce this by 30%. (USDA)" />
      </main>
    </div>
  );
};

export default GetInvolved;