import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - EtherCore",
  description: "Learn about our cookie policy and how we use cookies to enhance your experience on our website.",
};

export default function CookiePolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-gray-300">
      <h1 className="text-3xl font-bold mb-4">📌 Cookie Policy</h1>
      <p className="mb-4">Last updated: [14/02/2025]</p>

      <h2 className="text-2xl font-semibold mt-8">1. What Are Cookies?</h2>
      <p>Cookies are small files stored on your device that help improve your browsing experience.</p>

      <h2 className="text-2xl font-semibold mt-8">2. How We Use Cookies</h2>
      <p>We use cookies to:</p>
      <ul className="list-disc ml-6">
        <li>✔️ Ensure website functionality.</li>
        <li>✔️ Analyze traffic and improve performance.</li>
        <li>✔️ Protect against spam and security threats (e.g., Google reCAPTCHA).</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">3. Types of Cookies We Use</h2>
      <ul className="list-disc ml-6">
        <li>✔️ <strong>Essential Cookies:</strong> Needed for website functionality.</li>
        <li>✔️ <strong>Analytics Cookies:</strong> Track user behavior and performance.</li>
        <li>✔️ <strong>Security Cookies:</strong> Prevent spam with Google reCAPTCHA.</li>
        <li>✔️ <strong>Third-Party Cookies:</strong> Used by services like Google, YouTube, Facebook.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">4. Managing Cookies</h2>
      <p>You can disable cookies in your browser settings:</p>
      <ul className="list-disc ml-6">
        <li>🔹 <a href="https://support.google.com/chrome/answer/95647" target="_blank" className="text-teal-400 hover:underline">Google Chrome: Manage Cookies</a></li>
        <li>🔹 <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" className="text-teal-400 hover:underline">Mozilla Firefox: Manage Cookies</a></li>
        <li>🔹 <a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" className="text-teal-400 hover:underline">Safari: Manage Cookies</a></li>
        <li>🔹 <a href="https://support.microsoft.com/en-us/microsoft-edge/view-cookies-in-microsoft-edge-63947406-40ac-c3b3-2775-56bc163015f3" target="_blank" className="text-teal-400 hover:underline">Edge: Manage Cookies</a></li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8">5. Contact Us</h2>
      <p>If you have questions about cookies, contact us at <a href="mailto:admin@ether-core.com" className="text-teal-400 hover:underline">admin@ether-core.com</a>.</p>
    </div>
  );
}
