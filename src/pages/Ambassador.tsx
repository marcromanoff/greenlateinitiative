import Navigation from "../components/Navigation";

const Ambassador = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">GreenPlate Ambassador Program</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is a GreenPlate Ambassador?</h2>
            <p className="text-gray-700 mb-4">
              GreenPlate Ambassadors are passionate advocates for sustainable school dining who help promote and implement our initiatives within their educational communities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ambassador Responsibilities</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Promote sustainable dining practices in your school</li>
              <li>Organize and lead sustainability initiatives</li>
              <li>Connect with other GreenPlate Ambassadors</li>
              <li>Share success stories and best practices</li>
              <li>Participate in monthly Ambassador meetings</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Benefits</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Leadership experience in sustainability</li>
              <li>Networking opportunities</li>
              <li>Access to exclusive resources and training</li>
              <li>Recognition in the GreenPlate community</li>
            </ul>
          </section>

          <div className="bg-primary/10 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-primary mb-4">Ready to Make a Difference?</h2>
            <p className="text-gray-700 mb-4">
              Join our Ambassador program and be part of the sustainable dining revolution in schools.
            </p>
            <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Ambassador;