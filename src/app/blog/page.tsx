import { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import BlogClient from "@/components/BlogClient";

// ✅ Page-specific SEO metadata
export const metadata: Metadata = {
  title: "Blog - Insights & Updates",
  description: "Read the latest articles and industry trends from the EtherCore team.",
  keywords: "blog, insights, updates, technology, web development, AI automation",
  openGraph: {
    title: "Blog - Insights & Updates",
    description: "Read the latest articles and industry trends from the EtherCore team.",
    url: "https://ether-core.com/blog",
    siteName: "EtherCore",
    images: [
      {
        url: "https://ejoimfdulvukutxdznem.supabase.co/storage/v1/object/public/logo_ether/logo_name2.png",
        width: 800,
        height: 600,
        alt: "EtherCore Blog"
      }
    ]
  }
};

// ✅ Fetch Data (Runs on the Server)
async function getData() {
  const { data: blogs } = await supabase
    .from("blogs")
    .select("*")
    .order("published_at", { ascending: false });

  return blogs || [];
}

// ✅ Server Component (Passes Data to BlogClient)
export default async function BlogPage() {
  const blogs = await getData();
  return <BlogClient blogs={blogs} />;
}
