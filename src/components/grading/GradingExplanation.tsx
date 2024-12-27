const GradingExplanation = () => {
  return (
    <div className="text-lg mb-8 space-y-6">
      <p>
        At GreenPlate, we are committed to 100% objectivity in evaluating school dining programs. 
        Our grading system is designed to be fair, consistent, and free from subjective bias. 
        Here's how we ensure accuracy and transparency in our evaluations:
      </p>
      
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">1. Strictly Criteria-Based Scoring:</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>We evaluate each day of the school week (5 school days) individually based on the specific, predefined criteria, found below.</li>
            <li>Each day is worth 20 points, and the total score for all 5 days determines your school's grade, out off 100 points total.</li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold">2. Only Verified Information:</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>We exclusively use data available on school websites and information submitted by certified GreenPlate Ambassadors.</li>
            <li>This ensures that all evaluations are based on factual, documented evidence—not assumptions or unverified claims.</li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold">3. Consistency Across Schools:</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Every school is assessed using the same criteria, regardless of location or size.</li>
            <li>By applying a uniform grading system, we ensure that every school is held to the same standard of sustainability and ethical dining practices.</li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold">4. Eliminating Subjectivity:</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>We do not rely on opinions, reviews, or anecdotal evidence.</li>
            <li>Our evaluations are based solely on measurable, observable data that aligns with our grading rubric.</li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold">5. Transparent Results:</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Schools receive a clear breakdown of their scores, with actionable insights for areas of improvement.</li>
            <li>GreenPlate Ambassadors play a key role in providing accurate information to ensure a fair evaluation.</li>
          </ul>
        </div>
      </div>
      
      <p className="italic">
        By sticking to objective data and a rigorous evaluation process, GreenPlate ensures that every school is graded fairly and has a clear path to achieving excellence. 
        If your school is ready to lead the way in sustainability, we're here to provide the tools and support to get you there! 🌱
      </p>
    </div>
  );
};

export default GradingExplanation;