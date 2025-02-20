import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import About from "./pages/About";
import Grading from "./pages/Grading";
import GetInvolved from "./pages/GetInvolved";
import Downloads from "./pages/Downloads";
import Process from "./pages/Process";
import Awards from "./pages/Awards";
import FAQ from "./pages/FAQ";
import Vendors from "./pages/Vendors";
import Calculator from "./pages/Calculator";
import Contact from "./pages/Contact";
import Ambassador from "./pages/Ambassador";
import WhatIsGreenPlate from "./pages/WhatIsGreenPlate";
import Definitions from "./pages/Definitions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/grading" element={<Grading />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/process" element={<Process />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/ambassador" element={<Ambassador />} />
          <Route path="/what-is-greenplate" element={<WhatIsGreenPlate />} />
          <Route path="/definitions" element={<Definitions />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;