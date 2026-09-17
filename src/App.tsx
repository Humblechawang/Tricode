import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import People from "./pages/People";
import PersonProfile from "./pages/PersonProfile";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useTheme } from "./hooks/useTheme";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
        window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppShell() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isProfile = location.pathname.startsWith("/people/");

  return (
    <div className="min-h-screen bg-bg text-text">
      <ScrollToTop />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <Home theme={theme} />
            }
          />
          <Route path="/people" element={<People />} />
          <Route path="/people/:id" element={<PersonProfile />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      {!isHome && !isProfile && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
