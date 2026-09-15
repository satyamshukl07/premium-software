/**
 * API Base URL Resolver
 * Allows pointing to external backend URL if frontend is deployed separately (e.g. on Vercel)
 * without a local serverless API route, or falls back to relative `/api`.
 */
export const API_BASE_URL = import.meta.env.VITE_API_URL
  ? import.meta.env.VITE_API_URL.replace(/\/$/, '')
  : '';

export function getApiUrl(path) {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${API_BASE_URL}${cleanPath}`;
}
