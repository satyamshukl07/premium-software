import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import CmmsPage from './pages/CmmsPage.jsx';
import FeatureDetailPage from './pages/FeatureDetailPage.jsx';
import SolutionsPage from './pages/SolutionsPage.jsx';
import SectorDetailPage from './pages/SectorDetailPage.jsx';
import ResourcesPage from './pages/ResourcesPage.jsx';
import BlogDetailPage from './pages/BlogDetailPage.jsx';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage.jsx';
import PricingPage from './pages/PricingPage.jsx';
import FreeTrialPage from './pages/FreeTrialPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import AboutPage from './pages/AboutPage.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-red-500 selection:text-white">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* Product Routes */}
            <Route path="/product" element={<ProductPage />} />
            <Route path="/product/mex-cmms" element={<CmmsPage />} />
            <Route path="/product/:slug" element={<FeatureDetailPage />} />

            {/* Solutions & Industry Routes */}
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/solutions/by-capability" element={<SectorDetailPage />} />
            <Route path="/solutions/:sector" element={<SectorDetailPage />} />

            {/* Resources Routes */}
            <Route path="/resources" element={<ResourcesPage defaultFilter="all" />} />
            <Route path="/resources/blog" element={<ResourcesPage defaultFilter="blog" />} />
            <Route path="/resources/blog/:slug" element={<BlogDetailPage />} />
            <Route path="/resources/client-success-stories" element={<ResourcesPage defaultFilter="case-studies" />} />
            <Route path="/resources/client-success-stories/:slug" element={<CaseStudyDetailPage />} />
            <Route path="/resources/webinars" element={<ResourcesPage defaultFilter="webinars" />} />
            <Route path="/resources/whitepapers" element={<ResourcesPage defaultFilter="whitepapers" />} />
            <Route path="/resources/training" element={<ResourcesPage defaultFilter="training" />} />

            {/* Pricing & Calculator Routes */}
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/pricing/calculate" element={<PricingPage initialMode="calculator" />} />

            {/* Conversion & Portal Routes */}
            <Route path="/free-trial" element={<FreeTrialPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/about" element={<AboutPage />} />

            {/* Fallback */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
