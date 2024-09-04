'use client'
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardPage() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in');
    }
  }, [isLoaded, isSignedIn, router]);

  // Nếu người dùng chưa được xác thực, không hiển thị nội dung
  if (!isSignedIn) {
    return null; // Hoặc bạn có thể hiển thị một spinner hoặc message khác
  }

  // Nội dung sẽ chỉ hiển thị nếu người dùng đã đăng nhập
  return (
    <div>
      <h1>Welcome to your Dashboard</h1>
      <p>This content is protected and only visible to authenticated users.</p>
    </div>
  );
}
