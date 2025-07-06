import { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import { getHeroSectionWithRevalidation } from "@/lib/hero-utils";
import { getCompanyInfoWithRevalidation } from "@/lib/company-utils";
import { generatePageSchema } from "@/lib/schema-utils";
import { getAutomationPromoWithRevalidation, generateAutomationPromoSchema } from "@/lib/promo-automation-utils";
import AutomationPromoSection from '@/components/AutomationPromoSection';
import dynamic from 'next/dynamic';
import Image from "next/image";
import Link from "next/link";
import { Calendar, CheckCircle, Code2 } from "lucide-react";

// Dynamic imports for performance
const CampaignAutomation = dynamic(() => import('@/components/CampaignAutomation'), {
  loading: () => <div className="min-h-screen bg-[#0a0f1a] animate-pulse" />,
});

const ContactForm = dynamic(() => import('@/components/ContactForm'), {
  loading: () => <div className="h-64 bg-gray-800/50 animate-pulse rounded-lg" />,
});



// SEO metadata for campaign page
export async function generateMetadata(): Promise<Metadata> {
  const { data: campaignVideo } = await supabase
    .from('campaign_videos')
    .select('*')
    .eq('page_slug', 'campaign-automation')
    .eq('is_active', true)
    .single();

  const title = campaignVideo?.meta_title || "AI Automation Services - Streamline Your Business | EtherCore";
  const description = campaignVideo?.meta_description || "Custom AI automation solutions to streamline your business processes. Chatbots, workflow automation, data processing, and more.";
  const keywords = campaignVideo?.video_keywords || "AI automation, business automation, workflow optimization, artificial intelligence, process automation, chatbots, email automation";
  const imageUrl = campaignVideo?.video_thumbnail_url || "https://www.ether-core.com/android-chrome-512x512.png";

  return {
    title,
    description,
    keywords,
    authors: [{ name: "EtherCore Team" }],
    creator: "EtherCore",
    publisher: "EtherCore",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 5,
      userScalable: true,
    },
    openGraph: {
      title,
      description,
      url: "https://ether-core.com/campaign-automation",
      siteName: "EtherCore",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "EtherCore AI Automation Services - Transform Your Operations",
        },
      ],
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
      creator: '@EtherCore',
      site: '@EtherCore',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: 'https://ether-core.com/campaign-automation',
    },
    other: {
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
      'theme-color': '#7c3aed',
      'msapplication-TileColor': '#7c3aed',
      'application-name': 'EtherCore',
      'apple-mobile-web-app-title': 'EtherCore',
      'format-detection': 'telephone=no',
    },
  };
}

// Data fetching function
async function getData() {
  try {
    const [
      { data: campaignVideo },
      { data: portfolio },
      { data: testimonials },
      { data: services },
      hero,
      companyInfo,
      automationPromo
    ] = await Promise.all([
      supabase.from('campaign_videos').select('*').eq('page_slug', 'campaign-automation').eq('is_active', true).single(),
      supabase.from('portfolio').select('*').in('title', ['Mahonia Decor', 'BetterSelf', 'IndoMath']).order('created_at', { ascending: false }),
      supabase.from('testimonials').select('*').order('created_at', { ascending: false }).limit(6),
      supabase.from('services').select('*').eq('is_active', true).order('created_at', { ascending: true }),
      getHeroSectionWithRevalidation('/campaign-automation'),
      getCompanyInfoWithRevalidation(),
      getAutomationPromoWithRevalidation()
    ]);

    return {
      campaignVideo: campaignVideo || null,
      portfolio: portfolio || [],
      testimonials: testimonials || [],
      services: services || [],
      hero,
      companyInfo,
      automationPromo
    };
  } catch (error) {
    console.error('Error fetching Automation campaign data:', error);
    return {
      campaignVideo: null,
      portfolio: [],
      testimonials: [],
      services: [],
      hero: null,
      companyInfo: null,
      automationPromo: null
    };
  }
}

