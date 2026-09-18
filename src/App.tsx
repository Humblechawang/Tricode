import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Team from "./pages/Team";
import PersonProfile from "./pages/PersonProfile";
import Work from "./pages/Work";
import Post from "./pages/Post";
import PostDetail from "./pages/PostDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
        window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function LegacyTeamProfileRedirect() {
  const { id } = useParams();
  return <Navigate to={id ? `/team/${id}` : "/team"} replace />;
}

function AppShell() {
  const location = useLocation();
  const isProfile = location.pathname.startsWith("/team/");

  return (
    <div className="flex min-h-[100dvh] flex-col bg-bg text-text">
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <div className="flex min-h-0 flex-1 flex-col">
          <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <Home />
            }
          />
          <Route path="/team" element={<Team />} />
          <Route path="/team/:id" element={<PersonProfile />} />
          <Route path="/people" element={<Navigate to="/team" replace />} />
          <Route path="/people/:id" element={<LegacyTeamProfileRedirect />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post" element={<Post />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/policy" element={<Policy />} />
          </Routes>
        </div>
      </AnimatePresence>
      {!isProfile && <Footer />}
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
