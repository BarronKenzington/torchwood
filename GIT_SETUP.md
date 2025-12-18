# Git Setup Instructions

Your local git repository is ready! Here's how to connect it to GitHub and deploy to Vercel:

## Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it `torchwood-site` (or your preferred name)
5. **Don't** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 2: Connect Your Local Repository to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
git remote add origin https://github.com/BarronKenzington/torchwood-site.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

**OR** if you prefer SSH:

```bash
git remote add origin git@github.com:BarronKenzington/torchwood-site.git
git push -u origin main
```

## Step 3: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project"
4. Import your `torchwood-site` repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

Vercel will automatically:
- Build your Next.js app
- Deploy it to a global CDN
- Give you a URL like `torchwood-site.vercel.app`
- Set up automatic deployments on every push to main

## Future Updates

After making changes to your site:

```bash
git add .
git commit -m "Your commit message"
git push
```

Vercel will automatically rebuild and redeploy!

