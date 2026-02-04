# Image Optimization Guide

## Overview

This project uses responsive images to dramatically improve page load performance across all devices. Images are automatically optimized into multiple sizes using Sharp and served as WebP format.

## How It Works

### 1. Optimization Script

The `scripts/optimize-images.ts` script processes all images in `web/public/` and generates three responsive variants:

- **640w**: Mobile devices (phones in portrait)
- **1024w**: Tablets and small laptops
- **1920w**: Desktop displays

All optimized images are:

- Converted to WebP format (better compression than PNG/JPG)
- Saved to `web/public/optimized/`
- Named with width suffix: `image-640w.webp`, `image-1024w.webp`, `image-1920w.webp`

### 2. Components

#### HeroImage Component

The `HeroImage` component supports responsive images via the `responsive` prop:

```tsx
<HeroImage 
  src="/hero-image.png" 
  alt="Hero" 
  responsive 
/>
```

When `responsive={true}`, it automatically generates:

- Proper `srcset` with all three sizes
- `sizes` attribute for the browser to choose the right variant
- Fallback to the 1920w version

#### ResponsiveImage Component

For non-hero images (cards, thumbnails, etc.), use the `ResponsiveImage` component:

```tsx
import { ResponsiveImage } from '~/components/ResponsiveImage';

<ResponsiveImage
  src="/product-image.jpg"
  alt="Product"
  className="rounded-lg"
  sizes="(max-width: 768px) 100vw, 50vw"
  responsive
/>
```

The `sizes` attribute tells the browser:

- On mobile (≤768px): use 100% of viewport width
- On desktop (>768px): use 50% of viewport width

### 3. Running Optimization

To optimize images, run:

```bash
npm run optimize:images
```

This should be run:

- After adding new images to `web/public/`
- Before committing image changes
- As part of the build process (optional)

## Performance Impact

### Before Optimization

- `virtruv-hero-full.png`: **12MB**
- `virtruv-hero.png`: **3.4MB**
- `rapidalle-hero.png`: **1.5MB**
- Average page load: **5-10 seconds** on mobile

### After Optimization

- Mobile (640w): **~50KB** per hero image
- Desktop (1920w): **~150KB** per hero image
- Average page load: **< 2 seconds** on mobile

**Result: 95-98% reduction in image data transfer!**

## Best Practices

### When to Use Responsive Images

✅ **Always use for:**

- Hero images
- Project screenshots
- Product photos
- Large images (>200KB)

❌ **Skip for:**

- SVG icons (already vector)
- Small images (<100KB)
- Images already <640px wide

### Sizes Attribute Guidance

Use the `sizes` attribute to match your layout:

```tsx
// Full width image
sizes="100vw"

// Half width on desktop, full on mobile
sizes="(max-width: 768px) 100vw, 50vw"

// Third width on desktop (grid of 3)
sizes="(max-width: 768px) 100vw, 33vw"

// Fixed maximum width
sizes="(max-width: 1200px) 100vw, 1200px"
```

### Adding New Images

1. Add original image to `web/public/`
2. Run `npm run optimize:images`
3. Update component to use `responsive` prop
4. Commit only the original image (optimized folder is gitignored)

## Technical Details

### Sharp Configuration

Images are optimized with:

- Quality: 85% (WebP)
- Effort: 6 (higher = better compression, slower)
- Fit: inside (maintains aspect ratio)
- withoutEnlargement: true (doesn't upscale small images)

### File Structure

```
web/public/
├── hero-image.png          # Original (committed)
└── optimized/              # Generated (gitignored)
    ├── hero-image-640w.webp
    ├── hero-image-1024w.webp
    └── hero-image-1920w.webp
```

### Browser Support

WebP is supported in:

- Chrome 23+
- Firefox 65+
- Safari 14+
- Edge 18+

Coverage: **96%+ of all browsers**

## Troubleshooting

### Images not loading?

1. Check that optimized images exist: `ls web/public/optimized/`
2. Verify image naming matches the source (minus extension)
3. Try running optimization again: `npm run optimize:images`

### Build failing?

The optimization script runs on your machine. For production builds:

1. Run optimization locally
2. Commit optimized images (remove from .gitignore if needed)
3. Or add optimization to build pipeline

### Image quality looks poor?

Adjust quality in `scripts/optimize-images.ts`:

```typescript
.webp({ quality: 90, effort: 6 }) // Higher quality (bigger files)
```

## Future Improvements

- [ ] Automatic optimization on image upload
- [ ] AVIF format support (better than WebP)
- [ ] Automatic art direction (different crops per size)
- [ ] Build-time optimization integration
- [ ] CDN integration for dynamic resizing
