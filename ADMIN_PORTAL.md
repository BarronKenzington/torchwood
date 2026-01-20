# Admin Portal Guide

## Setup

1. **Set Admin Password**
   Create a `.env.local` file in the root directory:
   ```
   ADMIN_PASSWORD=your-strong-password-here
   ```
   
   ⚠️ **Important**: Never commit `.env.local` to git! It's already in `.gitignore`.

2. **Access the Portal**
   Navigate to `/admin/login` on your site (e.g., `http://localhost:3000/admin/login`)

## Features

### Dashboard (`/admin`)
- View all blog posts
- Edit existing posts
- Delete posts
- Create new posts

### Creating a Blog Post
1. Click "New Post" on the dashboard
2. Fill in:
   - **Title**: The post title
   - **URL Slug**: Auto-generated from title (can be edited)
   - **Date**: Publication date
   - **Excerpt**: Brief description for preview cards and SEO
   - **Content**: Markdown content (supports full Markdown syntax)
3. Click "Publish Post"

### Editing a Blog Post
1. Click "Edit" next to any post on the dashboard
2. Modify the fields as needed
3. Click "Save Changes"

### Deleting a Blog Post
1. Click "Delete" next to any post on the dashboard
2. Confirm the deletion

## How It Works

- **Local Development**: Posts are saved directly to `content/blog/` as markdown files
- **Production (Vercel)**: 
  - ⚠️ **Important**: Vercel's file system is read-only in production
  - Files created through the admin portal won't persist after deployment
  - **Solution Options**:
    1. **Manual Git Workflow**: Create posts locally, commit and push to git
    2. **Database**: Migrate to a database (e.g., Vercel Postgres, Supabase)
    3. **Headless CMS**: Use a CMS like Sanity, Contentful, or Strapi

## Current Limitations

- Posts created in production won't persist (Vercel limitation)
- Authentication uses simple password (not production-grade)
- No image upload functionality yet
- No draft/publish workflow

## Future Enhancements

- Database integration for production persistence
- Image upload and management
- Draft/publish workflow
- Rich text editor (WYSIWYG)
- Auto-sync from external platforms (WordPress, Medium, etc.)

## Security Notes

- Change the default password immediately
- Use a strong password
- Consider adding rate limiting for production
- For production, consider upgrading to NextAuth.js or similar

## ChangeDetection Environment Variables

Add these to `.env.local` when using the monitoring dashboard:

```
CHANGEDETECTION_BASE_URL=http://localhost:5000/api/v1
CHANGEDETECTION_API_KEY=your-api-key-here
```