import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';

export const metadata = {
  title: 'My Next.js App with Clerk',
  description: 'A Next.js application integrated with Clerk for authentication',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {/* Bạn có thể thêm header hoặc các thành phần chung khác tại đây */}
          <header>
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/sign-in">Sign In</a></li>
                <li><a href="/sign-up">Sign Up</a></li>
              </ul>
            </nav>
          </header>
          {children}
          {/* Bạn có thể thêm footer hoặc các thành phần chung khác tại đây */}
          <footer>
            <p>&copy; 2024 My Next.js App</p>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
