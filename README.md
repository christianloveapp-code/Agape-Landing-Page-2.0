<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1AGtgbdv1DRVfsygs1pYcfrW_D6Do92J0

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to Vercel

**Prerequisites:** Vercel account and Vercel CLI (optional)

### Option 1: Deploy via Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Visit [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your repository
4. Vercel will automatically detect the Vite configuration
5. Add your environment variable:
   - Navigate to "Environment Variables"
   - Add `GEMINI_API_KEY` with your actual API key
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts to deploy
4. Set environment variables using: `vercel env add GEMINI_API_KEY`

**Note:** Make sure to set the `GEMINI_API_KEY` environment variable in your Vercel project settings for the app to work properly in production.
