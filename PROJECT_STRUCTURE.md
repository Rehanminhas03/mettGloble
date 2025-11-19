# Agency Website - Complete Project Structure

## 📁 Project Overview

This is a fully scalable, modular Next.js 14 agency website with:
- **JSON-based content system** for easy content management
- **Dynamic routing** for services and blog posts
- **Component-based architecture** for maximum reusability
- **Professional UI/UX** with Tailwind CSS
- **TypeScript** for type safety
- **Responsive design** optimized for all devices

---

## 🗂️ Folder Structure

```
src/
├── app/                          # Next.js 14 App Router pages
│   ├── layout.tsx               # Root layout with Navbar & Footer
│   ├── globals.css              # Global styles & Tailwind config
│   ├── page.tsx                 # Homepage
│   ├── about/
│   │   └── page.tsx            # About Us page
│   ├── services/
│   │   ├── page.tsx            # Services parent page
│   │   └── [slug]/
│   │       └── page.tsx        # Dynamic service pages
│   ├── contact/
│   │   └── page.tsx            # Contact page with form
│   ├── blog/
│   │   ├── page.tsx            # Blog listing page
│   │   └── [slug]/
│   │       └── page.tsx        # Dynamic blog posts
│   ├── case-studies/
│   │   └── page.tsx            # Case studies page
│   ├── privacy-policy/
│   │   └── page.tsx            # Privacy policy
│   └── terms/
│       └── page.tsx            # Terms of service
│
├── components/                   # Reusable React components
│   ├── shared/                  # Shared components used across pages
│   │   ├── Navbar.tsx          # Navigation with dropdown menus
│   │   ├── Footer.tsx          # Footer with social links
│   │   ├── Button.tsx          # Reusable button component
│   │   ├── Card.tsx            # Card component with hover effects
│   │   ├── Container.tsx       # Container wrapper
│   │   ├── SectionHeading.tsx  # Section heading component
│   │   └── PageHeader.tsx      # Page header with breadcrumbs
│   ├── home/                    # Homepage-specific components
│   │   ├── Hero.tsx            # Hero section
│   │   ├── ServicesGrid.tsx    # Services grid
│   │   ├── WhyChooseUs.tsx     # Why choose us section
│   │   ├── Industries.tsx      # Industries we serve
│   │   └── CTA.tsx             # Call-to-action section
│   ├── services/                # Service page components
│   │   └── ServicePageTemplate.tsx  # Template for all service pages
│   └── contact/                 # Contact page components
│       └── ContactForm.tsx     # Contact form
│
└── content/                      # JSON content files
    ├── website.json             # Global website settings
    ├── home.json                # Homepage content
    ├── about.json               # About page content
    ├── services.json            # Services parent page
    ├── header.json              # Navigation menu items
    ├── footer.json              # Footer links
    ├── blog.json                # Blog posts
    ├── case-studies.json        # Case studies
    └── service-pages/           # Individual service content
        ├── amazon-ecommerce.json
        ├── web-development.json
        ├── cybersecurity.json
        ├── procurement.json
        ├── supply-chain.json
        ├── leadgen.json
        ├── branding.json
        ├── ai-automation.json
        ├── customer-support.json
        ├── it-helpdesk.json
        └── data-entry.json
```

---

## 🎨 Component System

### Shared Components

1. **Navbar** - Sticky navigation with dropdown menus for services
2. **Footer** - Multi-column footer with social links
3. **Button** - Versatile button with variants (primary, secondary, outline, ghost)
4. **Card** - Reusable card component with optional hover effects
5. **SectionHeading** - Consistent section headings across pages
6. **PageHeader** - Hero-style page headers with breadcrumbs

### Page-Specific Components

**Home Components:**
- `Hero` - Main hero section with CTA buttons
- `ServicesGrid` - Grid display of services
- `WhyChooseUs` - Benefits section
- `Industries` - Industries served
- `CTA` - Call-to-action sections

**Service Components:**
- `ServicePageTemplate` - Unified template for all service pages

**Contact Components:**
- `ContactForm` - Full-featured contact form

---

## 🔗 Dynamic Routing

### Service Pages (`/services/[slug]`)

All service pages use a single template component and load content from JSON:

```typescript
// File: src/app/services/[slug]/page.tsx
// Loads: src/content/service-pages/{slug}.json
```

**Available service routes:**
- `/services/amazon-ecommerce`
- `/services/web-development`
- `/services/cybersecurity`
- `/services/procurement`
- `/services/supply-chain`
- `/services/leadgen`
- `/services/branding`
- `/services/ai-automation`
- `/services/customer-support`
- `/services/it-helpdesk`
- `/services/data-entry`

---

## 📝 Content Management

All content is stored in JSON files in `src/content/`. This makes it easy to update content without touching code.

### Example: Adding a New Service

1. Create a JSON file: `src/content/service-pages/new-service.json`
2. Use this structure:

```json
{
  "slug": "new-service",
  "hero": {
    "headline": "Service Title",
    "subheading": "Service description",
    "cta": {
      "primary": { "text": "Get Started", "href": "/contact" }
    }
  },
  "introduction": "Service introduction text",
  "services": [
    {
      "title": "Feature 1",
      "description": "Description",
      "features": ["Benefit 1", "Benefit 2"]
    }
  ],
  "whyChooseUs": {
    "title": "Why Choose Us",
    "reasons": ["Reason 1", "Reason 2"]
  },
  "cta": {
    "title": "Ready to Get Started?",
    "description": "Contact us today",
    "buttons": {
      "primary": { "text": "Contact Us", "href": "/contact" }
    }
  }
}
```

3. The page will automatically be generated at `/services/new-service`

---

## 🎨 Styling System

### Tailwind CSS Utilities

Custom utilities defined in `globals.css`:

- `.container-custom` - Max-width container with responsive padding
- `.section-padding` - Consistent section spacing
- `.gradient-text` - Blue-to-emerald gradient text
- `.card-hover` - Card hover animation

### Color Scheme

- Primary: Blue (#3b82f6)
- Secondary: Emerald (#10b981)
- Background: Zinc-50
- Text: Zinc-900

---

## 🚀 Getting Started

### Installation

```bash
npm install
# or
yarn install
```

### Development

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm run start
```

---

## 📄 Pages Overview

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Homepage with hero, services, and CTAs |
| About | `/about` | Company vision, mission, team, values |
| Services | `/services` | All services overview |
| Service Detail | `/services/[slug]` | Individual service pages |
| Contact | `/contact` | Contact form and information |
| Case Studies | `/case-studies` | Success stories |
| Blog | `/blog` | Blog listing |
| Privacy Policy | `/privacy-policy` | Privacy policy |
| Terms | `/terms` | Terms of service |

---

## 🎯 Key Features

✅ Fully responsive design
✅ SEO-optimized structure
✅ Dynamic service pages
✅ JSON-based content system
✅ Modern UI with gradient accents
✅ Sticky navigation with dropdowns
✅ Mobile-friendly menus
✅ Professional contact form
✅ Reusable component library
✅ TypeScript for type safety

---

## 📞 Support

For questions or issues, refer to the project documentation or contact the development team.

---

**Built with Next.js 14, TypeScript, and Tailwind CSS**
