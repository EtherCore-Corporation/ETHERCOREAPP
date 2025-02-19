import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - EtherCore",
  description: "Read the terms of service for using EtherCore's website and services.",
  keywords: "terms of service, legal agreement, website terms, user policy, EtherCore",
};

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-gray-300">
      <h1 className="text-3xl font-bold mb-4">📌 Terms of Service</h1>
      <p className="mb-4">Last updated: [14/02/2025]</p>

      <h2 className="text-2xl font-semibold mt-8">1. Introduction</h2>
      <p>
        Welcome to Ether Core. By accessing our website, you agree to these Terms of Service.
      </p>

      <h2 className="text-2xl font-semibold mt-8">2. Use of Our Website</h2>
      <ul className="list-disc ml-6">
        <li>✔️ You must be at least 18 years old to use this site.</li>
        <li>✔️ You cannot use our website for unlawful activities.</li>
        <li>✔️ We may change or suspend services without notice.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">3. Intellectual Property</h2>
      <p>
        All content on this site (text, images, branding) is owned by Ether Core. You cannot copy, distribute, or modify any content without permission.
      </p>

      <h2 className="text-2xl font-semibold mt-8">4. User-Submitted Content</h2>
      <ul className="list-disc ml-6">
        <li>✅ If you submit content (e.g., messages, feedback), you grant us permission to use it.</li>
        <li>✅ You confirm it does not violate any laws or rights.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">5. Disclaimers & Limitations</h2>
      <ul className="list-disc ml-6">
        <li>✔️ <strong>No guarantees:</strong> We aim to provide accurate information but do not guarantee error-free content.</li>
        <li>✔️ <strong>Limited liability:</strong> We are not responsible for any damages resulting from website use.</li>
        <li>✔️ <strong>External links:</strong> We may link to third-party sites but do not control their content.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">6. Privacy & Cookies</h2>
      <p>
        Your use of this site is also governed by our
        <a href="/privacy" className="text-teal-400 hover:underline"> Privacy Policy</a>
        and
        <a href="/cookie-policy" className="text-teal-400 hover:underline"> Cookie Policy</a>.
      </p>

      <h2 className="text-2xl font-semibold mt-8">7. Governing Law</h2>
      <p>These Terms are governed by the laws of [Your Country].</p>

      <h2 className="text-2xl font-semibold mt-8">8. Changes to These Terms</h2>
      <p>We may update these Terms at any time. Continued use means you accept changes.</p>

      <h2 className="text-2xl font-semibold mt-8">9. Contact Us</h2>
      <p>
        📩 Contact us at{" "}
        <a href="mailto:admin@ether-core.com" className="text-teal-400 hover:underline">admin@ether-core.com</a>.
      </p>
    </div>
  );
}
