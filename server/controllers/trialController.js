import { Trial } from '../models/Trial.js';

export const handleFreeTrialSubmit = async (req, res) => {
  try {
    const { firstName, lastName, email, company, phone, teamSize, industry } = req.body;

    if (!firstName || !lastName || !email || !company) {
      return res.status(400).json({
        success: false,
        error: 'Please fill in all required fields (First Name, Last Name, Work Email, Company).',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid work email address.',
      });
    }

    const newTrial = await Trial.create({
      firstName,
      lastName,
      email,
      company,
      phone: phone || '',
      teamSize: teamSize || '1-5',
      industry: industry || 'Manufacturing',
    });

    return res.status(201).json({
      success: true,
      message: 'Your 30-day free MEX sandbox is provisioned and ready!',
      data: {
        trialId: newTrial.id,
        status: 'Active',
        expiresAt: newTrial.expiresAt,
        portalUrl: `/user-portal?email=${encodeURIComponent(email)}`,
      },
    });
  } catch (error) {
    console.error('Free trial submit error:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to provision trial sandbox.',
    });
  }
};
