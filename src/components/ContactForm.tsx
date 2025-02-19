"use client";

import { useState } from 'react';
import { Send } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General/Other Enquiries',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.subject) {
      setFormData({ ...formData, subject: 'General/Other Enquiries' });
    }
    if (!captchaValue) {
      alert('Please complete the reCAPTCHA.');
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          captchaValue
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: 'General/Other Enquiries', message: '' });
      setCaptchaValue(null);
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Name Input */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500/20 to-blue-500/20 
            rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 
            group-hover:duration-200" />
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="relative w-full px-4 py-3 bg-[#0d2231]/50 rounded-lg 
              border border-teal-500/20 focus:border-teal-500/50
              text-gray-300 placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-teal-500/20
              backdrop-blur-sm transition-all duration-300"
            placeholder="Your Name"
          />
        </div>

        {/* Email Input */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500/20 to-blue-500/20 
            rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 
            group-hover:duration-200" />
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="relative w-full px-4 py-3 bg-[#0d2231]/50 rounded-lg 
              border border-teal-500/20 focus:border-teal-500/50
              text-gray-300 placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-teal-500/20
              backdrop-blur-sm transition-all duration-300"
            placeholder="Your Email"
          />
        </div>
      </div>

      {/* Subject Dropdown */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500/20 to-blue-500/20 
          rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 
          group-hover:duration-200" />
        <select
          name="subject"
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="relative w-full px-4 py-3 bg-[#0d2231]/50 rounded-lg 
            border border-teal-500/20 focus:border-teal-500/50
            text-gray-300 placeholder-gray-500
            focus:outline-none focus:ring-2 focus:ring-teal-500/20
            backdrop-blur-sm transition-all duration-300"
        >
          <option value="General/Other Enquiries" className="text-gray-300 bg-[#0d2231]">General/Other Enquiries</option>
          <option value="SEO" className="text-gray-300 bg-[#0d2231]">SEO</option>
          <option value="Web Development" className="text-gray-300 bg-[#0d2231]">Web Development</option>
          <option value="App Development" className="text-gray-300 bg-[#0d2231]">App Development</option>
          <option value="AI Automation" className="text-gray-300 bg-[#0d2231]">AI Automation</option>
          <option value="UX/UI Design/Redesign" className="text-gray-300 bg-[#0d2231]">UX/UI Design/Redesign</option>
        </select>
      </div>

      {/* Message Input */}
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500/20 to-blue-500/20 
          rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 
          group-hover:duration-200" />
        <textarea
          name="message"
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={6}
          className="relative w-full px-4 py-3 bg-[#0d2231]/50 rounded-lg 
            border border-teal-500/20 focus:border-teal-500/50
            text-gray-300 placeholder-gray-500
            focus:outline-none focus:ring-2 focus:ring-teal-500/20
            backdrop-blur-sm transition-all duration-300 resize-none"
          placeholder="Your Message"
        />
      </div>

      {/* reCAPTCHA */}
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
        onChange={(value: string | null) => setCaptchaValue(value)}
      />

      {/* Centered Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="relative inline-flex items-center px-8 py-4 bg-[#0a0f1a] rounded-xl
            text-lg font-semibold overflow-hidden button-shine group/btn"
        >
          <span className="bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent 
            group-hover:from-white group-hover:to-white transition-all duration-300">
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </span>
          <Send className="w-5 h-5 text-teal-400 group-hover:text-white" />
        </button>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="text-green-400 mt-4">Message sent successfully!</div>
      )}
      {submitStatus === 'error' && (
        <div className="text-red-400 mt-4">Failed to send message. Please try again.</div>
      )}
    </form>
  );
} 