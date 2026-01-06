import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt?: string
  content: string
}

export function getBlogPosts(): Omit<BlogPost, 'content'>[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter(name => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, excerpt, content } = matter(fileContents, {
        excerpt: true
      })

      // Prioritize frontmatter excerpt, then extracted excerpt, then generate from content
      let postExcerpt = data.excerpt || (excerpt as string) || ''
      
      // If still no excerpt, generate one from the first paragraph of content
      if (!postExcerpt && content) {
        const firstParagraph = content.split('\n\n')[0]?.replace(/^#+\s*/, '').trim()
        if (firstParagraph) {
          postExcerpt = firstParagraph.length > 150 
            ? firstParagraph.substring(0, 150) + '...'
            : firstParagraph
        }
      }

      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: postExcerpt,
      }
    })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    content,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
  }
}

