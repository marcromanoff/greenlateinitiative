import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Definitions = () => {
  const navigate = useNavigate();

  return (
    <Dialog open={true} onOpenChange={() => navigate(-1)}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary mb-4">Definitions</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6 text-primary">Readily Available Definition</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-semibold text-xl mb-4">Nutritional information is considered readily available if it is:</h3>
              <ol className="list-decimal space-y-4 mx-auto">
                <li>
                  Displayed Consistently:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Visible in at least one of these formats:</li>
                    <li>On-site (menu boards or cafeteria screens)</li>
                    <li>Online (school dining website or mobile app)</li>
                    <li>On printed menus at dining stations</li>
                  </ul>
                </li>
                <li>
                  Includes Key Details:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Caloric content</li>
                    <li>Macronutrient breakdown (protein, carbs, fats)</li>
                    <li>Allergen details (e.g., nuts, dairy, gluten)</li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-primary">Clear Labeling Definition</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-semibold text-xl mb-4">Menu items are considered clearly labeled if:</h3>
              <ol className="list-decimal space-y-4 mx-auto">
                <li>
                  Dietary Icons/Text Are Present:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Vegetarian (V), Vegan (VG), Gluten-Free (GF), and major allergen warnings (nuts, dairy)</li>
                    <li>Labels must appear directly next to menu items or at point of service</li>
                  </ul>
                </li>
                <li>
                  Icon Placement Standards:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Online: Visible on digital menu, no more than one click away</li>
                    <li>Printed: Included alongside menu descriptions at dining stations</li>
                  </ul>
                </li>
                <li>
                  Consistency Across Platforms:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Labels should match across all platforms (on-site, app, and website)</li>
                  </ul>
                </li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-primary">Ethical Practices Definition</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <ul className="list-disc space-y-4 mx-auto">
                <li>Cage-Free, Certified Humane® Eggs: All eggs are cage-free and certified by recognized organizations such as Certified Humane® or GAP Level 3+</li>
                <li>Hormone-Free Milk: All milk is hormone-free, with suppliers providing clear documentation</li>
                <li>Grass-Fed or Pasture-Raised Meats: Meat is sourced from animals raised on grass or pasture, meeting humane standards</li>
              </ul>
            </div>
          </section>
        </div>

        <div className="mt-6 flex justify-end">
          <Button 
            onClick={() => navigate(-1)}
            variant="outline"
          >
            Back
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Definitions;