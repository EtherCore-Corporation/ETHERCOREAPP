import Image from "next/image";
import Link from "next/link";
import { supabase } from '@/lib/supabase';
import TechStack from '@/components/TechStack';
import GridBackground from '@/components/GridBackground';
import { 
  Brain, 
  Code2, 
  Search, 
  Palette,
  Calendar,
} from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { Metadata } from "next";

// ✅ Page-specific SEO metadata
export const metadata: Metadata = {
  title: "EtherCore - Affordable Digital Solutions",
  description: "Transform your business with our web development, AI automation, and SEO services.",
  keywords: "web development, AI automation, digital solutions, SEO optimization",
};

// Fetch function
async function getData() {
  const [
    { data: services },
    { data: testimonials },
    { data: portfolio },
    { data: blogs }
  ] = await Promise.all([
    supabase.from('services').select('*').order('created_at', { ascending: true }),
    supabase.from('testimonials').select('*').order('created_at', { ascending: false }),
    supabase.from('portfolio').select('*').order('created_at', { ascending: false }),
    supabase.from('blogs').select('*').order('published_at', { ascending: false }).limit(3)
  ]);

  return {
    services: services || [],
    testimonials: testimonials || [],
    portfolio: portfolio || [],
    blogs: blogs || []
  };
}

const serviceIcons = {
  'AI Automation': Brain,
  'Modern Web Development': Code2,
  'SEO Optimization': Search,
  'UX/UI Design': Palette,
};

