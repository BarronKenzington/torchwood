# Stock Images API Setup Guide

## Overview

The site now supports Unsplash stock images via API integration. You can:
- Search for images programmatically
- Display optimized stock images
- Use preset sports-themed images

## Setup Instructions

### 1. Get Unsplash API Key

1. Go to [Unsplash Developers](https://unsplash.com/developers)
2. Create an account (free)
3. Create a new application
4. Copy your **Access Key**

### 2. Add API Key to Environment

Add to your `.env.local` file:
```
UNSPLASH_ACCESS_KEY=your_access_key_here
```

### 3. For Production (Vercel)

Add the environment variable in Vercel:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add `UNSPLASH_ACCESS_KEY` with your key

## Usage Examples

### 1. Using StockImage Component

```tsx
import StockImage from '@/components/StockImage'

// In your component:
<StockImage
  src="https://images.unsplash.com/photo-1234567890?w=800"
  alt="Sports team"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

### 2. Search for Images (Client-Side)

```tsx
import StockImageSearch from '@/components/StockImageSearch'

<StockImageSearch
  onSelect={(image) => {
    console.log('Selected image:', image.urls.regular)
    // Use the image URL
  }}
  initialQuery="volleyball team"
/>
```

### 3. Get Random Image (Server-Side)

```tsx
import { getRandomUnsplashImage } from '@/lib/unsplash'

// In a server component or API route:
const image = await getRandomUnsplashImage('youth sports')
```

### 4. Search Images (Server-Side)

```tsx
import { searchUnsplashImages } from '@/lib/unsplash'

const results = await searchUnsplashImages('volleyball team', 1, 20)
```

### 5. Using Preset Themes

```tsx
import { SPORTS_THEMES, getRandomUnsplashImage } from '@/lib/unsplash'

// Get a random volleyball image
const image = await getRandomUnsplashImage(SPORTS_THEMES.volleyball)
```

## API Routes

### Search Images
```
GET /api/unsplash/search?query=volleyball&page=1&per_page=20
```

### Get Random Image
```
GET /api/unsplash/random?query=sports
```

## Available Preset Themes

- `volleyball` - "volleyball team"
- `coaching` - "youth sports coaching"
- `teamwork` - "teamwork sports"
- `athletes` - "youth athletes"
- `sports` - "youth sports"
- `administration` - "office administration"
- `organization` - "organization planning"

## Example: Adding Hero Background

```tsx
'use client'

import { useEffect, useState } from 'react'
import StockImage from '@/components/StockImage'

export default function HeroWithStockImage() {
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/unsplash/random?query=youth sports')
      .then(res => res.json())
      .then(data => setImageUrl(data.urls.regular))
  }, [])

  if (!imageUrl) return <div>Loading...</div>

  return (
    <div className="relative h-screen">
      <StockImage
        src={imageUrl}
        alt="Youth sports"
        fill
        className="opacity-30"
      />
      <div className="relative z-10">
        {/* Your content */}
      </div>
    </div>
  )
}
```

## Best Practices

1. **Cache Images**: Consider caching frequently used images locally
2. **Alt Text**: Always provide meaningful alt text for accessibility
3. **Sizing**: Use appropriate sizes (don't use full-size images for thumbnails)
4. **Rate Limits**: Unsplash free tier allows 50 requests/hour - be mindful
5. **Attribution**: While not required, you can optionally credit photographers

## Troubleshooting

### "UNSPLASH_ACCESS_KEY is not configured"
- Make sure you've added the key to `.env.local`
- Restart your dev server after adding the key
- For production, add it in Vercel environment variables

### Images not loading
- Check that the API key is valid
- Verify you haven't exceeded rate limits
- Check browser console for errors

## Rate Limits

- **Free Tier**: 50 requests/hour
- **Demo Tier**: 5,000 requests/hour (requires approval)
- Consider caching images to reduce API calls

