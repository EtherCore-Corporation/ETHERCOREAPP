import { DefaultSeoProps } from "next-seo";

const SEO: DefaultSeoProps = {
  title: "EtherCore - Affordable Digital Solutions",
  description:
    "Your Trusted Partner for Affordable Digital Solutions. We specialize in web development, AI automation, and SEO optimization.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ether-core.com",
    site_name: "EtherCore",
    title: "EtherCore - Affordable Digital Solutions",
    description:
      "Transform your business with our cutting-edge services. We combine innovation, expertise, and affordability to deliver exceptional results.",
    images: [
      {
        url: "https://ejoimfdulvukutxdznem.supabase.co/storage/v1/object/public/logo_ether/logo_name2.png",
        width: 800,
        height: 600,
        alt: "EtherCore Logo",
      },
    ],
  },
  twitter: {
    handle: "@yourtwitterhandle",
    site: "@yourtwitterhandle",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "web development, AI automation, digital solutions, SEO optimization, blog, services, projects",
    },
    {
      name: "author",
      content: "Ibai San Millan, Facundo Froschauer",
    },
  ],
};

export default SEO;
