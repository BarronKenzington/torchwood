import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPostData {
  title: string
  date: string
  excerpt?: string
  content: string
}

export function createBlogPost(slug: string, data: BlogPostData): void {
  // Check if we're in production (Vercel has read-only filesystem)
  const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL === '1'
  if (isProduction) {
    throw new Error(
      'Cannot create blog posts in production. Vercel\'s file system is read-only. ' +
      'Please create posts locally and commit them to git, or migrate to a database solution.'
    )
  }

  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
  }

  const frontmatter = `---
title: "${data.title.replace(/"/g, '\\"')}"
date: ${data.date}
excerpt: "${(data.excerpt || '').replace(/"/g, '\\"')}"
---

${data.content}`

  const filePath = path.join(postsDirectory, `${slug}.md`)
  fs.writeFileSync(filePath, frontmatter, 'utf8')
}

export function updateBlogPost(slug: string, data: BlogPostData): void {
  // Check if we're in production (Vercel has read-only filesystem)
  const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL === '1'
  if (isProduction) {
    throw new Error(
      'Cannot update blog posts in production. Vercel\'s file system is read-only. ' +
      'Please edit posts locally and commit them to git, or migrate to a database solution.'
    )
  }

  const filePath = path.join(postsDirectory, `${slug}.md`)
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`Post with slug "${slug}" not found`)
  }

  const frontmatter = `---
title: "${data.title.replace(/"/g, '\\"')}"
date: ${data.date}
excerpt: "${(data.excerpt || '').replace(/"/g, '\\"')}"
---

${data.content}`

  fs.writeFileSync(filePath, frontmatter, 'utf8')
}

export function deleteBlogPost(slug: string): void {
  // Check if we're in production (Vercel has read-only filesystem)
  const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL === '1'
  if (isProduction) {
    throw new Error(
      'Cannot delete blog posts in production. Vercel\'s file system is read-only. ' +
      'Please delete posts locally and commit changes to git, or migrate to a database solution.'
    )
  }

  const filePath = path.join(postsDirectory, `${slug}.md`)
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`Post with slug "${slug}" not found`)
  }

  fs.unlinkSync(filePath)
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