export default async function CampaignAutomationPage() {
  const { campaignVideo, portfolio, testimonials, services, hero, companyInfo, automationPromo } = await getData();
  
  // Generate comprehensive schema markup for Automation campaign page
  const schemas = [
    // Organization Schema
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "EtherCore",
      "url": "https://ether-core.com",
      "logo": "https://www.ether-core.com/android-chrome-512x512.png",
      "description": "Professional AI automation and workflow optimization services",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+44-7700-900123",
        "contactType": "customer service",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://www.linkedin.com/company/ethercore",
        "https://twitter.com/ethercore"
      ]
    },
    // Service Schema
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI Business Automation & Workflow Optimization",
      "description": "Custom AI automation solutions to streamline business processes and increase efficiency",
      "provider": {
        "@type": "Organization",
        "name": "EtherCore"
      },
      "areaServed": "Worldwide",
      "serviceType": "AI Automation Services",
      "offers": {
        "@type": "Offer",
        "name": "Free Automation Consultation",
        "description": "30-minute consultation to discuss your automation needs and opportunities",
        "price": "0",
        "priceCurrency": "GBP"
      }
    },
    // VideoObject Schema (if video exists)
    ...(campaignVideo ? [{
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": campaignVideo.meta_title || campaignVideo.header_text,
      "description": campaignVideo.meta_description || campaignVideo.subtitle_text,
      "thumbnailUrl": campaignVideo.video_thumbnail_url,
      "contentUrl": campaignVideo.video_url,
      "uploadDate": new Date().toISOString(),
      "duration": campaignVideo.video_duration ? `PT${campaignVideo.video_duration}S` : undefined,
      "publisher": {
        "@type": "Organization",
        "name": "EtherCore",
        "logo": "https://www.ether-core.com/android-chrome-512x512.png"
      }
    }] : []),
    // WebPage Schema
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": campaignVideo?.meta_title || "AI Automation Services - Streamline Your Business",
      "description": campaignVideo?.meta_description || "Custom AI automation solutions to streamline business processes",
      "url": "https://ether-core.com/campaign-automation",
      "isPartOf": {
        "@type": "WebSite",
        "name": "EtherCore",
        "url": "https://ether-core.com"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": campaignVideo?.video_thumbnail_url || "https://www.ether-core.com/android-chrome-512x512.png"
      }
    }
  ];

  // Add existing schemas
  const existingSchemas = generatePageSchema('home', {
    companyInfo,
    hero,
    services,
    projects: portfolio
  });

  // Add video schema if available
  if (campaignVideo?.video_schema) {
    schemas.push(campaignVideo.video_schema);
  }

  // Add automation promo schema if available
  if (automationPromo && automationPromo.title && automationPromo.price_amount) {
    schemas.push(generateAutomationPromoSchema(automationPromo));
  }

  // Combine all schemas
  const allSchemas = [...schemas, ...existingSchemas];

  return (
    <>
      {/* Critical Resource Preloading */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://calendly.com" />
      <link rel="dns-prefetch" href="https://commondatastorage.googleapis.com" />
      
      {/* Preload critical video thumbnail */}
      {campaignVideo?.video_thumbnail_url && (
        <link rel="preload" as="image" href={campaignVideo.video_thumbnail_url} />
      )}

      {/* Schema Markup */}
      {allSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 0)
          }}
        />
      ))}

      <main>
        {/* Hero Section with Video */}
        <CampaignAutomation campaignData={campaignVideo} />

        {/* Automation Promo Section - Database Driven */}
        <AutomationPromoSection initialData={automationPromo} />

        {/* Automation Services Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#0d1424] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] via-[#0d1424] to-[#0a0f1a]" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-300 to-violet-400 bg-clip-text text-transparent px-2">
                Our AI Automation Services
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto px-4">
                Transform your business operations with cutting-edge AI automation solutions tailored to your specific needs.
              </p>
            </div>
            
            {/* Automation Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: "🤖",
                  title: "AI Chatbots",
                  description: "24/7 customer support automation with intelligent responses"
                },
                {
                  icon: "📧",
                  title: "Email Automation",
                  description: "Smart email marketing workflows and customer communication"
                },
                {
                  icon: "📊",
                  title: "Data Processing",
                  description: "Automated data analysis, reporting, and insights generation"
                },
                {
                  icon: "🔄",
                  title: "Workflow Automation",
                  description: "Custom business process automation and optimization"
                },
                {
                  icon: "🎯",
                  title: "Lead Generation",
                  description: "AI-powered lead qualification and nurturing systems"
                },
                {
                  icon: "📱",
                  title: "API Integration",
                  description: "Connect and automate all your business tools and systems"
                }
              ].map((service, index) => (
                <div key={index} className="group p-6 rounded-xl bg-[#0d2231]/50 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Highlights */}
        <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#0d1424]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r 
              from-purple-300 to-violet-400 bg-clip-text text-transparent px-2">
              FEATURED PROJECTS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
              {portfolio.map((project) => (
                <div 
                  key={project.id} 
                  className="group relative w-full max-w-sm rounded-xl overflow-hidden bg-[#0d2231] hover:bg-[#1a2438] 
                    transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10
                    border border-purple-500/5 hover:border-purple-500/20 h-full flex flex-col"
                >
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f1a]/80 to-[#0a0f1a] 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  
                  {/* Image Container */}
                  <div className="relative w-full h-40 sm:h-48 overflow-hidden bg-gray-900/20 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d2231]/60 to-transparent z-10" />
                    <Image
                      src={project.image_url}
                      alt={project.image_alt || `${project.title} - ${project.client_name || 'EtherCore Project'}`}
                      title={project.image_title || `${project.title} - ${project.client_name || 'EtherCore Project'}`}
                      width={384}
                      height={192}
                      className="object-contain w-full h-full max-w-[85%] max-h-[85%] transform group-hover:scale-105 transition-transform duration-700 p-3 sm:p-4"
                      priority={portfolio.indexOf(project) < 2}
                      quality={80}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading={portfolio.indexOf(project) < 2 ? "eager" : "lazy"}
                      fetchPriority={portfolio.indexOf(project) === 0 ? "high" : "auto"}
                    />
                    
                    {/* Floating Tag */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 transform -translate-y-2 opacity-0 
                      group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="px-2 sm:px-3 py-1 bg-purple-500/20 backdrop-blur-sm rounded-full 
                        border border-purple-400/20 flex items-center space-x-1">
                        <Code2 className="w-2 h-2 sm:w-3 sm:h-3 text-purple-400" />
                        <span className="text-xs text-purple-300">Project</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-4 sm:p-6 z-20 text-center flex-1 flex flex-col justify-between">
                    {/* Animated Line */}
                    <div className="absolute top-0 left-4 right-4 sm:left-6 sm:right-6 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent 
                      transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    
                    <h3 className="text-lg sm:text-xl font-bold mb-2 bg-gradient-to-r from-purple-300 to-violet-400 
                      bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-violet-500 
                      transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-4 text-sm sm:text-base">
                      {project.description}
                    </p>
                    
                    {project.project_url && (
                      <div className="transform translate-y-2 opacity-0 group-hover:translate-y-0 
                        group-hover:opacity-100 transition-all duration-300 delay-100">
                        <a 
                          href={project.project_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg
                            bg-gradient-to-r from-purple-500/10 to-violet-500/10
                            hover:from-purple-500/20 hover:to-violet-500/20
                            text-purple-400 hover:text-purple-300 
                            transition-all duration-300 group/link button-shine text-sm"
                        >
                          <span>View Project</span>
                          <svg 
                            className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover/link:translate-x-1 transition-transform duration-300"
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
        <section className="py-12 sm:py-16 md:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r 
              from-purple-300 to-violet-400 bg-clip-text text-transparent px-2">
              CLIENT TESTIMONIALS
            </h2>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="group relative w-full max-w-sm sm:max-w-80 p-6 sm:p-8 rounded-xl bg-gradient-to-br from-[#0d2231]/80 to-[#1a2438]/80 
                    backdrop-blur-sm hover:from-purple-600/10 hover:to-violet-600/10 
                    transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20
                    border border-purple-500/5 hover:border-purple-500/20 hover:scale-105 text-center"
                >
                  {/* Quote Icon */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center justify-center mb-4 relative">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 transform group-hover:scale-110 transition-transform duration-300"
                        style={{ transitionDelay: `${i * 50}ms` }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-300 italic mb-4 sm:mb-6 relative z-10 group-hover:text-gray-200 transition-colors text-center text-sm sm:text-base">
                    &quot;{testimonial.testimonial}&quot;
                  </p>

                  {/* Client Name */}
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 
                      flex items-center justify-center text-white font-semibold text-base sm:text-lg
                      group-hover:scale-110 transition-transform duration-300 mb-2 sm:mb-3">
                      {testimonial.client_name.charAt(0)}
                    </div>
                    <p className="font-semibold bg-gradient-to-r from-purple-400 to-violet-400 
                      bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-violet-300 text-center text-sm sm:text-base">
                      {testimonial.client_name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conversion Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#0a0f1a] relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-violet-500/5" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
              {/* Left Column - Automation Consultation CTA */}
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-300 to-violet-400 bg-clip-text text-transparent px-2">
                  Ready to Automate Your Business?
                </h2>
                <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 px-4">
                  Schedule a free automation consultation and discover how AI can transform your operations. 
                  No obligation, just expert insights tailored to your business needs.
                </p>

                {/* Benefits List */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 max-w-md mx-auto">
                  {[
                    "Free 30-minute consultation",
                    "Custom automation strategy",
                    "ROI analysis and projections",
                    "Implementation roadmap"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 justify-center">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 flex-shrink-0" />
                      <span className="text-gray-300 text-sm sm:text-base">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Automation Consultation CTA */}
                <Link
                  href={campaignVideo?.cta_button_url || "https://calendly.com/ethercore/automation-consultation"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-violet-500 
                    text-white rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg hover:from-purple-600 hover:to-violet-600 
                    transition-all duration-300 transform hover:scale-105 shadow-xl sm:shadow-2xl hover:shadow-purple-500/25"
                >
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                  Schedule Automation Consultation
                </Link>
              </div>

              {/* Right Column - Contact Form */}
              <div className="bg-[#0d2231]/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-purple-500/10">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center bg-gradient-to-r from-purple-300 to-violet-400 bg-clip-text text-transparent">
                  Or Get In Touch Directly
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 