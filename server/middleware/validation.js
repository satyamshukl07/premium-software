/**
 * Input validation and sanitization helpers
 */

// Email regex standard
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Strips script tags, HTML injection and dangerous control chars
export function sanitizeString(val) {
  if (typeof val !== 'string') return '';
  return val
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/[<>]/g, '')
    .trim();
}

/**
 * Validate Enquiry submission
 */
export function validateEnquiry(req, res, next) {
  const { name, email, phone, company, subject, message } = req.body || {};

  const cleanName = sanitizeString(name);
  const cleanEmail = sanitizeString(email).toLowerCase();
  const cleanPhone = sanitizeString(phone);
  const cleanCompany = sanitizeString(company);
  const cleanSubject = sanitizeString(subject);
  const cleanMessage = sanitizeString(message);

  if (!cleanName || cleanName.length < 2) {
    return res.status(400).json({
      success: false,
      message: 'Full name is required (minimum 2 characters).',
    });
  }

  if (!cleanEmail || !EMAIL_REGEX.test(cleanEmail)) {
    return res.status(400).json({
      success: false,
      message: 'A valid email address is required.',
    });
  }

  req.sanitizedData = {
    name: cleanName,
    email: cleanEmail,
    phone: cleanPhone || null,
    company: cleanCompany || null,
    subject: cleanSubject || 'General Inquiry',
    message: cleanMessage || '',
    enquiry_type: sanitizeString(req.body.enquiry_type) || 'General',
    source: sanitizeString(req.body.source) || 'Website Contact Form',
  };

  next();
}

/**
 * Validate Free Trial submission
 */
export function validateFreeTrial(req, res, next) {
  const body = req.body || {};
  // Handle firstName + lastName or name or fullName
  const rawName = body.name || body.fullName || `${body.firstName || ''} ${body.lastName || ''}`.trim();
  const cleanName = sanitizeString(rawName);
  const cleanEmail = sanitizeString(body.email).toLowerCase();
  const cleanPhone = sanitizeString(body.phone);
  const cleanCompany = sanitizeString(body.company || body.businessName);
  const cleanRequirements = sanitizeString(body.requirements || body.comments || body.message || `Product: ${body.product || body.productName || 'All Suite'}`);

  if (!cleanName || cleanName.length < 2) {
    return res.status(400).json({
      success: false,
      message: 'Contact name is required.',
    });
  }

  if (!cleanEmail || !EMAIL_REGEX.test(cleanEmail)) {
    return res.status(400).json({
      success: false,
      message: 'A valid work email address is required.',
    });
  }

  req.sanitizedData = {
    name: cleanName,
    email: cleanEmail,
    phone: cleanPhone || null,
    company: cleanCompany || null,
    requirements: cleanRequirements || 'Free trial evaluation request',
  };

  next();
}

/**
 * Validate Demo Request
 */
export function validateDemoRequest(req, res, next) {
  const { name, email, phone, company, preferred_contact_method, message } = req.body || {};

  const cleanName = sanitizeString(name);
  const cleanEmail = sanitizeString(email).toLowerCase();
  const cleanPhone = sanitizeString(phone);
  const cleanCompany = sanitizeString(company);
  const cleanMethod = sanitizeString(preferred_contact_method) || 'Email';
  const cleanMessage = sanitizeString(message);

  if (!cleanName || cleanName.length < 2) {
    return res.status(400).json({
      success: false,
      message: 'Name is required.',
    });
  }

  if (!cleanEmail || !EMAIL_REGEX.test(cleanEmail)) {
    return res.status(400).json({
      success: false,
      message: 'A valid business email address is required.',
    });
  }

  req.sanitizedData = {
    name: cleanName,
    email: cleanEmail,
    phone: cleanPhone || null,
    company: cleanCompany || null,
    preferred_contact_method: cleanMethod,
    message: cleanMessage || 'Software demonstration request',
  };

  next();
}

/**
 * Validate Specialist Request
 */
export function validateSpecialistRequest(req, res, next) {
  const { name, email, phone, company, message, product } = req.body || {};

  const cleanName = sanitizeString(name);
  const cleanEmail = sanitizeString(email).toLowerCase();
  const cleanPhone = sanitizeString(phone);
  const cleanCompany = sanitizeString(company);
  const cleanProduct = sanitizeString(product);
  const rawMsg = message || (cleanProduct ? `Consultation requested regarding ${cleanProduct}` : '');
  const cleanMessage = sanitizeString(rawMsg);

  if (!cleanName || cleanName.length < 2) {
    return res.status(400).json({
      success: false,
      message: 'Your name is required.',
    });
  }

  if (!cleanEmail || !EMAIL_REGEX.test(cleanEmail)) {
    return res.status(400).json({
      success: false,
      message: 'A valid email address is required.',
    });
  }

  req.sanitizedData = {
    name: cleanName,
    email: cleanEmail,
    phone: cleanPhone || null,
    company: cleanCompany || null,
    message: cleanMessage || 'Request to speak with an automotive systems specialist',
  };

  next();
}

/**
 * Validate Newsletter Subscription
 */
export function validateNewsletter(req, res, next) {
  const { email } = req.body || {};
  const cleanEmail = sanitizeString(email).toLowerCase();

  if (!cleanEmail || !EMAIL_REGEX.test(cleanEmail)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address.',
    });
  }

  req.sanitizedData = {
    email: cleanEmail,
  };

  next();
}
