import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="wrap mt-20 pb-12 pt-8 text-center border-t border-[var(--border)]">
      <div className="text-sm font-bold text-[var(--muted)] mb-4">
        use<span className="text-[#22c98a]">cos</span>.app
      </div>
      
      <div className="flex gap-5 justify-center flex-wrap text-xs mb-6">
        <Link href="/about" className="text-[var(--muted)] hover:text-[var(--text)] transition-colors">About</Link>
        <Link href="/privacy" className="text-[var(--muted)] hover:text-[var(--text)] transition-colors">Privacy</Link>
        <Link href="/disclaimer" className="text-[var(--muted)] hover:text-[var(--text)] transition-colors">Disclaimer</Link>
        <a href="mailto:hello@usecos.app" className="text-[var(--muted)] hover:text-[var(--text)] transition-colors">Contact</a>
      </div>

      <div className="flex justify-center gap-4 text-[11px] text-[var(--muted)] mb-6 flex-wrap">
        <span className="flex items-center gap-1.5">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#16a34a" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
          No tracking
        </span>
        <span className="flex items-center gap-1.5">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#16a34a" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
          No data stored
        </span>
        <span className="flex items-center gap-1.5">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#16a34a" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
          No signup
        </span>
      </div>

      <p className="text-[10px] text-[var(--muted)]">
        © use<span className="text-[#22c98a]">cos</span>. Tools are private, fast, and for estimation purposes only.
      </p>
    </footer>
  );
}