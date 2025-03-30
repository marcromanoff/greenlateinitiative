
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import WhatIsGreenPlate from "./pages/WhatIsGreenPlate";
import GetInvolved from "./pages/GetInvolved";
import Process from "./pages/Process";
import PointsSystem from "./pages/PointsSystem";
import Grading from "./pages/Grading";
import Ambassador from "./pages/Ambassador";
import Awards from "./pages/Awards"; // This import stays the same
import Vendors from "./pages/Vendors";
import Downloads from "./pages/Downloads";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import AdminDashboard from "./pages/AdminDashboard";
import PrivateRoute from "./components/PrivateRoute";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/what-is-greenplate" element={<WhatIsGreenPlate />} />
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="/process" element={<Process />} />
              <Route path="/points-system" element={<PointsSystem />} />
              <Route path="/grading" element={<Grading />} />
              <Route path="/ambassador" element={<Ambassador />} />
              <Route path="/awards" element={<Awards />} /> {/* This route stays the same */}
              <Route path="/vendors" element={<Vendors />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/auth" element={<Auth />} />
              <Route
                path="/admin"
                element={
                  <PrivateRoute allowedRoles={['admin']}>
                    <AdminDashboard />
                  </PrivateRoute>
                }
              />
            </Routes>
          </main>
          <Toaster />
          <Sonner />
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
