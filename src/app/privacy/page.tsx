import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - EtherCore",
  description: "Learn how EtherCore collects, uses, and protects your personal information.",
  keywords: "privacy policy, data protection, user data, cookies, security",
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-gray-300">
      <h1 className="text-3xl font-bold mb-4">📌 Privacy Policy</h1>
      <p className="mb-4">Last updated: [14/02/2025]</p>

      <h2 className="text-2xl font-semibold mt-8">1. Introduction</h2>
      <p>
        EtherCore (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) values your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website.
      </p>

      <h2 className="text-2xl font-semibold mt-8">2. Information We Collect</h2>
      <ul className="list-disc ml-6">
        <li>🔹 Personal Information (name, email, subject of inquiry).</li>
        <li>🔹 Technical Information (IP address, browser type, pages visited).</li>
        <li>🔹 Cookies & Tracking (security, analytics, functionality).</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">3. How We Use Your Information</h2>
      <ul className="list-disc ml-6">
        <li>✅ Respond to inquiries.</li>
        <li>✅ Improve website & services.</li>
        <li>✅ Analyze traffic & enhance security.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">4. Cookies & Tracking</h2>
      <p>
        We use cookies for security, analytics, and a better user experience. Read our{" "}
        <a href="/cookie-policy" className="text-teal-400 hover:underline">Cookie Policy</a> for details.
      </p>

      <h2 className="text-2xl font-semibold mt-8">5. Your Rights</h2>
      <p>
        You have the right to access, correct, or delete your data. Contact us at{" "}
        <a href="mailto:admin@ether-core.com" className="text-teal-400 hover:underline">admin@ether-core.com</a>.
      </p>

      <h2 className="text-2xl font-semibold mt-8">6. Data Security</h2>
      <p>We implement strict security measures to protect your data. However, no system is 100% secure.</p>

      <h2 className="text-2xl font-semibold mt-8">7. Changes to This Privacy Policy</h2>
      <p>We may update this policy occasionally. Check this page for changes.</p>
    </div>
  );
}
