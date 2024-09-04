'use client';

import { SignedIn, SignedOut, useClerk } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const clerk = useClerk();
  const router = useRouter();

  const handleSignOut = async () => {
    await clerk.signOut();
    router.push('/sign-in'); // Chuyển hướng đến trang đăng nhập sau khi đăng xuất
  };

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-4">Trang Chủ</h1>

      <SignedIn>
        <p>Bạn đã đăng nhập.</p>
        <button
          onClick={handleSignOut}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Đăng xuất
        </button>
      </SignedIn>

      <SignedOut>
        <p>Bạn chưa đăng nhập.</p>
        <br/>
        <a
          href="/sign-in"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Đăng nhập
        </a>
      </SignedOut>
    </div>
  );
}
