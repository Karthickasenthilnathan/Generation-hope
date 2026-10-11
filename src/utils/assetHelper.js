/**
 * Helper to resolve asset paths against Vite's base URL (e.g., '/Generation-hope/').
 * Ensures images in the public directory work seamlessly across both local development
 * and GitHub Pages subdirectory deployments.
 *
 * @param {string} path - Relative or root-relative path to asset in public directory
 * @returns {string} - Full path prefixed with import.meta.env.BASE_URL
 */
export function getAssetUrl(path) {
  if (!path) return '';

  // Return unchanged if already an absolute HTTP/HTTPS URL or data URI
  if (/^(?:https?:)?\/\//i.test(path) || path.startsWith('data:')) {
    return path;
  }

  const base = import.meta.env.BASE_URL || '/';

  // Avoid duplicating base if already prefixed
  if (base !== '/' && path.startsWith(base)) {
    return path;
  }

  // Strip leading slash from path
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
}
