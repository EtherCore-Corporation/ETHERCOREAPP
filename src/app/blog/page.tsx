import { supabase } from "@/lib/supabase";
import BlogClient from "@/components/BlogClient";
import GridBackground from "@/components/GridBackground";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    <main className="min-h-screen bg-[#0a192f] w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 w-full">
        <div className="absolute inset-0">
          <GridBackground />
        </div>
        
        <div className="relative z-10 w-full max-w-[90%] md:max-w-7xl mx-auto px-4">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 
            bg-gradient-to-r from-teal-300 to-blue-400 text-transparent bg-clip-text">
            LATEST INSIGHTS
          </h1>

          {/* Promo Card */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="group relative p-6 rounded-xl bg-gradient-to-br from-[#0d2231]/80 
              to-[#1a2438]/80 backdrop-blur-sm hover:from-teal-600/20 hover:to-blue-600/20 
              transition-all duration-500 hover:shadow-[0_0_30px_rgba(45,212,191,0.2)] overflow-hidden">
              {/* Promo content */}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {blogs.map((blog) => (
              <Link 
                key={blog.id}
                href={`/blog/${blog.slug}`}
                className="w-full group relative bg-[#0d1424]/80 rounded-xl overflow-hidden 
                  border border-teal-500/20 hover:border-teal-500/40 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 md:h-48 lg:h-56">
                  <Image
                    src={blog.image_url}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1424] via-[#0d1424]/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  {/* Date */}
                  <time className="text-teal-400 text-sm mb-2 block">
                    {new Date(blog.published_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-white 
                    group-hover:text-teal-400 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 text-sm sm:text-base mb-4 line-clamp-3">
                    {blog.content.slice(0, 150)}...
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center text-teal-400 text-sm sm:text-base">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="p-6 rounded-xl text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Follow Us</h2>
            <p className="text-gray-300 mb-6">Stay connected with us on social media!</p>
            <SocialMediaLinks size={40} />
          </div>
        </div>
      </section>
    </main>
  );
}
