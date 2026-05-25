import Link from 'next/link';

export const metadata = {
  title: 'Free Online Tools – usecos',
  description: 'Free, private tools for USA & Canada. Mortgage calculators, VIN decoders, and paycheck estimators.',
};

export default function HomePage() {
  return (
    <div className="wrap text-center py-12">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Make better decisions — instantly.</h1>
        <p className="text-[var(--sub)] mb-8">Simple tools to help you save money and understand your numbers.</p>
        <div className="flex justify-center gap-3 mb-10">
          <span className="pill">🇺🇸🇨🇦 USA & Canada</span>
          <span className="pill">🔒 100% private</span>
          <span className="pill">⚡ No account needed</span>
        </div>
        <a href="#tools" className="primary-btn">Start Calculating →</a>
      </section>

      <div id="tools" className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        <Link href="/mortgage" className="tool-card group" data-color="mortgage">
          <div className="text-2xl mb-4">🏠</div>
          <div className="font-bold text-lg">Mortgage Calculator</div>
          <p className="text-sm text-[var(--sub)] mt-2">Estimate payments, CMHC insurance, and closing costs.</p>
          <span className="text-xs font-bold text-[var(--mortgage)] mt-4">Open →</span>
        </Link>

        <Link href="/pay" className="tool-card group" data-color="pay">
          <div className="text-2xl mb-4">💳</div>
          <div className="font-bold text-lg">Paycheck Calculator</div>
          <p className="text-sm text-[var(--sub)] mt-2">See your exact take-home pay after federal and state taxes.</p>
          <span className="text-xs font-bold text-[var(--pay)] mt-4">Open →</span>
        </Link>

        <Link href="/vin" className="tool-card group" data-color="vin">
          <div className="text-2xl mb-4">🚗</div>
          <div className="font-bold text-lg">VIN Decoder</div>
          <p className="text-sm text-[var(--sub)] mt-2">Check vehicle history and technical specs for free.</p>
          <span className="text-xs font-bold text-[var(--vin)] mt-4">Open →</span>
        </Link>

        <Link href="/gst" className="tool-card group" data-color="gst">
          <div className="text-2xl mb-4">📊</div>
          <div className="font-bold text-lg">GST/HST Calculator</div>
          <p className="text-sm text-[var(--sub)] mt-2">Canadian sales tax estimation for all provinces.</p>
          <span className="text-xs font-bold text-[var(--gst)] mt-4">Open →</span>
        </Link>
      </div>
    </div>
  );
}