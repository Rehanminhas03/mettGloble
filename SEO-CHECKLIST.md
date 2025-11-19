# SEO Launch Checklist for MettGlobal

## ✅ Pre-Launch (Completed)

- [x] Metadata configuration created
- [x] All pages have unique titles and descriptions
- [x] OpenGraph and Twitter Cards implemented
- [x] Structured data (JSON-LD) added
- [x] XML sitemap generated
- [x] Robots.txt created
- [x] Canonical URLs set
- [x] Mobile-responsive design
- [x] Semantic HTML structure
- [x] Clean URL structure

## 📋 Before Going Live

### Content
- [ ] Complete all 11 service page content (3 done, 8 need full content)
- [ ] Add compelling meta descriptions for all pages
- [ ] Review and optimize all page titles
- [ ] Add internal links between related pages
- [ ] Ensure all headings follow proper hierarchy (H1 → H2 → H3)

### Images & Media
- [ ] Create and add `/public/og-image.jpg` (1200x630px)
- [ ] Create and add `/public/logo.png`
- [ ] Create and add `/public/favicon.ico`
- [ ] Create and add `/public/apple-touch-icon.png` (180x180px)
- [ ] Add alt text to all images
- [ ] Optimize all images for web (use Next.js Image component)

### Configuration
- [ ] Update `.env.local` with production site URL
- [ ] Update `src/content/website.json` with actual contact info
- [ ] Review and update social media links
- [ ] Set up custom 404 page (optional)

### Technical
- [ ] Test website on mobile devices
- [ ] Test website on different browsers
- [ ] Check page load speed with PageSpeed Insights
- [ ] Verify all links work (no 404s)
- [ ] Test contact form functionality
- [ ] Set up SSL certificate (HTTPS)

## 🚀 Launch Day

### Search Engines
- [ ] Submit sitemap to Google Search Console
  - URL: `https://mettglobal.com/sitemap.xml`
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify site ownership in Google Search Console
- [ ] Add verification meta tag to `.env.local`
- [ ] Request indexing for homepage and key pages

### Monitoring Setup
- [ ] Set up Google Analytics 4 (optional)
- [ ] Set up Google Search Console
- [ ] Set up Bing Webmaster Tools
- [ ] Configure uptime monitoring

### Social Media
- [ ] Test social sharing on Facebook
- [ ] Test social sharing on LinkedIn
- [ ] Test social sharing on Twitter/X
- [ ] Verify OpenGraph images appear correctly

## 📊 Post-Launch (First Week)

### Testing & Validation
- [ ] Test all pages with [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Validate structured data on all pages
- [ ] Check mobile-friendliness
- [ ] Run PageSpeed Insights audit
- [ ] Check for broken links
- [ ] Verify robots.txt is accessible
- [ ] Verify sitemap.xml is accessible

### Search Console
- [ ] Check for crawl errors
- [ ] Review index coverage
- [ ] Check mobile usability issues
- [ ] Review page experience insights
- [ ] Set up email alerts for critical issues

### Content
- [ ] Add first blog post (if ready)
- [ ] Share content on social media
- [ ] Start internal linking strategy
- [ ] Create case study detail pages

## 📈 Ongoing (Monthly)

### Monitoring
- [ ] Review organic traffic in Analytics
- [ ] Check keyword rankings
- [ ] Review Search Console performance
- [ ] Analyze user behavior
- [ ] Check for 404 errors
- [ ] Review Core Web Vitals

### Content Updates
- [ ] Add new blog posts
- [ ] Update service pages with new offerings
- [ ] Add new case studies
- [ ] Update team information (if needed)
- [ ] Keep content fresh and relevant

### Technical SEO
- [ ] Review and update meta descriptions
- [ ] Add new internal links
- [ ] Check for broken external links
- [ ] Update sitemap if new pages added
- [ ] Review and optimize slow pages

### Link Building
- [ ] Submit to relevant directories
- [ ] Reach out for guest posting
- [ ] Engage with industry communities
- [ ] Create shareable content
- [ ] Build quality backlinks

## 🎯 Priority Actions

### High Priority (Do First)
1. Add all required images (og-image, logo, favicon)
2. Update contact information in `website.json`
3. Complete service page content
4. Set up Google Search Console
5. Submit sitemap

### Medium Priority (Do Within 1 Week)
1. Set up Google Analytics
2. Test all social sharing
3. Add blog posts
4. Create case study details
5. Internal linking optimization

### Low Priority (Do When Possible)
1. Set up email newsletter (optional)
2. Create downloadable resources
3. Add live chat (optional)
4. Create video content
5. Expand FAQ section

## 📝 Quick Commands

```bash
# Build the site
npm run build

# Run development server
npm run dev

# Check for TypeScript errors
npm run build

# Test sitemap locally
curl http://localhost:3000/sitemap.xml

# Test robots.txt locally
curl http://localhost:3000/robots.txt
```

## 🔗 Useful Links

- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [OpenGraph Debugger](https://www.opengraph.xyz/)
- [Schema.org Validator](https://validator.schema.org/)

## ✨ Success Metrics

Track these KPIs:
- Organic search traffic
- Keyword rankings (top 10 keywords)
- Click-through rate (CTR) from search
- Bounce rate
- Time on page
- Pages per session
- Conversion rate
- Backlink count

---

**Note:** This is a living document. Update it as you complete tasks and add new SEO initiatives.
