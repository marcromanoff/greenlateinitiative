import { Card, CardContent } from "@/components/ui/card";

const GradingScale = () => {
  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Grading Scale</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="font-semibold text-green-800">100%: Gold Standard</p>
            <p className="text-sm text-gray-600">A perfect score</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-semibold text-gray-800">90%–99%: Silver Medal</p>
            <p className="text-sm text-gray-600">Outstanding achievement</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <p className="font-semibold text-orange-800">80%–89%: Bronze Medal</p>
            <p className="text-sm text-gray-600">Excellent progress</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="font-semibold text-blue-800">Below 80%: Keep Up the Good Work</p>
            <p className="text-sm text-gray-600">Room for improvement</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GradingScale;