export function getBaseUrl() {
  if (process.env.PUBLIC_BASE_URL) {
    return process.env.PUBLIC_BASE_URL;
  }

  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }

  return 'http://localhost:3000';
}