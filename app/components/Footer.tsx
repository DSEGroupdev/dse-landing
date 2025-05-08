'use client';

import Image from 'next/image';
import { Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center">
            <Image src="/dse-logo.png" alt="DSE Group Logo" width={56} height={56} className="h-14 w-auto" />
          </div>
          
          <div className="text-center">
            <a href="mailto:hello@dsegroup.ai" className="text-gold hover:text-white transition-colors">
              hello@dsegroup.ai
            </a>
          </div>
          
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors">
              <Twitter size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          © 2025 DSE Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 