export default function Impressum() {
  return (
    <main className="min-h-screen bg-white text-black py-24 px-4 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full mx-auto bg-white rounded-xl shadow-xl border-2 border-gold p-8">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">Impressum</h1>
        <div className="space-y-4 text-lg">
          <div><b>DSE Group FZCO</b><br />Dubai Silicon Oasis, IFZA<br />Dubai, United Arab Emirates<br />License Number: [Insert]<br />Managing Director: Daniel Sedlak<br />Email: <a href="mailto:dan@dsegroupae.com" className="underline hover:text-gold">dan@dsegroupae.com</a></div>
          <p>This website is operated by DSE Group FZCO, a registered entity under UAE law. All content, design, and branding are the intellectual property of DSE Group unless otherwise stated.</p>
        </div>
      </div>
    </main>
  );
} 