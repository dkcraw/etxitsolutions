/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // /services/ must 301 straight to /#services. Next's built-in trailing-slash
  // redirect is a 308 and would fire first. middleware.ts handles both forms.
  skipTrailingSlashRedirect: true,
}

export default nextConfig
