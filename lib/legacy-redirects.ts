/**
 * Old paths that should permanently land on a homepage section.
 * There is no privacy section on the current site, so /privacy goes home.
 * www → apex is intentionally absent: a Cloudflare Redirect Rule handles it.
 * Keep public/_redirects in sync with this map.
 */
export const LEGACY_REDIRECTS: Record<string, string> = {
  "/services": "/#services",
  "/services/": "/#services",
  "/about": "/#about",
  "/about/": "/#about",
  "/contact": "/#contact",
  "/contact/": "/#contact",
  "/privacy": "/",
  "/privacy/": "/",
}
