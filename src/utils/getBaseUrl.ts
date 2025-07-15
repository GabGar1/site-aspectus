export function getBaseUrl() {
  return process.env.VERCEL_ENV === 'production'
    ? 'https://site-aspectus.vercel.app'
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'https://siteaspectus-git-develop-gabriels-projects-1791a7c8.vercel.app';
}