import React from "react";
import "@/styles/global.css";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router";

import GuestLayout from "@/pages/layout";

import HomePage from "@/pages/guest/home";
import AboutPage from "@/pages/guest/about";
import { ContactPage } from "@/pages/guest/contact";
import { Projects } from "@/pages/guest/projects";

// Scroll to the top and add a page transition when changing routes
function PageTransition() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div
      key={pathname}
      className="page-transition"
    >
      <Routes>
        <Route element={<GuestLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <PageTransition />
  </BrowserRouter>
);