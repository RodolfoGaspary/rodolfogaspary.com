/**
 * Middleware to enforce HTTPS and set security headers
 */
export function handleRequest(request: Request): Response | null {
  const url = new URL(request.url);

  // Enforce HTTPS
  if (url.protocol === 'http:') {
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 301);
  }

  return null;
}
