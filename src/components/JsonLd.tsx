import { siteConfig, experiences, skillCategories } from "@/lib/constants"

export function PersonJsonLd() {
  const allSkills = skillCategories.flatMap((cat) => cat.skills)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    jobTitle: "Fullstack Developer",
    description: siteConfig.description,
    email: siteConfig.links.email,
    telephone: siteConfig.links.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bishkek",
      addressCountry: "Kyrgyzstan",
    },
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin, siteConfig.links.telegram],
    knowsAbout: allSkills,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Kyrgyz-German Institute for Applied Informatics",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bishkek",
        addressCountry: "Kyrgyzstan",
      },
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Bachelor of Science",
      educationalLevel: "Bachelor",
      about: {
        "@type": "DefinedTerm",
        name: "Computer Science",
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function WebsiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.title,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function ProfilePageJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: siteConfig.name,
      alternateName: "Nurislam",
      description: siteConfig.description,
      image: `${siteConfig.url}${siteConfig.ogImage}`,
    },
    dateCreated: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function WorkExperienceJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: experiences.map((exp, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "OrganizationRole",
        roleName: exp.role,
        startDate: exp.period.split(" - ")[0],
        endDate: exp.period.includes("Present") ? undefined : exp.period.split(" - ")[1],
        namedPosition: exp.role,
        worksFor: {
          "@type": "Organization",
          name: exp.company,
          location: exp.location,
        },
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function BreadcrumbJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${siteConfig.url}#about`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Experience",
        item: `${siteConfig.url}#experience`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Skills",
        item: `${siteConfig.url}#skills`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: `${siteConfig.url}#contact`,
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
