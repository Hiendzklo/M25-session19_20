import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:js|css|map|json)).*)', // Bỏ qua các file tĩnh
    '/', // Áp dụng cho route gốc
    '/dashboard', // Áp dụng cho route dashboard
    '/api/(.*)', // Áp dụng cho tất cả các route API
  ],
};
