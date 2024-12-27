import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-green-50">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* For Students Section */}
          <section className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-6">For Students: Lead the Sustainability Movement</h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-2">
                <span className="text-primary font-bold">•</span>
                <span>Be a GreenPlate Ambassador: Take the first step in transforming your school's dining services by nominating your school for the GreenPlate program.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary font-bold">•</span>
                <span>Pride in Excellence: Be part of a school recognized for achieving the highest standards in sustainability.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary font-bold">•</span>
                <span>Raise Awareness: Use your school's certification to encourage other schools to join the initiative.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary font-bold">•</span>
                <span>Create Change: Advocate for better meals, reduced waste, and ethical practices in your cafeteria.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary font-bold">•</span>
                <span>Stand Out: Highlight your leadership in sustainability on resumes and college applications.</span>
              </li>
            </ul>
          </section>

          {/* For Administrators Section */}
          <section className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-6">For Administrators: Take the Lead</h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-2">
                <span className="text-primary font-bold">•</span>
                <span>Achieve Recognition: Join the program and make your school a model for sustainability with the GreenPlate Certification.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary font-bold">•</span>
                <span>Visible Achievement: Display your certification to showcase your school's leadership and excellence in sustainability.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary font-bold">•</span>
                <span>Inspire Change: Set the bar for sustainability in your community, influencing neighboring schools and districts.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary font-bold">•</span>
                <span>Boost Your School's Appeal: Gain recognition from families and communities for prioritizing sustainability and student health.</span>
              </li>
            </ul>
          </section>

          {/* Benefits Section */}
          <section className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-6">Exclusive Benefits of the GreenPlate Ambassador Program</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">For Students:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Gain access to resources, workshops, and guides to advocate for sustainability.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Receive an official GreenPlate Ambassador Certificate for your contributions.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Collaborate with other ambassadors nationwide to share ideas and best practices.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">For Administrators:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Receive a GreenPlate Certificate of Leadership in Sustainability for your time and participation.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Partner with eco-friendly vendors to optimize your sustainability efforts.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Gain recognition through media coverage and awards for being a pioneer in sustainability.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;