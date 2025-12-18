import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { getBlogPosts, getPostBySlug } from '@/lib/blog'
import { createBlogPost, updateBlogPost, deleteBlogPost, slugify, type BlogPostData } from '@/lib/blog-admin'

async function checkAuth() {
  const cookieStore = await cookies()
  const authCookie = cookieStore.get('admin-auth')
  return authCookie?.value === 'authenticated'
}

export async function GET() {
  const posts = getBlogPosts()
  return NextResponse.json(posts)
}

export async function POST(request: NextRequest) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const data: BlogPostData & { slug?: string } = await request.json()
    
    if (!data.title || !data.content) {
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      )
    }

    const slug = data.slug || slugify(data.title)
    const postData: BlogPostData = {
      title: data.title,
      date: data.date || new Date().toISOString().split('T')[0],
      excerpt: data.excerpt,
      content: data.content,
    }

    // Check if post exists
    const existingPost = getPostBySlug(slug)
    if (existingPost) {
      updateBlogPost(slug, postData)
      return NextResponse.json({ success: true, slug, message: 'Post updated' })
    } else {
      createBlogPost(slug, postData)
      return NextResponse.json({ success: true, slug, message: 'Post created' })
    }
  } catch (error) {
    console.error('Error creating/updating post:', error)
    const errorMessage = error instanceof Error ? error.message : 'Failed to create/update post'
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  if (!(await checkAuth())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const slug = searchParams.get('slug')

    if (!slug) {
      return NextResponse.json(
        { error: 'Slug is required' },
        { status: 400 }
      )
    }

    deleteBlogPost(slug)
    return NextResponse.json({ success: true, message: 'Post deleted' })
  } catch (error) {
    console.error('Error deleting post:', error)
    const errorMessage = error instanceof Error ? error.message : 'Failed to delete post'
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}

