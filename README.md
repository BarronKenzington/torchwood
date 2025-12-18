# Torchwood Consulting Website

A modern Next.js website for Torchwood Consulting, built to replace Squarespace and deployable via Vercel.

## Features

- **Homepage** - Hero section with company branding and key messaging
- **Services** - Detailed service offerings
- **About** - Company information and approach
- **Blog** - Markdown-based blog posts
- **Products** - Product and service offerings
- **Responsive Design** - Mobile-friendly layout
- **Brand Colors** - Custom Torchwood teal and green color scheme

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deploying to Vercel

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Next.js
6. Click "Deploy"

Vercel will automatically:
- Build your Next.js app
- Deploy it to a global CDN
- Set up automatic deployments on every Git push

## Adding Blog Posts

1. Create a new `.md` file in the `content/blog/` directory
2. Add frontmatter:
   ```markdown
   ---
   title: Your Post Title
   date: 2024-01-15
   excerpt: A brief description
   ---
   ```
3. Write your content in Markdown below the frontmatter

## Project Structure

```
torchwood-site/
├── app/
│   ├── layout.tsx
│   ├── page.tsx (Homepage)
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── products/
│   │   └── page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── BlogCard.tsx
├── content/
│   └── blog/ (Markdown blog posts)
├── lib/
│   └── blog.ts
└── public/ (Images, favicon, etc.)
```

## Brand Colors

- **Torchwood Teal**: #008B8B
- **Torchwood Dark Teal**: #006666
- **Torchwood Green**: #228B22
- **Torchwood Dark Green**: #006400

These colors are defined in `tailwind.config.js` and `app/globals.css`.

## License

All rights reserved © Torchwood Consulting

