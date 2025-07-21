import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import FreezeFlyer from './components/FreezeFlyer';
import Applications from './components/Applications';
import ApplicationDetail from './components/ApplicationDetail';
import CustomerOnboarding from './components/CustomerOnboarding';
import EDIInfo from './components/EDIInfo';
import Automation from './components/Automation';
import Bootcamp from './components/Bootcamp';
import BusinessFlow from './components/BusinessFlow';
import AdvancedTraining from './components/AdvancedTraining';
import JiraMSCVP from './components/JiraMSCVP';
import ChatBot from './components/ChatBot';
import Innovations from './components/Innovations';
import GenAI from './components/GenAI';
import IdeaRegister from './components/IdeaRegister';
import Atlas from './components/Atlas';
import ClientVisits from './components/ClientVisits';
import DomainExpertise from './components/DomainExpertise';
import Appreciation from './components/Appreciation';
import AboutAMC from './components/AboutAMC';
import History from './components/History';
import Leaders from './components/Leaders';
import Warehouse from './components/Warehouse';
import Team from './components/Team';
import Login from './components/Login';
import Register from './components/Register';
import Documents from './components/Documents';
import Courses from './components/Courses';
import CourseDetail from './components/CourseDetail';
import FloatingChatBot from './components/FloatingChatBot';
import LoadingAnimation from './components/LoadingAnimation';

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const user = localStorage.getItem('user');
  return user ? <>{children}</> : <Navigate to="/login" replace />;
};

// Layout Component for authenticated pages
const AuthenticatedLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  // Add loading state for page transitions
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Scroll to top when page loads
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 800);

    return () => clearTimeout(timer);
  }, [children]);

  return (
    <div className="font-sans text-gray-900 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
      {isLoading && <LoadingAnimation />}
      <Navbar />
      <div className="transition-opacity duration-500">
        {children}
      </div>
      <Footer />
      <FloatingChatBot />
    </div>
  );
};

// Layout Component for auth pages (login/register)
const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="font-sans text-gray-900 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
      {children}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={
          <AuthLayout>
            <Login />
          </AuthLayout>
        } />
        <Route path="/register" element={
          <AuthLayout>
            <Register />
          </AuthLayout>
        } />
        
        {/* Protected Routes */}
        <Route path="/" element={
          <ProtectedRoute>
            <AuthenticatedLayout>
              <main>
                <Hero />
                <Features />
                <Footer />
              </main>
            </AuthenticatedLayout>
          </ProtectedRoute>
        } />
        <Route path="/about" element={
          <ProtectedRoute>
            <div className="font-sans text-gray-900 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
              <Navbar />
              <AboutAMC />
              <FloatingChatBot />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/about/history" element={
          <ProtectedRoute>
            <div className="font-sans text-gray-900 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
              <Navbar />
              <History />
              <FloatingChatBot />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/about/leaders" element={
          <ProtectedRoute>
            <div className="font-sans text-gray-900 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
              <Navbar />
              <Leaders />
              <FloatingChatBot />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/about/warehouse" element={
          <ProtectedRoute>
            <div className="font-sans text-gray-900 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
              <Navbar />
              <Warehouse />
              <FloatingChatBot />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/about/team" element={
          <ProtectedRoute>
            <div className="font-sans text-gray-900 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
              <Navbar />
              <Team />
              <FloatingChatBot />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/freeze-flyer" element={
          <ProtectedRoute>
            <div className="font-sans text-gray-900 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
              <Navbar />
              <FreezeFlyer />
              <FloatingChatBot />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/applications" element={
          <ProtectedRoute>
            <div className="font-sans text-gray-900 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
              <Navbar />
              <Applications />
              <FloatingChatBot />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/applications/:slug" element={
          <ProtectedRoute>
            <div className="font-sans text-gray-900 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
              <Navbar />
              <ApplicationDetail />
              <FloatingChatBot />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/customer-onboarding" element={
          <ProtectedRoute>
            <div className="font-sans text-gray-900 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
              <Navbar />
              <CustomerOnboarding />
              <FloatingChatBot />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/edi-info" element={
          <ProtectedRoute>
            <div className="font-sans text-gray-900 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
              <Navbar />
              <EDIInfo />
              <FloatingChatBot />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/automation" element={
          <ProtectedRoute>
            <div className="font-sans text-gray-900 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
              <Navbar />
              <Automation />
              <FloatingChatBot />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/bootcamp" element={
          <ProtectedRoute>
            <div className="font-sans text-gray-900 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
              <Navbar />
              <Bootcamp />
              <FloatingChatBot />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/business-flow" element={
          <ProtectedRoute>
            <div className="font-sans text-gray-900 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
              <Navbar />
              <BusinessFlow />
              <FloatingChatBot />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/advanced-training" element={
          <ProtectedRoute>
            <div className="font-sans text-gray-900 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
              <Navbar />
              <AdvancedTraining />
              <FloatingChatBot />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/jira-mscvp" element={
          <ProtectedRoute>
            <div className="font-sans text-gray-900 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
              <Navbar />
              <JiraMSCVP />
              <FloatingChatBot />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/chat-bot" element={
          <ProtectedRoute>
            <div className="font-sans text-gray-900 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
              <Navbar />
              <ChatBot />
              <FloatingChatBot />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/innovations" element={
          <ProtectedRoute>
            <div className="font-sans text-gray-900 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
              <Navbar />
              <Innovations />
              <FloatingChatBot />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/genai" element={
          <ProtectedRoute>
            <div className="font-sans text-gray-900 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
              <Navbar />
              <GenAI />
              <FloatingChatBot />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/idea-register" element={
          <ProtectedRoute>
            <div className="font-sans text-gray-900 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
              <Navbar />
              <IdeaRegister />
              <FloatingChatBot />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/atlas" element={
          <ProtectedRoute>
            <div className="font-sans text-gray-900 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
              <Navbar />
              <Atlas />
              <FloatingChatBot />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/client-visits" element={
          <ProtectedRoute>
            <div className="font-sans text-gray-900 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
              <Navbar />
              <ClientVisits />
              <FloatingChatBot />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/domain-expertise" element={
          <ProtectedRoute>
            <div className="font-sans text-gray-900 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
              <Navbar />
              <DomainExpertise />
              <FloatingChatBot />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/appreciation" element={
          <ProtectedRoute>
            <div className="font-sans text-gray-900 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
              <Navbar />
              <Appreciation />
              <FloatingChatBot />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/documents" element={
          <ProtectedRoute>
            <div className="font-sans text-gray-900 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
              <Navbar />
              <Documents />
              <FloatingChatBot />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/courses" element={
          <ProtectedRoute>
            <div className="font-sans text-gray-900 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
              <Navbar />
              <Courses />
              <FloatingChatBot />
            </div>
          </ProtectedRoute>
        } />
        <Route path="/courses/:platform/:courseId" element={
          <ProtectedRoute>
            <div className="font-sans text-gray-900 bg-gradient-to-br from-blue-50 via-white to-cyan-50 min-h-screen">
              <Navbar />
              <CourseDetail />
              <FloatingChatBot />
            </div>
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;