export default async function Home() {
  const { services, testimonials, portfolio, blogs } = await getData();

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden">
          {/* Animated Background */}
          <GridBackground />
          
          <div className="max-w-6xl mx-auto text-center relative z-20">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-blue-500/20 blur-xl opacity-70" />
              <h1 className="relative text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-300 to-blue-400 
                text-transparent bg-clip-text animate-fade-in">
                WELCOME TO ETHERCORE
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in-up">
              Your Trusted Partner for Affordable Digital Solutions
            </p>
            <div className="flex gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {/* Get Started Button */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-blue-500 
                  rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 
                  group-hover:duration-200"></div>
                <Link 
                  href="/contact#consultation" 
                  className="relative inline-flex items-center px-8 py-4 bg-[#0a0f1a] rounded-xl
                    text-lg font-semibold overflow-hidden button-shine group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-blue-500/20 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-center space-x-2">
                    <span className="bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent 
                      group-hover:from-white group-hover:to-white transition-all duration-300">
                      Get Started
                    </span>
                    <svg 
                      className="w-5 h-5 text-teal-400 group-hover:text-white transform group-hover:translate-x-1 
                        transition-all duration-300"
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </Link>
              </div>

              {/* Learn More Button */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/50 to-blue-500/50 
                  rounded-xl blur-lg opacity-0 group-hover:opacity-70 transition duration-1000"></div>
                <Link 
                  href="/services"
                  className="relative inline-flex items-center px-8 py-4 bg-[#0a0f1a] rounded-xl
                    text-lg font-semibold overflow-hidden button-shine group border border-teal-500/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-blue-500/10 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent 
                    group-hover:from-white group-hover:to-white transition-all duration-300">
                    Learn More
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack - New Section */}
        <TechStack />

        {/* Services */}
        <section className="py-20 px-4 bg-[#0d1424] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 to-blue-500/10 opacity-50"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r 
              from-teal-300 to-blue-400 bg-clip-text text-transparent leading-loose pb-2 px-1">
              AFFORDABLE DIGITAL SOLUTIONS
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => {
                const IconComponent = serviceIcons[service.name as keyof typeof serviceIcons];
                return (
                  <div 
                    key={service.id} 
                    className="group relative p-6 rounded-xl bg-gradient-to-br from-[#0d2231]/80 to-[#1a2438]/80 
                      backdrop-blur-sm hover:from-teal-600/20 hover:to-blue-600/20 transition-all duration-500
                      hover:shadow-[0_0_30px_rgba(45,212,191,0.2)] overflow-hidden"
                  >
                    {/* Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-600/0 via-teal-600/5 to-blue-600/0 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Icon Container */}
                    <div className="relative mb-6 inline-block">
                      <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-xl 
                        group-hover:bg-teal-500/30 transition-all duration-500"></div>
                      <div className="relative w-12 h-12 flex items-center justify-center 
                        bg-gradient-to-br from-teal-500 to-blue-500 rounded-full
                        group-hover:scale-110 transition-transform duration-500">
                        {IconComponent && (
                          <IconComponent className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-xl font-bold mb-4 text-white group-hover:text-teal-400 
                        transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {service.description}
                      </p>
                      {/* Features */}
                      <div className="mt-4 space-y-2">
                        {service.feature1 && (
                          <div className="flex items-center text-gray-400 group-hover:text-gray-300 
                            transition-colors duration-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mr-2"></div>
                            <p>{service.feature1}</p>
                          </div>
                        )}
                        {service.feature2 && (
                          <div className="flex items-center text-gray-400 group-hover:text-gray-300 
                            transition-colors duration-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></div>
                            <p>{service.feature2}</p>
                          </div>
                        )}
                        {service.feature3 && (
                          <div className="flex items-center text-gray-400 group-hover:text-gray-300 
                            transition-colors duration-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mr-2"></div>
                            <p>{service.feature3}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 border border-transparent group-hover:border-teal-500/30 
                      rounded-xl transition-colors duration-500"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 px-4 relative overflow-hidden">
          {/* Background Effect */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 opacity-30" />
            <GridBackground />
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            {/* Price Tag */}
            <div className="inline-block mb-4 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-full blur-xl opacity-70" />
              <div className="relative px-6 py-2 bg-[#0d2231]/50 backdrop-blur-sm rounded-full border border-teal-500/20">
                <span className="text-2xl font-bold bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent">
                  £300 Fixed Price
                </span>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
              Complete Website Package
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Everything you need to establish a strong online presence
            </p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { icon: '🎨', title: 'Custom Design', desc: 'Unique, modern design' },
                { icon: '📱', title: 'Responsive', desc: 'Works on all devices' },
                { icon: '⚡', title: 'Fast Loading', desc: 'Optimized performance' },
                { icon: '🔍', title: 'SEO Ready', desc: 'Search engine optimized' },
                { icon: '🔒', title: 'Secure', desc: 'SSL certificate included' },
                { icon: '📝', title: 'Easy Updates', desc: 'User-friendly CMS' }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start p-3 rounded-xl bg-[#0d2231]/50 backdrop-blur-sm
                    border border-teal-500/10 hover:border-teal-500/30 transition-all duration-300"
                >
                  <span className="text-xl mr-3">{feature.icon}</span>
                  <div className="text-left">
                    <h3 className="font-semibold text-teal-300 text-sm">{feature.title}</h3>
                    <p className="text-gray-400 text-xs">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="relative group inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-blue-500 
                rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 
                group-hover:duration-200"></div>
              <Link 
                href="/contact#consultation"
                className="relative inline-flex items-center px-6 py-3 bg-[#0a0f1a] rounded-xl
                  text-base font-semibold overflow-hidden button-shine group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-blue-500/20 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center space-x-2">
                  <span className="bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent 
                    group-hover:from-white group-hover:to-white transition-all duration-300">
                    Start Your Project
                  </span>
                  <svg 
                    className="w-4 h-4 text-teal-400 group-hover:text-white transform group-hover:translate-x-1 
                      transition-all duration-300"
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </Link>
            </div>

            {/* Additional Info */}
            <p className="mt-4 text-gray-400 text-xs">
              * Includes 3 months of free support and maintenance. Then £25 per month for ongoing support and maintenance.
            </p>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 px-4 bg-[#0d1424]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r 
              from-teal-300 to-blue-400 bg-clip-text text-transparent">
              FEATURED PROJECTS
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolio.map((project) => (
                <div 
                  key={project.id} 
                  className="group relative rounded-xl overflow-hidden bg-[#0d2231] hover:bg-[#1a2438] 
                    transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10
                    border border-teal-500/5 hover:border-teal-500/20"
                >
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f1a]/80 to-[#0a0f1a] 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d2231] to-transparent z-10" />
                    <Image
                      src={project.image_url}
                      alt={project.title}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Floating Tag */}
                    <div className="absolute top-4 left-4 z-20 transform -translate-y-2 opacity-0 
                      group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="px-3 py-1 bg-teal-500/20 backdrop-blur-sm rounded-full 
                        border border-teal-400/20 flex items-center space-x-1">
                        <Code2 className="w-3 h-3 text-teal-400" />
                        <span className="text-xs text-teal-300">Project</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6 z-20 text-center">
                    {/* Animated Line */}
                    <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent 
                      transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    
                    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-teal-300 to-blue-400 
                      bg-clip-text text-transparent group-hover:from-teal-400 group-hover:to-blue-500 
                      transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-4">
                      {project.description}
                    </p>
                    
                    {project.project_url && (
                      <div className="transform translate-y-2 opacity-0 group-hover:translate-y-0 
                        group-hover:opacity-100 transition-all duration-300 delay-100">
                        <a 
                          href={project.project_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg
                            bg-gradient-to-r from-teal-500/10 to-blue-500/10
                            hover:from-teal-500/20 hover:to-blue-500/20
                            text-teal-400 hover:text-teal-300 
                            transition-all duration-300 group/link button-shine"
                        >
                          <span>View Project</span>
                          <svg 
                            className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300"
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r 
              from-teal-300 to-blue-400 bg-clip-text text-transparent">
              CLIENT TESTIMONIALS
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="group relative p-6 rounded-xl bg-gradient-to-br from-[#0d2231]/80 to-[#1a2438]/80 
                    backdrop-blur-sm hover:from-teal-600/10 hover:to-blue-600/10 
                    transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10
                    border border-teal-500/5 hover:border-teal-500/20"
                >
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <svg className="w-8 h-8 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center mb-4 relative">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 transform group-hover:scale-110 transition-transform duration-300"
                        style={{ transitionDelay: `${i * 50}ms` }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-300 italic mb-6 relative z-10 group-hover:text-gray-200 transition-colors">
                    &quot;{testimonial.testimonial}&quot;
                  </p>

                  {/* Client Name */}
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 
                      flex items-center justify-center text-white font-semibold text-lg
                      group-hover:scale-110 transition-transform duration-300">
                      {testimonial.client_name.charAt(0)}
                    </div>
                    <p className="ml-3 font-semibold bg-gradient-to-r from-teal-400 to-blue-400 
                      bg-clip-text text-transparent group-hover:from-teal-300 group-hover:to-blue-300">
                      {testimonial.client_name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Insights - Blog Section */}
        <section className="py-20 px-4 bg-[#0d1424]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r 
              from-teal-300 to-blue-400 bg-clip-text text-transparent">
              LATEST INSIGHTS
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <Link href={`/blog/${blog.slug}`} key={blog.id} className="group">
                  <div className="relative rounded-xl overflow-hidden bg-[#0d2231] hover:bg-[#1a2438] 
                    transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10
                    border border-teal-500/5 hover:border-teal-500/20 h-full">
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d2231] to-transparent z-10" />
                      <Image
                        src={blog.image_url}
                        alt={blog.title}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Date Tag */}
                      <div className="absolute top-4 left-4 z-20">
                        <div className="px-3 py-1 bg-teal-500/20 backdrop-blur-sm rounded-full 
                          border border-teal-400/20 flex items-center space-x-1">
                          <Calendar className="w-3 h-3 text-teal-400" />
                          <span className="text-xs text-teal-300">
                            {new Date(blog.published_at).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 relative">
                      {/* Animated Line */}
                      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent 
                        transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                      
                      <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-teal-300 to-blue-400 
                        bg-clip-text text-transparent group-hover:from-teal-400 group-hover:to-blue-500 
                        transition-colors duration-300">
                        {blog.title}
                      </h3>
                      
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-4 line-clamp-2">
                        {blog.content}
                      </p>

                      {/* Read More Link */}
                      <div className="flex items-center text-teal-400 group-hover:text-teal-300 
                        transition-colors duration-300">
                        <span className="mr-2">Read More</span>
                        <svg 
                          className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 px-4 relative overflow-hidden">
          {/* Background Effect */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 opacity-30" />
            <GridBackground />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-teal-300 to-blue-400 
                bg-clip-text text-transparent">
                GET IN TOUCH
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Have a project in mind? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
