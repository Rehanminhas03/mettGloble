# SEO Implementation Guide for MettGlobal

## Overview

This document outlines the comprehensive SEO implementation for the MettGlobal website. All SEO best practices have been implemented following Next.js 14 App Router conventions and modern SEO standards.

## ✅ What Has Been Implemented

### 1. **Metadata Configuration** ([src/lib/seo.ts](src/lib/seo.ts))

A centralized SEO configuration system that includes:
- Default metadata with OpenGraph and Twitter Card support
- Dynamic metadata generation functions
- Structured data (JSON-LD) schema generators
- SEO-friendly URL generation

**Key Features:**
- Title templates for consistent branding
- Comprehensive keyword lists
- OpenGraph images (1200x630px)
- Twitter Card support
- Robots meta tags configuration
- Site verification support (Google, Yandex)

### 2. **Page-Level Metadata**

All pages now include optimized metadata:

#### Static Pages:
- **Homepage** ([src/app/page.tsx](src/app/page.tsx#L12-L25))
  - Optimized title and description
  - Keywords targeting eCommerce, web dev, cybersecurity

- **About** ([src/app/about/page.tsx](src/app/about/page.tsx#L9-L21))
  - Company-focused keywords

- **Services** ([src/app/services/page.tsx](src/app/services/page.tsx#L8-L20))
  - Service-focused keywords

- **Contact** ([src/app/contact/page.tsx](src/app/contact/page.tsx#L7-L18))
  - Contact and inquiry keywords

- **Case Studies** ([src/app/case-studies/page.tsx](src/app/case-studies/page.tsx#L7-L18))
  - Portfolio and success story keywords

- **Blog** ([src/app/blog/page.tsx](src/app/blog/page.tsx#L6-L17))
  - Content and insights keywords

- **Privacy Policy** ([src/app/privacy-policy/page.tsx](src/app/privacy-policy/page.tsx#L5-L9))
- **Terms of Service** ([src/app/terms/page.tsx](src/app/terms/page.tsx#L5-L9))

#### Dynamic Pages:
- **Service Detail Pages** ([src/app/services/[slug]/page.tsx](src/app/services/[slug]/page.tsx#L11-L29))
  - Dynamic metadata based on service content
  - Service-specific keywords
  - All 11 services have unique metadata

### 3. **Structured Data (JSON-LD)**

Implemented Schema.org structured data for better search engine understanding:

#### Organization Schema ([src/app/layout.tsx](src/app/layout.tsx#L32-L40))
- Company information
- Contact details
- Social media profiles
- Logo and branding

#### Service Schema ([src/app/services/[slug]/page.tsx](src/app/services/[slug]/page.tsx#L47-L51))
- Service name and description
- Provider information
- Service URL
- Area served

#### Breadcrumb Schema ([src/app/services/[slug]/page.tsx](src/app/services/[slug]/page.tsx#L53-L57))
- Navigation hierarchy
- Improves search result appearance
- Better user experience in SERPs

### 4. **XML Sitemap** ([src/app/sitemap.ts](src/app/sitemap.ts))

Automatically generated dynamic sitemap including:
- All static pages (23 total routes)
- All 11 service pages
- Last modified dates
- Change frequency hints
- Priority levels
- Accessible at: `/sitemap.xml`

**Priorities:**
- Homepage: 1.0
- Services parent: 0.9
- Service pages: 0.8
- About/Contact: 0.8
- Case Studies/Blog: 0.7
- Legal pages: 0.3

### 5. **Robots.txt** ([public/robots.txt](public/robots.txt))

Search engine crawling configuration:
- Allows all crawlers
- References sitemap location
- Includes crawl-delay to prevent server overload
- Ready for future private routes

### 6. **OpenGraph & Twitter Cards**

Every page includes:
- OpenGraph meta tags for social sharing
- Twitter Card tags
- Optimized images (1200x630px recommended)
- Locale settings (en_US)
- Site name and branding

### 7. **Technical SEO Best Practices**

- ✅ Semantic HTML structure
- ✅ Mobile-responsive design
- ✅ Fast page load times (Next.js optimizations)
- ✅ Canonical URLs on all pages
- ✅ Meta robots tags
- ✅ Alt text ready for images (to be added)
- ✅ Proper heading hierarchy (H1, H2, H3)
- ✅ Internal linking structure
- ✅ Clean, descriptive URLs

## 🚀 Next Steps (Post-Launch)

### 1. **Add Actual Images**
Create and add the following images to `/public`:
- `og-image.jpg` (1200x630px) - Main OpenGraph image
- `apple-touch-icon.png` (180x180px) - iOS icon
- `logo.png` - Company logo
- `favicon.ico` - Website favicon

### 2. **Search Console Setup**

#### Google Search Console:
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://mettglobal.com`
3. Verify using meta tag method
4. Copy verification code to `.env.local`:
   ```
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-code-here
   ```
5. Submit sitemap: `https://mettglobal.com/sitemap.xml`

#### Bing Webmaster Tools:
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add and verify your site
3. Submit sitemap

### 3. **Analytics Setup (Optional)**

Add Google Analytics or other analytics:
1. Create GA4 property
2. Add measurement ID to `.env.local`:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
3. Implement tracking (can use `next/script`)

### 4. **Content Optimization**

- Add relevant images with descriptive alt text
- Ensure all service pages have complete content
- Add blog posts with SEO-optimized titles
- Create case study detail pages
- Add internal links between related content

### 5. **Performance Optimization**

- Optimize images (use Next.js Image component)
- Enable caching headers
- Consider CDN for static assets
- Monitor Core Web Vitals

### 6. **Local SEO (Optional)**

If targeting local Pakistan market:
- Create Google My Business profile
- Add local business schema
- Include location-specific keywords
- Get listed in local directories

### 7. **Link Building**

- Submit to relevant directories
- Create quality content for backlinks
- Engage with industry communities
- Guest posting opportunities
- Social media presence

## 📊 SEO Monitoring

### Track These Metrics:
1. **Search Console:**
   - Impressions and clicks
   - Average position
   - Click-through rate (CTR)
   - Index coverage

2. **Analytics:**
   - Organic traffic
   - Bounce rate
   - Time on page
   - Conversion rate

3. **Rankings:**
   - Target keyword positions
   - Competitor analysis
   - SERP features

### Tools to Use:
- Google Search Console
- Google Analytics 4
- PageSpeed Insights
- Schema.org Validator
- Rich Results Test
- Mobile-Friendly Test

## 🔍 Testing Your SEO

### Verify Implementation:

1. **Metadata Test:**
   ```bash
   # Check homepage metadata
   curl -I https://mettglobal.com
   ```

2. **Sitemap Test:**
   Visit: `https://mettglobal.com/sitemap.xml`

3. **Robots.txt Test:**
   Visit: `https://mettglobal.com/robots.txt`

4. **Structured Data Test:**
   - Go to [Rich Results Test](https://search.google.com/test/rich-results)
   - Test each page URL
   - Verify Organization and Service schemas

5. **OpenGraph Test:**
   - Use [OpenGraph Debugger](https://www.opengraph.xyz/)
   - Test social sharing preview

6. **Mobile-Friendly Test:**
   - Use [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

## 📝 Environment Variables

Update `.env.local` with your actual values:

```env
# Required
NEXT_PUBLIC_SITE_URL=https://mettglobal.com

# Optional (add when ready)
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-google-code
NEXT_PUBLIC_YANDEX_VERIFICATION=your-yandex-code
```

## 🎯 Target Keywords

The website is optimized for these primary keywords:
- eCommerce management services
- Amazon FBA services Pakistan
- Web development agency
- Cybersecurity services Pakistan
- AI automation solutions
- Procurement and supply chain
- Business process outsourcing
- Pakistan IT company

## ✨ SEO Utilities

The [src/lib/seo.ts](src/lib/seo.ts) file provides these utilities:

- `defaultMetadata` - Base metadata for all pages
- `generatePageMetadata()` - Create metadata for static pages
- `generateServiceMetadata()` - Create metadata for service pages
- `getOrganizationSchema()` - Organization JSON-LD
- `getServiceSchema()` - Service JSON-LD
- `getBreadcrumbSchema()` - Breadcrumb JSON-LD
- `getFAQSchema()` - FAQ JSON-LD (for future use)

## 🚨 Important Notes

1. **Site URL:** Update `NEXT_PUBLIC_SITE_URL` before deploying
2. **Images:** Add all required images before launch
3. **Verification:** Set up Search Console immediately after launch
4. **Content:** Complete all service page content
5. **Monitoring:** Check Search Console weekly for issues

## 📈 Expected Results

After proper implementation and indexing:
- Improved search visibility
- Better social media sharing
- Enhanced rich results in Google
- Higher click-through rates
- Better user engagement
- Increased organic traffic

---

**Last Updated:** 2025-01-19
**Implementation Status:** ✅ Complete
**Build Status:** ✅ Passing (23 routes generated)
