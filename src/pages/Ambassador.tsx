import React from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";

const Ambassador = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Become a GreenPlate Ambassador</h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Your Role as an Ambassador</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="font-bold mr-2">✦</span>
                Lead your school's sustainability transformation
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">✦</span>
                Connect with other ambassadors nationwide
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">✦</span>
                Receive training and resources
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">✦</span>
                Organize sustainability events
              </li>
            </ul>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">Program Benefits</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="font-bold mr-2">✦</span>
                Leadership experience for college applications
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">✦</span>
                Network with sustainability professionals
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">✦</span>
                Access to exclusive workshops and events
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">✦</span>
                Certificate of recognition
              </li>
            </ul>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Ambassador;