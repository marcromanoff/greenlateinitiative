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
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;