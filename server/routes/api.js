import express from 'express';
import { authenticateAdmin } from '../middleware/auth.js';
import { rateLimiter } from '../middleware/rateLimit.js';
import {
  validateEnquiry,
  validateFreeTrial,
  validateDemoRequest,
  validateSpecialistRequest,
  validateNewsletter,
} from '../middleware/validation.js';

// Controllers
import { login, getMe, changePassword } from '../controllers/authController.js';
import {
  createEnquiry,
  getEnquiries,
  getEnquiryById,
  updateEnquiry,
  deleteEnquiry,
} from '../controllers/enquiriesController.js';
import {
  createFreeTrial,
  getFreeTrials,
  updateFreeTrial,
  deleteFreeTrial,
} from '../controllers/trialsController.js';
import {
  createDemoRequest,
  getDemoRequests,
  updateDemoRequest,
  deleteDemoRequest,
} from '../controllers/demosController.js';
import {
  createSpecialistRequest,
  getSpecialistRequests,
  updateSpecialistRequest,
  deleteSpecialistRequest,
} from '../controllers/specialistsController.js';
import {
  subscribe,
  getSubscribers,
  deleteSubscriber,
} from '../controllers/newsletterController.js';
import {
  getDashboardStats,
  getSystemSettings,
  testDatabaseConnection,
} from '../controllers/adminStatsController.js';

// Existing feature controllers
import { handlePricingCalculation } from '../controllers/calculatorController.js';
import { getResources } from '../controllers/resourceController.js';

const router = express.Router();

// Rate limiters for security
const loginLimiter = rateLimiter({ maxRequests: 10, windowMs: 15 * 60 * 1000, message: 'Too many login attempts. Please wait 15 minutes.' });
const submissionLimiter = rateLimiter({ maxRequests: 30, windowMs: 10 * 60 * 1000, message: 'Submission limit reached. Please wait a moment.' });

/* ========================================================================= */
/* 1. PUBLIC SUBMISSION ENDPOINTS (STORED IN SQL)                           */
/* ========================================================================= */

// Health check
router.get('/health', (req, res) => {
  res.json({ status: 'ok', database: 'ready' });
});

// Contact & Enquiries
router.post('/enquiries', submissionLimiter, validateEnquiry, createEnquiry);
router.post('/contact', submissionLimiter, validateEnquiry, createEnquiry);

// Free Trial Requests
router.post('/free-trial', submissionLimiter, validateFreeTrial, createFreeTrial);
router.post('/trial', submissionLimiter, validateFreeTrial, createFreeTrial);

// Demo Requests
router.post('/demo-requests', submissionLimiter, validateDemoRequest, createDemoRequest);
router.post('/demo', submissionLimiter, validateDemoRequest, createDemoRequest);

// Specialist Requests
router.post('/specialist-requests', submissionLimiter, validateSpecialistRequest, createSpecialistRequest);
router.post('/specialist', submissionLimiter, validateSpecialistRequest, createSpecialistRequest);

// Newsletter
router.post('/newsletter', submissionLimiter, validateNewsletter, subscribe);

// Existing utilities
router.post('/calculate', handlePricingCalculation);
router.post('/calculate-pricing', handlePricingCalculation);
router.post('/quote', (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'Quote request registered successfully',
    data: req.body,
  });
});
router.get('/resources', getResources);

/* ========================================================================= */
/* 2. ADMIN AUTHENTICATION                                                   */
/* ========================================================================= */

router.post('/auth/login', loginLimiter, login);
router.post('/admin/login', loginLimiter, login);

/* ========================================================================= */
/* 3. PROTECTED ADMIN ENDPOINTS                                              */
/* ========================================================================= */

// Profile & Account
router.get('/admin/auth/me', authenticateAdmin, getMe);
router.post('/admin/auth/change-password', authenticateAdmin, changePassword);

// Dashboard Statistics & Settings
router.get('/admin/stats', authenticateAdmin, getDashboardStats);
router.get('/admin/settings', authenticateAdmin, getSystemSettings);
router.post('/admin/database/test', authenticateAdmin, testDatabaseConnection);

// Enquiries Management
router.get('/admin/enquiries', authenticateAdmin, getEnquiries);
router.get('/admin/enquiries/:id', authenticateAdmin, getEnquiryById);
router.patch('/admin/enquiries/:id', authenticateAdmin, updateEnquiry);
router.delete('/admin/enquiries/:id', authenticateAdmin, deleteEnquiry);

// Free Trial Management
router.get('/admin/free-trials', authenticateAdmin, getFreeTrials);
router.patch('/admin/free-trials/:id', authenticateAdmin, updateFreeTrial);
router.delete('/admin/free-trials/:id', authenticateAdmin, deleteFreeTrial);

// Demo Requests Management
router.get('/admin/demo-requests', authenticateAdmin, getDemoRequests);
router.patch('/admin/demo-requests/:id', authenticateAdmin, updateDemoRequest);
router.delete('/admin/demo-requests/:id', authenticateAdmin, deleteDemoRequest);

// Specialist Requests Management
router.get('/admin/specialist-requests', authenticateAdmin, getSpecialistRequests);
router.patch('/admin/specialist-requests/:id', authenticateAdmin, updateSpecialistRequest);
router.delete('/admin/specialist-requests/:id', authenticateAdmin, deleteSpecialistRequest);

// Newsletter Management
router.get('/admin/newsletter', authenticateAdmin, getSubscribers);
router.delete('/admin/newsletter/:id', authenticateAdmin, deleteSubscriber);

export default router;
