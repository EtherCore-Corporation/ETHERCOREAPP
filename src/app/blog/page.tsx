import { supabase } from "@/lib/supabase";
import BlogClient from "@/components/BlogClient";
import GridBackground from "@/components/GridBackground";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import Image from "next/image";
import { Metadata } from "next";

// ✅ Metadata (Handled by Next.js)
export const metadata: Metadata = {
  title: "Blog - Insights & Updates",
  description: "Read the latest articles and industry trends from the EtherCore team.",
  keywords: "blog, insights, updates, technology, web development, AI automation",
};

// ✅ Fetch Data (Runs on the Server)
async function getData() {
  const { data: blogs } = await supabase
    .from("blogs")
    .select("*")
    .order("published_at", { ascending: false });

  return blogs || [];
}

// ✅ Server Component (Passes Data to `BlogClient`)
export default async function BlogPage() {
  const blogs = await getData();

  return (
    <main className="min-h-screen pt-20">
      {/* ✅ Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden min-h-[80vh] flex items-center">
        <GridBackground />
        <div className="max-w-6xl mx-auto relative z-20 w-full">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent">
            Welcome to Our Blog
          </h1>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            If you are a business owner, entrepreneur, or just a person curious
            to learn more about tech-related topics, we hope you&apos;ll find
            valuable tips here to simplify your digital tasks. Our goal is to
            help you solve problems and improve your workflows with actionable
            advice and creative ideas.
          </p>
        </div>
      </section>

      {/* ✅ Grid Section (Prompt Library & Special Offer) */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 📌 Prompt Library */}
          <div className="group relative p-6 rounded-xl bg-gradient-to-br from-[#0d2231]/80 to-[#1a2438]/80 backdrop-blur-sm hover:from-teal-600/20 hover:to-blue-600/20 transition-all duration-500 hover:shadow-[0_0_30px_rgba(45,212,191,0.2)] overflow-hidden">
            <div className="relative z-10 text-center flex flex-col items-center">
              <Image
                src="https://ejoimfdulvukutxdznem.supabase.co/storage/v1/object/public/portfolio-images//logo_elevate.svg"
                alt="Elevate Up Logo"
                width={300}
                height={300}
                className="mb-4"
              />
              <h2 className="text-xl font-bold text-white mb-6">Explore the Prompt Library</h2>
              <p className="text-gray-300 mb-4">
                Discover helpful prompts to make the most out of LLMs like
                ChatGPT or Gemini. From finding your next big idea, building
                your dream website, or even generating content for your blog,
                the prompt library from our partners at ElevateUp has you
                covered.
              </p>
              <a href="https://www.elevateup.tech/auth/login" className="text-teal-400 hover:underline">
                Visit Prompt Library →
              </a>
            </div>
          </div>

          {/* 📌 Special Offer */}
          <div className="group relative p-6 rounded-xl bg-gradient-to-br from-[#0d2231]/80 to-[#1a2438]/80 backdrop-blur-sm hover:from-teal-600/20 hover:to-blue-600/20 transition-all duration-500 hover:shadow-[0_0_30px_rgba(45,212,191,0.2)] overflow-hidden">
            <div className="relative z-10 text-center flex flex-col items-center">
              <Image
                src="https://ejoimfdulvukutxdznem.supabase.co/storage/v1/object/public/logo_ether//logo_figure_core.png"
                alt="Special Offer Logo"
                width={100}
                height={100}
                className="mt-6 mb-12"
              />
              <h2 className="text-xl font-bold text-white mb-6">Your New Website For £300</h2>
              <p className="text-gray-300 mb-9">
                Get a custom-designed website tailored to your business needs
                for a bargain price! Fully optimized for SEO and built for
                speed. Before you pay or sign anything, get a free sample of
                your website to see what we can do for you.
              </p>
              <a href="/contact/" className="text-teal-400 hover:underline">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Follow Us Section (NOW PLACED BETWEEN THE SECTIONS) */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <GridBackground />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="p-6 rounded-xl text-center flex flex-col items-center">
            <h1 className="text-xl font-bold text-white mb-2">Follow Us</h1>
            <p className="text-gray-300 mb-4">Stay connected with us on social media!</p>
            <SocialMediaLinks size={60} />
          </div>
        </div>
      </section>

      {/* ✅ Blog Content (Handled by Client Component) */}
      <BlogClient blogs={blogs} />
    </main>
  );
}
