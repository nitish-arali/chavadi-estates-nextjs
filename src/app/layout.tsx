import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import WhatsAppButton from "../../components/WhatsappButton";
import Footer from "../../components/Footer";
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chavadi Estates - Luxury Real Estate in Bengaluru",
  description: "Discover premium real estate solutions with Chavadi Estates. Luxury homes and commercial spaces built with excellence in Bengaluru.",
  keywords: ["Residential Layouts", "Real Estate", "Bengaluru", "Luxury Homes", "Chavadi Estates", "Commercial Buildings", "Appartments", "Wedding Venue", "Best Real Estate Builder", "Builders and Developers in Bengaluru", "Rudraiah Chavadi", "best real estate developer in Bengaluru", "luxury residential layouts near me"],
  authors: [{ name: "Chavadi Estates" }],
  robots: "index, follow",

  // Open Graph
  openGraph: {
    title: "Chavadi Estates - Luxury Real Estate in Bengaluru",
    description: "Discover premium real estate solutions with Chavadi Estates. Luxury homes and commercial spaces built with excellence in Bengaluru.",
    images: [
      {
        url: "https://ik.imagekit.io/chavadiestates2025/Chavadi_Estates_Logo.png?updatedAt=1743499359881",
        width: 800,
        height: 600,
        alt: "Chavadi Estates Logo",
      },
    ],
    url: "https://www.chavadiestates.in",
    type: "website",
    siteName: "Chavadi Estates",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Chavadi Estates - Luxury Real Estate in Bengaluru",
    description: "Discover premium real estate solutions with Chavadi Estates. Luxury homes and commercial spaces built with excellence in Bengaluru.",
    images: ["/chavadi-logo.png"],
  },

  // Alternates (for canonical)
  alternates: {
    canonical: "https://www.chavadiestates.in",
  },

  // Other
  icons: {
    icon: "/favicon.ico",
  },
  viewport: "width=device-width, initial-scale=1",
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": ["RealEstateAgent", "LocalBusiness"],
  "name": "Chavadi Estates",
  "description": "Premium luxury villas, apartments & commercial spaces in Bengaluru's prime locations",
  "image": "https://ik.imagekit.io/chavadiestates2025/Chavadi_Estates_Logo.png?updatedAt=1743499359881",
  "url": "https://chavadiestates.in",
  "telephone": "+91 9986689669",
  "email": "chavadiestates1@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "#63/1, Hoodi Main Road, Surya Layout, Ayyappa Nagar",
    "addressLocality": "K R Pura",
    "addressRegion": "Bengaluru",
    "postalCode": "560036",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "13.002073972524295",
    "longitude": "77.7129274525673"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "09:00",
    "closes": "21:00"
  },
  "sameAs": [
    "https://www.facebook.com/people/Chavadi-Estates/pfbid02txeJTx2M7YuhFGWTyvfJxJftiLBBPCQHMTXzZQtDnu5jTkEDC8mD9CkBnzJ9FaD4l/",
    "https://www.instagram.com/chavadi_estates/",
    "https://www.linkedin.com/in/chavadi-estates-49b20b359/",
    "https://x.com/chavadi_estates",
    "https://www.youtube.com/channel/UCsQGFTKcWvGfGYfsekBpCPw"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Bengaluru Real Estate Property Listings",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Residential Community",
          "name": "Chavadi Lotus Pond - Residential Layouts",
          "url": "https://chavadiestates.in/projects/Chavadi-Lotus-Pond",
          "description": "Gated community with clubhouse, 24/7 security, and premium finishes",
          "occupancyType": "ForSale",
          "numberOfUnits": "121",
          "amenityFeature": [
            {
              "@type": "LocationFeatureSpecification",
              "name": "Swimming Pool"
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Clubhouse"
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "24/7 Security Surveillance"
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Fitness Center"
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Children's Play Area"
            },
          ]
        }
      },
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "122",
    "bestRating": "5"
  },
  "founder": {
    "@type": "Person",
    "name": "Rudraiah Chavadi"
  },
  "foundingDate": "2017",
  "areaServed": ["Bengaluru", "Karnataka", "Pune", "Maharashtra"],
  "makesOffer": [
    {
      "@type": "Offer",
      "name": "Free Site Visits",
      "description": "Complimentary property tours"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <GoogleAnalytics gaId="G-6H19CYDMFM" />
        <WhatsAppButton />
        <Footer />
        <Script
          id="chavadi-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://chavadiestates.in"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Projects",
                  "item": "https://chavadiestates.in/projects"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Chavadi Lotus Pond",
                  "item": "https://chavadiestates.in/projects/Chavadi-Lotus-Pond"
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}