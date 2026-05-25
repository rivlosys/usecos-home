'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';

export default function Header() {
  const pathname = usePathname();
  const { toggle } = useTheme();
  const isHome = pathname === '/';

  return (
    <header className="wrap py-8 flex flex-col items-center relative">
      {!isHome && (
        <Link href="/" className="absolute left-6 top-10 text-xs text-[var(--muted)] hover:text-[var(--text)] transition-colors">
          ← Back to tools
        </Link>
      )}
      
      <button onClick={toggle} className="absolute right-6 top-8 p-2 rounded-xl bg-[var(--card)] border border-[var(--border)] hover:border-[var(--muted)] transition-all">
        <svg className="block dark:hidden" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
        <svg className="hidden dark:block" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      </button>

      <Link href="/" className="flex items-center gap-0 no-underline group">
        <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-105 transition-transform">
          <rect width="32" height="32" rx="8" fill="url(#logo_grad_main)"/>
          <path d="M22 11L13.5 20L10 16.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="logo_grad_main" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1b76df"/><stop offset="1" stopColor="#22c98a"/>
            </linearGradient>
          </defs>
        </svg>
        <span className="text-4xl font-bold tracking-tighter text-[var(--text)]">
          use<span className="wordmark-span">cos</span>
        </span>
      </Link>
    </header>
  );
}