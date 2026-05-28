# Deployment Guide

## GitHub Setup

1. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Repository name: `moshe-uziel-website`
   - Description: `Personal branding website for Moshe Uziel - AI strategy, governance, infrastructure, and agentic systems authority hub`
   - Set to Public
   - Do NOT initialize with README, .gitignore, or license (already created)

2. Push the code:
```bash
cd moshe-uziel-website
git push -u origin master
```

## Vercel Deployment

1. Go to https://vercel.com/moshe-uziel-s-projects
2. Click "New Project"
3. Import from GitHub: `mosheuzi/moshe-uziel-website`
4. Framework Preset: Next.js (should be auto-detected)
5. Build and Output Settings: Use defaults
6. Environment Variables: None needed for initial deployment
7. Click "Deploy"

## Custom Domain Setup (Optional)

1. In Vercel project settings, go to "Domains"
2. Add custom domain: `mosheuziel.com`
3. Configure DNS records as instructed by Vercel
4. SSL certificate will be automatically provisioned

## Content Updates

### Adding New Essays
1. Edit `src/app/writing/page.tsx`
2. Add new article entries to the articles section
3. Update the featured thinking section on homepage if needed

### Updating About/Contact
1. Edit respective page files in `src/app/`
2. Update contact information, experience, or focus areas as needed

### Adding Blog Functionality (Future)
The site is currently static but can be extended with:
- MDX for blog posts
- CMS integration (Sanity, Contentful)
- Database for dynamic content

## Development Workflow

```bash
# Local development
npm run dev

# Build for production
npm run build

# Test production build locally
npm start

# Deploy (via git push to trigger Vercel)
git add .
git commit -m "Update content"
git push origin master
```

## Performance Optimization

The site is already optimized for:
- Fast loading with static generation
- SEO with comprehensive meta tags
- Mobile-first responsive design
- Minimal JavaScript bundle
- Optimized images (when added)

## Analytics & Monitoring

Consider adding:
- Google Analytics 4
- Vercel Analytics
- Search Console verification
- Performance monitoring

## Security

- All external links have `rel="noopener noreferrer"`
- No sensitive data exposed
- Static generation provides security benefits
- Regular dependency updates recommended