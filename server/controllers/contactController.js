import { Contact } from '../models/Contact.js';

export const handleContactSubmit = async (req, res) => {
  try {
    const { name, email, company, phone, message, subject } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide name, email, and your inquiry message.',
      });
    }

    // Basic email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.',
      });
    }

    const newContact = await Contact.create({
      name,
      email,
      company: company || 'Not specified',
      phone: phone || 'Not provided',
      message,
      subject: subject || 'General Inquiry',
    });

    return res.status(201).json({
      success: true,
      message: 'Thank you for reaching out! A MEX specialist will contact you within 1 business day.',
      data: newContact,
    });
  } catch (error) {
    console.error('Contact submit error:', error);
    return res.status(500).json({
      success: false,
      error: 'An internal error occurred while processing your request.',
    });
  }
};

export const getContacts = async (req, res) => {
  try {
    const list = await Contact.find();
    return res.json({ success: true, count: list.length, data: list });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Failed to retrieve contacts' });
  }
};
