'use client';

import Image from 'next/image';
import { Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white border-t-2 border-gold py-8 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <span className="font-bold">© 2025 DSE Group FZCO. All rights reserved.</span>
          <span>Registered in the UAE | License # (placeholder)</span>
          <span>Email: <a href="mailto:dan@dsegroupae.com" className="underline hover:text-gold transition">dan@dsegroupae.com</a></span>
        </div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/impressum" className="hover:text-gold transition">Impressum</Link>
          <Link href="/privacy" className="hover:text-gold transition">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-gold transition">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
} 