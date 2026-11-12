import React, { createContext, useContext, useState, useCallback } from "react";

const SEOContext = createContext(null);

const pageSEO = {
  home: {
    title: "Laurentiu Marian - Software Developer",
    description: "Software developer passionate about technology. Expert in Python, Django, JavaScript, React, Next.js, Node.js, React Native, and AI integration.",
    canonical: "https://laurentiumarian.ro",
    ogTitle: "Laurentiu Marian - Software Developer",
    ogDescription: "Software developer passionate about technology. Expert in Python, Django, JavaScript, React, Next.js, Node.js, React Native, and AI integration.",
    ogImage: "https://laurentiumarian.ro/images/General/logo.png",
    ogType: "website",
    twitterCard: "summary_large_image",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Laurentiu Marian Băluță",
      "url": "https://laurentiumarian.ro",
      "image": "https://laurentiumarian.ro/images/General/logo.png",
      "sameAs": [
        "https://github.com/lalalaurentiu",
        "https://linkedin.com/in/laurentiumarian",
      ],
      "jobTitle": "Software Developer",
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance",
      },
      "knowsAbout": [
        "Python",
        "Django",
        "JavaScript",
        "React",
        "Next.js",
        "Node.js",
        "React Native",
        "AI",
        "LLM",
        "Web Scraping",
      ],
    },
  },
  about: {
    title: "About Me - Laurentiu Marian",
    description: "Hey! I'm Laurentiu Băluță, passionate about technology and everything that means code. I work with Python and Django for backend and automation, but I also love JavaScript with experience in React, Next.js, Node.js and other modern frameworks.",
    canonical: "https://laurentiumarian.ro/about",
    ogTitle: "About Me - Laurentiu Marian",
    ogDescription: "Hey! I'm Laurentiu Băluță, passionate about technology and everything that means code.",
    ogImage: "https://laurentiumarian.ro/images/General/logo.png",
    ogType: "profile",
    twitterCard: "summary_large_image",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "mainEntity": {
        "@type": "Person",
        "name": "Laurentiu Marian Băluță",
        "description": "Software developer passionate about technology. Expert in Python, Django, JavaScript, React, Next.js, Node.js, React Native, and AI integration.",
        "url": "https://laurentiumarian.ro/about",
        "image": "https://laurentiumarian.ro/images/General/logo.png",
      },
    },
  },
  peviitor: {
    title: "PeViitor.ro - Platformă Joburi România",
    description: "PeViitor.ro este o platformă românească dedicată centralizării locurilor de muncă disponibile în România, construită ca un motor de căutare modern pentru joburi.",
    canonical: "https://laurentiumarian.ro/projects/peviitor",
    ogTitle: "PeViitor.ro - Platformă Joburi România",
    ogDescription: "Platformă românească pentru joburi - găsește oportunități de muncă în România rapid și gratuit.",
    ogImage: "https://github.com/lalalaurentiu/androidAPP/blob/main/assets/adaptive-icon.png?raw=true",
    ogType: "website",
    twitterCard: "summary_large_image",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "PeViitor.ro",
      "description": "Platformă românească dedicată centralizării locurilor de muncă disponibile în România.",
      "url": "https://peviitor.ro",
      "applicationCategory": "Job Search",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "RON",
      },
      "author": {
        "@type": "Person",
        "name": "Laurentiu Marian Băluță",
      },
    },
  },
  contact: {
    title: "Contact - Laurentiu Marian",
    description: "Get in touch with Laurentiu Marian. Send a message or call for collaboration, projects, or inquiries.",
    canonical: "https://laurentiumarian.ro/contact",
    ogTitle: "Contact - Laurentiu Marian",
    ogDescription: "Get in touch with Laurentiu Marian for collaboration, projects, or inquiries.",
    ogImage: "https://laurentiumarian.ro/images/General/logo.png",
    ogType: "website",
    twitterCard: "summary",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "mainEntity": {
        "@type": "Person",
        "name": "Laurentiu Marian Băluță",
        "email": "contact@laurentiumarian.ro",
        "url": "https://laurentiumarian.ro/contact",
      },
    },
  },
};

const defaultSEO = {
  title: "Laurentiu Marian - Software Developer",
  description: "Software developer passionate about technology. Expert in Python, Django, JavaScript, React, Next.js, Node.js, React Native, and AI integration.",
  canonical: "https://laurentiumarian.ro",
  ogTitle: "Laurentiu Marian - Software Developer",
  ogDescription: "Software developer passionate about technology. Expert in Python, Django, JavaScript, React, Next.js, Node.js, React Native, and AI integration.",
  ogImage: "https://laurentiumarian.ro/images/General/logo.png",
  ogType: "website",
  twitterCard: "summary_large_image",
  structuredData: null,
};

export const SEOProvider = ({ children }) => {
  const [seoData, setSeoData] = useState(defaultSEO);

  const updateSEO = useCallback((data) => {
    setSeoData((prev) => ({ ...prev, ...data }));
  }, []);

  const resetSEO = useCallback(() => {
    setSeoData(defaultSEO);
  }, []);

  const setPageSEO = useCallback((pageKey) => {
    const page = pageSEO[pageKey];
    if (page) {
      setSeoData(page);
    }
  }, []);

  return (
    <SEOContext.Provider value={{ seoData, updateSEO, resetSEO, setPageSEO, pageSEO }}>
      {children}
    </SEOContext.Provider>
  );
};

export const useSEO = () => {
  const context = useContext(SEOContext);
  if (!context) {
    throw new Error("useSEO must be used within an SEOProvider");
  }
  return context;
};