
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D3E4FD] via-[#E8F4E2] to-[#F2FCE2]">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-primary mb-6">Welcome to GreenPlate</h1>
            <p className="text-xl text-gray-600">
              Transforming school dining for a healthier, more sustainable future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-primary">For Students</h2>
              <p className="text-gray-600 mb-4">
                Take the lead in bringing sustainable dining to your school. Become a GreenPlate Ambassador and make a real difference.
              </p>
              <img 
                src="/lovable-uploads/6c0b369e-324c-45be-a5ff-5e99569d221f.png" 
                alt="Students enjoying sustainable meal"
                className="w-full rounded-lg"
              />
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4 text-primary">For Administrators</h2>
              <p className="text-gray-600 mb-4">
                Join the movement to transform school dining. Get your institution certified and showcase your commitment to sustainability.
              </p>
              <img 
                src="/lovable-uploads/67d6aa38-24ae-46ec-adca-f610a85f0846.png" 
                alt="School cafeteria with sustainable practices"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

