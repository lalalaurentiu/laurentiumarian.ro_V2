import React from "react";
import { Helmet } from "react-helmet-async";
import { useSEO } from "../context/SEOContext";

export default function SEOMeta() {
  const { seoData } = useSEO();

  const {
    title,
    description,
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    ogType,
    twitterCard,
    structuredData,
  } = seoData;

  return (
    <Helmet>
      <html lang="ro" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Laurentiu Marian" />
      <meta property="og:locale" content="ro_RO" />
      
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@laurentiumarian" />
      
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      <link rel="alternate" hreflang="ro" href={canonical} />
      <link rel="alternate" hreflang="x-default" href={canonical} />
      
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
      
      <meta name="theme-color" content="#1a1a1a" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    </Helmet>
  );
}