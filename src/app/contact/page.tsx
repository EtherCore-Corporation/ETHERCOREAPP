import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import GridBackground from "@/components/GridBackground";
import { Phone, Clock, Mail, MessageSquare } from "lucide-react";

// ✅ Page-specific SEO metadata (handled by Next.js)
export const metadata: Metadata = {
  title: "Contact Us - EtherCore",
  description:
    "Get in touch with us today and take the first step towards transforming your online presence.",
  keywords:
    "contact, web development, AI automation, digital solutions, SEO optimization, business consultation",
  openGraph: {
    title: "Contact Us - EtherCore",
    description:
      "Get in touch with our team for professional web development, AI automation, and SEO optimization services.",
    url: "https://ether-core.com/contact",
    siteName: "EtherCore",
    images: [
      {
        url: "https://ejoimfdulvukutxdznem.supabase.co/storage/v1/object/public/logo_ether/logo_name2.png",
        width: 800,
        height: 600,
        alt: "EtherCore Contact Page",
      },
    ],
  },
};

// ✅ This remains a **Server Component**
export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <GridBackground />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-300 to-blue-400 
              bg-clip-text text-transparent animate-fade-in leading-loose pb-2 px-1">
              Let&apos;s Build Something Amazing Together
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up">
              Get in touch with us today and take the first step towards transforming your online presence.
            </p>
          </div>

          {/* Consultation Offer Card */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="relative group p-6 md:p-8 rounded-2xl overflow-hidden animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}>
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 opacity-50" />
              <div className="absolute inset-0 backdrop-blur-sm bg-[#0d2231]/50" />
              
              {/* Border Gradient */}
              <div className="absolute inset-0 border border-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-2xl" />

              {/* Content */}
              <div className="relative">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <Phone className="w-6 h-6 text-teal-400" />
                  <h2 className="text-2xl font-bold text-white">Free Consultation Call</h2>
                </div>

                <div className="space-y-4 text-center mb-8">
                  <p className="text-gray-300">
                    Book a free 15-minute consultation call with our team. We&apos;ll discuss your project 
                    and show you a live demo of our CMS platform.
                  </p>
                  <div className="flex items-center justify-center space-x-6 text-gray-400">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-teal-400" />
                      <span>15 Minutes</span>
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="w-4 h-4 mr-2 text-teal-400" />
                      <span>Live Demo</span>
                    </div>
                  </div>
                </div>

                {/* Calendar Link Button */}
                <div className="flex justify-center">
                  <a 
                    href="https://calendly.com/admin-ether-core/15min" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group inline-block"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-blue-500 
                      rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition duration-1000" />
                    <button className="relative px-8 py-4 bg-[#0a0f1a] rounded-xl text-lg font-semibold 
                      overflow-hidden group-hover:bg-[#0d2231] transition-colors duration-300">
                      <span className="bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent">
                        Schedule Your Free Call
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Or Send Us a Message
              </h2>
              <p className="text-gray-400">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
            </div>
            <ContactForm />
          </div>

          {/* Additional Contact Info */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-2 text-gray-400">
              <Mail className="w-5 h-5 text-teal-400" />
              <a href="mailto:admin@ether-core.com" className="hover:text-teal-400 transition-colors">
                admin@ether-core.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
