/**
 * In-Memory Rate Limiter for public endpoints & login security
 * Limits requests per IP within a sliding timeframe
 */

const ipRequestMap = new Map();

/**
 * Creates a rate limit middleware
 * @param {number} maxRequests - Max allowed requests in time window
 * @param {number} windowMs - Window in milliseconds (e.g. 60000 = 1 min)
 * @param {string} message - Error message
 */
export function rateLimiter({ maxRequests = 20, windowMs = 60 * 1000, message = 'Too many requests. Please try again shortly.' } = {}) {
  // Cleanup stale IP records every 5 minutes
  setInterval(() => {
    const now = Date.now();
    for (const [key, record] of ipRequestMap.entries()) {
      if (now - record.startTime > windowMs * 2) {
        ipRequestMap.delete(key);
      }
    }
  }, 5 * 60 * 1000).unref();

  return (req, res, next) => {
    // In preview/dev or behind proxies, look at x-forwarded-for or connection ip
    const clientIp = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || '127.0.0.1';
    const key = `${req.path}:${clientIp}`;
    const now = Date.now();

    const record = ipRequestMap.get(key) || { count: 0, startTime: now };

    if (now - record.startTime > windowMs) {
      record.count = 1;
      record.startTime = now;
    } else {
      record.count += 1;
    }

    ipRequestMap.set(key, record);

    if (record.count > maxRequests) {
      return res.status(429).json({
        success: false,
        message,
        retryAfter: Math.ceil((record.startTime + windowMs - now) / 1000),
      });
    }

    next();
  };
}
