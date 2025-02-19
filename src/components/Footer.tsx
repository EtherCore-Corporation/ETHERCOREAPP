import React from 'react';
import Link from 'next/link';
import SocialMediaLinks from './SocialMediaLinks';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0d2231] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Side: Branding & Socials */}
        <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-6">
          <div>
            <h2 className="text-lg font-bold">Ether Core</h2>
            <p className="text-sm">© {new Date().getFullYear()} Ether Core. All rights reserved.</p>
          </div>

          {/* Social Media Icons INLINE with Branding */}
          <SocialMediaLinks size={60} />
        </div>

        {/* Right Side: Links */}
        <div className="flex space-x-6">
          <Link href="/privacy/" className="text-teal-400 hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms/" className="text-teal-400 hover:underline">
            Terms of Service
          </Link>
          <Link href="/cookie/" className="text-teal-400 hover:underline">
            Cookie Policy
          </Link>
          <Link href="/contact/" className="text-teal-400 hover:underline">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
