# Images Directory

This directory contains all images used on the Adyber Agency website.

## Folder Structure

```
images/
├── hero/          # Hero section images (main banners)
├── gallery/       # Portfolio/gallery images
├── logo/          # Brand logos and icons
└── general/       # General purpose images
```

## Usage in Vite

Images in the `public/images/` folder can be referenced from your React components using:

```tsx
// Example: For image at public/images/hero/dashboard.png
<img src="/images/hero/dashboard.png" alt="Description" />

// Example: For image at public/images/gallery/portfolio-1.jpg
<img src="/images/gallery/portfolio-1.jpg" alt="Description" />
```

## Image Optimization Tips

1. Use appropriate formats:
   - **WebP** for modern browsers (best compression)
   - **PNG** for images with transparency
   - **JPG** for photos
   - **SVG** for icons and simple graphics

2. Recommended sizes:
   - Hero images: 1920x1080px (max)
   - Gallery thumbnails: 800x800px
   - Gallery full-size: 1200x1200px
   - Logo: 200x200px (or SVG)

3. File naming convention:
   - Use lowercase with hyphens: `hero-dashboard.png`
   - Be descriptive: `gallery-modern-aesthetics.jpg`
   - Include version if needed: `logo-adyber-v2.svg`

## Current Image URLs Being Used

The following external image URLs are currently in use and should be moved to this folder:
- `https://i.ibb.co/9kZW3wGb/Chat-GPT-Image-Jan-12-2026-04-45-41-PM.png` → `/images/hero/instagram-marketing-dashboard-hero.png`
- Gallery images from ibb.co → `/images/gallery/` folder

