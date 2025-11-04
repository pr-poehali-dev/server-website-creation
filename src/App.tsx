
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rustica from "./pages/Rustica";
import Dayzica from "./pages/Dayzica";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import SteamLogin from "./pages/SteamLogin";
import Servers from "./pages/Servers";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rustica" element={<Rustica />} />
          <Route path="/dayzica" element={<Dayzica />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/dayz-shop" element={<Shop />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<SteamLogin />} />
          <Route path="/servers" element={<Servers />} />
          <Route path="/dayz-servers" element={<Servers />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;