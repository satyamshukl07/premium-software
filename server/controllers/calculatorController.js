import { Quote } from '../models/Quote.js';

export const handlePricingCalculation = async (req, res) => {
  try {
    const { workEmail, phone, companyName, industry, country, teamSize } = req.body;

    if (!workEmail || !companyName || !industry || !teamSize) {
      return res.status(400).json({
        success: false,
        error: 'Please provide your work email, company name, industry, and maintenance team size.',
      });
    }

    // Dynamic pricing calculation logic
    let usersCount = 5;
    let basePricePerUser = 110;
    let plan = 'MEX Advanced';

    if (teamSize === '1-3') {
      usersCount = 2;
      basePricePerUser = 110;
      plan = 'MEX Advanced';
    } else if (teamSize === '4-10') {
      usersCount = 7;
      basePricePerUser = 145;
      plan = 'MEX Professional';
    } else if (teamSize === '11-25') {
      usersCount = 18;
      basePricePerUser = 135;
      plan = 'MEX Professional';
    } else if (teamSize === '26-50') {
      usersCount = 35;
      basePricePerUser = 125;
      plan = 'MEX Enterprise';
    } else if (teamSize === '50+') {
      usersCount = 65;
      basePricePerUser = 115;
      plan = 'MEX Enterprise';
    }

    const estimatedMonthlyCost = usersCount * basePricePerUser;
    const estimatedAnnualCost = estimatedMonthlyCost * 12 * 0.85; // 15% annual discount

    const quoteRecord = await Quote.create({
      workEmail,
      phone: phone || '',
      companyName,
      industry,
      country: country || 'Australia',
      teamSize,
      estimatedMonthlyCost,
      recommendedPlan: plan,
    });

    return res.status(200).json({
      success: true,
      data: {
        quoteId: quoteRecord.id,
        recommendedPlan: plan,
        estimatedMonthlyCost,
        estimatedAnnualCost: Math.round(estimatedAnnualCost),
        suggestedUsers: usersCount,
        currency: country === 'New Zealand' ? 'NZD' : country === 'United States' ? 'USD' : 'AUD',
        details: {
          workEmail,
          companyName,
          industry,
          country,
          teamSize,
        },
      },
    });
  } catch (error) {
    console.error('Pricing calculation error:', error);
    return res.status(500).json({
      success: false,
      error: 'Calculation service encountered an issue. Please try again.',
    });
  }
};
