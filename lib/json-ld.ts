import {
  absoluteUrl,
  email,
  jobTitle,
  organization,
  personName,
  sameAs,
  siteDescription,
  siteName,
  siteUrl,
} from "@/lib/site";

export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description: siteDescription,
        inLanguage: "en",
        publisher: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profile`,
        url: siteUrl,
        name: siteName,
        description: siteDescription,
        inLanguage: "en",
        isPartOf: { "@id": `${siteUrl}/#website` },
        mainEntity: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: personName,
        alternateName: siteName,
        jobTitle,
        description: siteDescription,
        url: siteUrl,
        email: `mailto:${email}`,
        image: absoluteUrl("/opengraph-image"),
        worksFor: {
          "@type": "Organization",
          name: organization,
        },
        sameAs: [...sameAs],
        knowsAbout: [
          "Systems architecture",
          "Backend platforms",
          "Reliability engineering",
          "Fault tolerance",
          "DevOps",
        ],
      },
    ],
  };
}
