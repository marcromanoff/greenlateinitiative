
import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PointsActionsList } from "./components/PointsActionsList";

const NominationPointsCard = () => {
  return (
    <Card className="overflow-hidden">
      <div className="bg-primary text-white p-4 flex items-center gap-3">
        <GraduationCap className="h-6 w-6" />
        <h2 className="text-xl font-semibold">Advocate Actions</h2>
      </div>
      <CardContent className="pt-6">
        <PointsActionsList />
      </CardContent>
    </Card>
  );
};

export default NominationPointsCard;
