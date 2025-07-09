'use client';

import { usePathname } from 'next/navigation';

export default function LayoutClient({ children }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <main className={isHome ? 'main-home' : ''}>
      {children}
    </main>
  );
}
