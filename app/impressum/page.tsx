import Image from 'next/image';
import Link from 'next/link';

export default function Impressum() {
  return (
    <>
      {/* HEADER (copied from homepage) */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black border-b-2 border-gold">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <Image src="/dse-logo.png" alt="DSE Group Logo" width={110} height={70} className="h-14 w-auto" />
          </a>
        </div>
      </header>
      <main className="min-h-screen bg-white text-black py-24 px-4 flex flex-col items-center justify-center pt-32">
        <div className="max-w-2xl w-full mx-auto bg-white rounded-xl shadow-xl border-2 border-gold p-8">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">Impressum</h1>
          <div className="space-y-4 text-lg">
            <div><b>DSE Group FZCO</b><br />Dubai Silicon Oasis, IFZA<br />Dubai, United Arab Emirates<br />License Number: [Insert]<br />Managing Director: Daniel Sedlak<br />Email: <a href="mailto:dan@dsegroupae.com" className="underline hover:text-gold">dan@dsegroupae.com</a></div>
            <p>This website is operated by DSE Group FZCO, a registered entity under UAE law. All content, design, and branding are the intellectual property of DSE Group unless otherwise stated.</p>
          </div>
        </div>
        {/* Return to Website Button */}
        <Link href="/" className="fixed left-6 bottom-6 bg-black text-white border-2 border-gold rounded-full px-5 py-2 text-sm font-bold shadow-lg hover:bg-gold hover:text-black transition-all z-50">Return to Website</Link>
      </main>
    </>
  );
} 