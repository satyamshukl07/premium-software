import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import CmmsPage from './pages/CmmsPage.jsx';
import FeatureDetailPage from './pages/FeatureDetailPage.jsx';
import SolutionDetailPage from './pages/SolutionDetailPage.jsx';
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
import ChmProductPage from './pages/products/ChmProductPage.jsx';
import HireCarProductPage from './pages/products/HireCarProductPage.jsx';
import FleetTrackingProductPage from './pages/products/FleetTrackingProductPage.jsx';

// CHM Operations Platform
import { ChmProvider } from './context/ChmContext.jsx';
import ChmLayout from './components/chm/ChmLayout.jsx';
import DashboardPage from './pages/chm/DashboardPage.jsx';
import FleetStatusPage from './pages/chm/FleetStatusPage.jsx';
import BookingsPage from './pages/chm/BookingsPage.jsx';
import RecurringBookingPage from './pages/chm/RecurringBookingPage.jsx';
import CalendarPage from './pages/chm/CalendarPage.jsx';
import CustomersPage from './pages/chm/CustomersPage.jsx';
import TransactionsPage from './pages/chm/TransactionsPage.jsx';
import ExpensesPage from './pages/chm/ExpensesPage.jsx';
import DriverManagementPage from './pages/chm/DriverManagementPage.jsx';
import TollManagementPage from './pages/chm/TollManagementPage.jsx';
import MaintenancePage from './pages/chm/MaintenancePage.jsx';
import RegoInsurancePage from './pages/chm/RegoInsurancePage.jsx';
import AnalyticsPage from './pages/chm/AnalyticsPage.jsx';
import ReportsPage from './pages/chm/ReportsPage.jsx';
import SettingsPage from './pages/chm/SettingsPage.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainLayout() {
  const location = useLocation();
  const isChmApp =
    location.pathname.startsWith('/products/chm/') &&
    location.pathname !== '/products/chm' &&
    location.pathname !== '/products/chm/' &&
    !location.pathname.startsWith('/products/chm/overview');

  if (isChmApp) {
    return (
      <ChmProvider>
        <ChmLayout>
          <Routes>
            <Route path="/products/chm" element={<DashboardPage />} />
            <Route path="/products/chm/dashboard" element={<DashboardPage />} />
            <Route path="/products/chm/fleet-status" element={<FleetStatusPage />} />
            <Route path="/products/chm/bookings" element={<BookingsPage />} />
            <Route path="/products/chm/recurring-booking" element={<RecurringBookingPage />} />
            <Route path="/products/chm/recurring" element={<RecurringBookingPage />} />
            <Route path="/products/chm/calendar" element={<CalendarPage />} />
            <Route path="/products/chm/customers" element={<CustomersPage />} />
            <Route path="/products/chm/financials/transactions" element={<TransactionsPage />} />
            <Route path="/products/chm/transactions" element={<TransactionsPage />} />
            <Route path="/products/chm/financials/expenses" element={<ExpensesPage />} />
            <Route path="/products/chm/expenses" element={<ExpensesPage />} />
            <Route path="/products/chm/driver-management" element={<DriverManagementPage />} />
            <Route path="/products/chm/drivers" element={<DriverManagementPage />} />
            <Route path="/products/chm/toll-management" element={<TollManagementPage />} />
            <Route path="/products/chm/tolls" element={<TollManagementPage />} />
            <Route path="/products/chm/maintenance" element={<MaintenancePage />} />
            <Route path="/products/chm/rego-insurance" element={<RegoInsurancePage />} />
            <Route path="/products/chm/analytics" element={<AnalyticsPage />} />
            <Route path="/products/chm/reports" element={<ReportsPage />} />
            <Route path="/products/chm/settings" element={<SettingsPage />} />
            <Route path="/products/chm/settings/:tab" element={<SettingsPage />} />
            <Route path="/products/chm/*" element={<DashboardPage />} />
          </Routes>
        </ChmLayout>
      </ChmProvider>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-red-500 selection:text-white">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Product Routes */}
          <Route path="/product" element={<ProductPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/mex" element={<CmmsPage />} />
          <Route path="/product/mex-cmms" element={<CmmsPage />} />
          <Route path="/products/chm" element={<ChmProductPage />} />
          <Route path="/product/chm" element={<ChmProductPage />} />
          <Route path="/products/chm/overview" element={<ChmProductPage />} />
          <Route path="/products/hirecar" element={<HireCarProductPage />} />
          <Route path="/products/hirecar/:subpage" element={<HireCarProductPage />} />
          <Route path="/products/fleet-tracking" element={<FleetTrackingProductPage />} />
          <Route path="/products/fleet-tracking/:subpage" element={<FleetTrackingProductPage />} />
          <Route path="/product/:slug" element={<SolutionDetailPage />} />
          <Route path="/products/:slug" element={<SolutionDetailPage />} />
          <Route path="/products/:category/:slug" element={<SolutionDetailPage />} />
          <Route path="/solution/:slug" element={<SolutionDetailPage />} />
          <Route path="/solutions/:category/:slug" element={<SolutionDetailPage />} />

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
          <Route path="/user-portal" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />

          {/* Fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainLayout />
    </BrowserRouter>
  );
}
