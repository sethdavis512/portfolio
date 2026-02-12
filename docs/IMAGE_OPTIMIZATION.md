# Image Optimization Guide

## Overview

This project uses responsive images to dramatically improve page load performance across all devices. Images are automatically optimized into multiple sizes using Sharp and served as WebP format.

## How It Works

### 1. Optimization Script

The `scripts/optimize-images.ts` script processes all images in `web/public/` and generates **two responsive variants**:

- **640w**: Mobile devices (phones in portrait)
- **1024w**: Tablets, laptops, and desktop displays

⚠️ **Important**: Most images in this project only have 640w and 1024w variants (no 1920w). The components have been configured to use 1024w as the fallback.

All optimized images are:

- Converted to WebP format (better compression than PNG/JPG)
- Saved to `web/public/optimized/`
- Named with width suffix: `image-640w.webp`, `image-1024w.webp`

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

- Proper `srcset` with 640w and 1024w variants
- `sizes` attribute for the browser to choose the right variant
- Fallback to the 1024w version

**⚠️ Critical**: Always include the `responsive` prop when optimized images exist. Without it, the component loads the full-size original image.

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

- Mobile (640w): **~30-50KB** per hero image
- Desktop (1024w): **~60-150KB** per hero image
- Average page load: **< 2 seconds** on mobile

**Result: 95-98% reduction in image data transfer!**

### Real Example: /virtruv Page

**Before fixes (February 2026)**:

- Load time: **6.7 seconds**
- Images loaded: **6.8MB** (unoptimized originals despite optimized versions existing)
- Issue: Component was loading both original AND optimized in srcset

**After fixes**:

- Load time: **1.0 second** (85% faster)
- Images loaded: **161KB** (98% reduction)
- Fix: Component now uses ONLY optimized images in srcset

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

## Common Mistakes & How to Avoid Them

### ❌ Mistake #1: Forgetting the `responsive` Prop

**Problem**: Component loads full-size original instead of optimized variants.

```tsx
// ❌ BAD - Loads 500KB original PNG
<HeroImage src="/hero-image.png" alt="Hero" />

// ✅ GOOD - Loads 30-60KB optimized WebP
<HeroImage src="/hero-image.png" alt="Hero" responsive />
```

**Impact**: 500KB → 30KB (94% reduction missed!)

### ❌ Mistake #2: Using Raw `<img>` Tags for Large Images

**Problem**: No responsive optimization, loads full-size image on all devices.

```tsx
// ❌ BAD - Loads 400KB on mobile phones
<img src="/cover-image.webp" alt="Cover" className="w-full" />

// ✅ GOOD - Loads appropriate size per device
<ResponsiveImage 
  src="/cover-image.webp" 
  alt="Cover" 
  responsive
  loading="eager"
/>
```

**When to fix**: Any image >150KB should use `ResponsiveImage` or `HeroImage` with `responsive` prop.

### ❌ Mistake #3: Component Expecting Non-Existent Image Sizes

**Problem**: Component configured for 1920w fallback when only 640w/1024w exist.

```tsx
// ❌ BAD - Results in 404 for fallback image
const srcSet = [
  `/optimized${baseName}-640w.webp 640w`,
  `/optimized${baseName}-1024w.webp 1024w`,
  `/optimized${baseName}-1920w.webp 1920w` // ← Doesn't exist!
];
return {
  src: `/optimized${baseName}-1920w.webp`, // ← 404!
  srcSet: srcSetParts.join(', ')
};

// ✅ GOOD - Use 1024w as fallback
const srcSet = [
  `/optimized${baseName}-640w.webp 640w`,
  `/optimized${baseName}-1024w.webp 1024w`
];
return {
  src: `/optimized${baseName}-1024w.webp`, // ← Exists!
  srcSet: srcSetParts.join(', ')
};
```

**Current status**: Fixed in `HeroImage.tsx` and `ResponsiveImage.tsx` (Feb 2026).

### ❌ Mistake #4: Referencing Non-Existent Images

**Problem**: Route references image that was never created.

```tsx
// ❌ BAD - Image file doesn't exist, causes 404
<img src="/my-project-hero.png" className="rounded-lg mb-8" />

// ✅ GOOD - Remove reference or add actual image
{/* TODO: Add my-project-hero image */}
<Heading as="h1" size="1" className="mb-8">My Project</Heading>
```

### Pre-Commit Checklist

Before committing new routes or image changes:

- [ ] All `<HeroImage>` components have `responsive` prop
- [ ] All large images (>150KB) use `HeroImage` or `ResponsiveImage`
- [ ] No raw `<img>` tags for images >150KB
- [ ] Run `npm run optimize:images` after adding new images
- [ ] Verify optimized versions exist: `ls web/public/optimized/[image-name]*`
- [ ] Test page load with browser DevTools Network tab
- [ ] Confirm no 404s for image requests

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
    └── hero-image-1024w.webp
```

Note: Some older documentation may reference 1920w variants, but current optimization only generates 640w and 1024w.

### Browser Support

WebP is supported in:

- Chrome 23+
- Firefox 65+
- Safari 14+
- Edge 18+

Coverage: **96%+ of all browsers**

## Troubleshooting

### Images not loading?

1. Check that optimized images exist: `ls web/public/optimized/[image-name]*`
2. Verify image naming matches the source (minus extension)
3. Confirm `responsive` prop is set on HeroImage/ResponsiveImage
4. Check browser console for 404 errors
5. Try running optimization again: `npm run optimize:images`

### Page loading slowly?

1. Open browser DevTools → Network tab
2. Filter by "Img" to see image sizes
3. Look for images >200KB (likely missing `responsive` prop)
4. Search codebase: `grep -r "HeroImage" web/app/routes/` to find usage
5. Verify each usage has `responsive` prop

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
