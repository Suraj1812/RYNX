import { useEffect } from 'react'
import { siteConfig } from '@/data/site'

const META_SELECTORS = {
  description: 'meta[name="description"]',
  keywords: 'meta[name="keywords"]',
  robots: 'meta[name="robots"]',
  ogTitle: 'meta[property="og:title"]',
  ogDescription: 'meta[property="og:description"]',
  ogUrl: 'meta[property="og:url"]',
  ogImage: 'meta[property="og:image"]',
  twitterTitle: 'meta[name="twitter:title"]',
  twitterDescription: 'meta[name="twitter:description"]',
  twitterImage: 'meta[name="twitter:image"]',
}

function upsertMeta(selector, attributes) {
  let element = document.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    Object.entries(attributes.base).forEach(([key, value]) => {
      element.setAttribute(key, value)
    })
    document.head.appendChild(element)
  }

  element.setAttribute(attributes.key, attributes.value)
}

function getBaseUrl() {
  if (typeof window !== 'undefined') {
    return window.location.origin
  }

  return import.meta.env.VITE_SITE_URL || siteConfig.siteUrl
}

export function usePageMeta({ title, description, path = '/', keywords = [] }) {
  useEffect(() => {
    const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.defaultTitle
    const pageDescription = description || siteConfig.description
    const combinedKeywords = [...siteConfig.keywords, ...keywords].join(', ')
    const canonicalUrl = new URL(path, getBaseUrl()).toString()
    const imageUrl = new URL('/og-card.svg', getBaseUrl()).toString()

    document.title = pageTitle

    upsertMeta(META_SELECTORS.description, {
      base: { name: 'description' },
      key: 'content',
      value: pageDescription,
    })
    upsertMeta(META_SELECTORS.keywords, {
      base: { name: 'keywords' },
      key: 'content',
      value: combinedKeywords,
    })
    upsertMeta(META_SELECTORS.robots, {
      base: { name: 'robots' },
      key: 'content',
      value: 'index, follow',
    })
    upsertMeta(META_SELECTORS.ogTitle, {
      base: { property: 'og:title' },
      key: 'content',
      value: pageTitle,
    })
    upsertMeta(META_SELECTORS.ogDescription, {
      base: { property: 'og:description' },
      key: 'content',
      value: pageDescription,
    })
    upsertMeta(META_SELECTORS.ogUrl, {
      base: { property: 'og:url' },
      key: 'content',
      value: canonicalUrl,
    })
    upsertMeta(META_SELECTORS.ogImage, {
      base: { property: 'og:image' },
      key: 'content',
      value: imageUrl,
    })
    upsertMeta(META_SELECTORS.twitterTitle, {
      base: { name: 'twitter:title' },
      key: 'content',
      value: pageTitle,
    })
    upsertMeta(META_SELECTORS.twitterDescription, {
      base: { name: 'twitter:description' },
      key: 'content',
      value: pageDescription,
    })
    upsertMeta(META_SELECTORS.twitterImage, {
      base: { name: 'twitter:image' },
      key: 'content',
      value: imageUrl,
    })

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl)

    let schema = document.querySelector('#page-schema')
    if (!schema) {
      schema = document.createElement('script')
      schema.id = 'page-schema'
      schema.setAttribute('type', 'application/ld+json')
      document.head.appendChild(schema)
    }

    schema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      isPartOf: {
        '@type': 'WebSite',
        name: siteConfig.name,
        url: getBaseUrl(),
      },
    })
  }, [description, keywords, path, title])
}

