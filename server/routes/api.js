import express from 'express';
import { handleContactSubmit, getContacts } from '../controllers/contactController.js';
import { handleFreeTrialSubmit } from '../controllers/trialController.js';
import { handlePricingCalculation } from '../controllers/calculatorController.js';
import { getResources } from '../controllers/resourceController.js';

const router = express.Router();

router.post('/contact', handleContactSubmit);
router.get('/contact', getContacts);

router.post('/free-trial', handleFreeTrialSubmit);
router.post('/calculate', handlePricingCalculation);
router.get('/resources', getResources);

export default router;
