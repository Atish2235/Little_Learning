import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import WelcomePage from "@/components/WelcomePage";
import AboutPage from "@/pages/AboutPage";
import ProgramsPage from "@/pages/ProgramsPage";
import GalleryPage from "@/pages/GalleryPage";
import ContactPage from "@/pages/ContactPage";
import Layout from "@/components/Layout";
import Navigation from "./components/Navigation";
import BranchesPage from "./pages/BranchesPage";
import FranchisePage from "./pages/FranchisePage";
import CarrerPage from "./pages/CarrerPage";
import EnrollPage from "@/pages/EnrollPage";
import FloatingContactButtons from "./components/FloatingContactButtons";

// ⭐ NEW ADMIN PAGE
import AdminGalleryUpload from "@/pages/Admin/AdminGalleryUpload";
import AdminLogin from "@/pages/Admin/AdminLogin";
import AdminGalleryManagement from "@/pages/Admin/AdminGalleryManagement";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/programs" component={ProgramsPage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/branches" component={BranchesPage} />
      <Route path="/franchise" component={FranchisePage} />
      <Route path="/career" component={CarrerPage} />
      <Route path="/enroll" component={EnrollPage} />
      

      {/* ⭐ NEW ROUTE */}
      <Route path="/admin/gallery-upload" component={AdminGalleryUpload} />
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin/gallery-management" component={AdminGalleryManagement} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  if (showWelcome) {
    return <WelcomePage onComplete={() => setShowWelcome(false)} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Navigation />
          <FloatingContactButtons />
          <Layout>
            <Router />
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
