import Link from 'next/link';
import { type PromoSEO } from '@/lib/promo-seo-utils';

interface SeoPromoSectionProps {
  initialData?: PromoSEO | null;
}

export default function SeoPromoSection({ initialData }: SeoPromoSectionProps) {
  // Fallback data if no database data is available
  const fallbackData: PromoSEO = {
    id: 0,
    slug: 'fallback-seo-audit-package',
    title: 'Complete SEO Audit & Strategy',
    subtitle: 'Comprehensive SEO analysis and optimization roadmap to dominate search rankings',
    price_amount: 299,
    price_currency: 'GBP',
    price_label: 'Starting From',
    features: [
      { icon: '🔍', order: 1, title: 'Technical SEO Audit', description: 'Complete website analysis' },
      { icon: '📊', order: 2, title: 'Keyword Research', description: 'Target audience analysis' },
      { icon: '📈', order: 3, title: 'Competitor Analysis', description: 'Market positioning insights' },
      { icon: '🎯', order: 4, title: 'Content Strategy', description: 'SEO-optimized content plan' },
      { icon: '🔗', order: 5, title: 'Link Building', description: 'Authority building strategy' },
      { icon: '📱', order: 6, title: 'Local SEO', description: 'Google My Business optimization' }
    ],
    cta_button_text: 'Get Your Free SEO Audit',
    cta_button_url: 'https://calendly.com/ethercore/seo-audit',
    additional_info: '* Includes detailed report, keyword strategy, and 1-hour consultation call.',
    is_active: true,
    display_order: 1,
    background_gradient: 'from-green-500/10 to-emerald-500/10',
    price_tag_gradient: 'from-green-300 to-emerald-400',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    created_by: 'fallback'
  };

  const data = initialData || fallbackData;

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-30" />
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Price Tag */}
        <div className="inline-block mb-6 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-xl opacity-70" />
          <div className="relative px-8 py-3 bg-[#0d2231]/50 backdrop-blur-sm rounded-full border border-green-500/20">
            <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
              {data.price_currency === 'GBP' ? '£' : '$'}{data.price_amount} {data.price_label}
            </span>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
          {data.title}
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-3xl mx-auto">
          {data.subtitle}
        </p>

        {/* Features Grid - 2 rows x 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
          {data.features.map((feature: { icon: string; order: number; title: string; description: string }, index: number) => (
            <div 
              key={index}
              className="flex flex-col items-center p-6 rounded-xl bg-[#0d2231]/50 backdrop-blur-sm
                border border-green-500/10 hover:border-green-500/30 transition-all duration-300
                hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 text-center"
            >
              <span className="text-3xl mb-3">{feature.icon}</span>
              <div className="text-center">
                <h3 className="font-semibold text-green-300 text-base mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="relative group inline-block">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 
            rounded-xl blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 
            group-hover:duration-200"></div>
          <Link 
            href={data.cta_button_url}
            target="_blank"
            className="relative inline-flex items-center px-6 py-3 bg-[#0a0f1a] rounded-xl
              text-base font-semibold overflow-hidden button-shine group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-500/20 
              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center space-x-2">
              <span className="bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent 
                group-hover:from-white group-hover:to-white transition-all duration-300">
                {data.cta_button_text}
              </span>
              <svg 
                className="w-4 h-4 text-green-400 group-hover:text-white transform group-hover:translate-x-1 
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
        {data.additional_info && (
          <p className="mt-4 text-gray-400 text-xs">
            {data.additional_info}
          </p>
        )}
      </div>
    </section>
  );
} 