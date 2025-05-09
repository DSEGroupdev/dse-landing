export default function Privacy() {
  return (
    <main className="min-h-screen bg-white text-black py-24 px-4 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full mx-auto bg-white rounded-xl shadow-xl border-2 border-gold p-8">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">Privacy Policy</h1>
        <div className="space-y-4 text-lg">
          <p>DSE Group respects your privacy. We only collect essential data necessary to operate our services, including contact form submissions and analytics.</p>
          <p>We do not sell or share your personal information with third parties. By using this site, you consent to our use of cookies and standard analytics tools.</p>
          <p>If you have questions, please contact: <a href="mailto:dan@dsegroupae.com" className="underline hover:text-gold">dan@dsegroupae.com</a></p>
        </div>
      </div>
    </main>
  );
} 