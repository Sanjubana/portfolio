import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Timeline from "./components/Timeline";
import SkillsMatrix from "./components/SkillsMatrix";
import GithubStats from "./components/GithubStats";
import ResumeModal from "./components/ResumeModal";
import AnimatedBackground from "./components/Background";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";

import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

const Portofolio = lazy(() => import("./Pages/Portofolio"));
const ContactPage = lazy(() => import("./Pages/Contact"));
const ProjectDetails = lazy(() => import("./components/ProjectDetail"));
const WelcomeScreen = lazy(() => import("./Pages/WelcomeScreen"));
const NotFoundPage = lazy(() => import("./Pages/404"));

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <Suspense fallback={null}>
            <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
          </Suspense>
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar onOpenResume={() => setIsResumeOpen(true)} />
      
          <main>
            <Home onOpenResume={() => setIsResumeOpen(true)} />
            <About onOpenResume={() => setIsResumeOpen(true)} />
            <Timeline />
            <SkillsMatrix />
            <Suspense fallback={<div className="h-20" />}>
              <Portofolio />
              <GithubStats />
              <ContactPage />
            </Suspense>
          </main>

          <Footer />

          {/* ATS Resume Quick Modal */}
          <ResumeModal
            isOpen={isResumeOpen}
            onClose={() => setIsResumeOpen(false)}
          />
        </>
      )}
    </>
  );
};

const ProjectPageLayout = () => (
  <>
    <Suspense fallback={<div className="min-h-screen" />}>
      <ProjectDetails />
    </Suspense>
    <Footer />
  </>
);

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <HelmetProvider>
      <div className="pointer-events-none fixed inset-0 -z-10">
        <AnimatedBackground />
      </div>
      <BrowserRouter>
        <Routes>
          {/* PUBLIC */}
          <Route
            path="/"
            element={
              <LandingPage
                showWelcome={showWelcome}
                setShowWelcome={setShowWelcome}
              />
            }
          />

          <Route path="/project/:slug" element={<ProjectPageLayout />} />

          {/* AUTH */}
          <Route path="/login" element={<Login />} />

          {/* ADMIN (PROTECTED) */}
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* 404 */}
          <Route
            path="*"
            element={
              <Suspense fallback={null}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;