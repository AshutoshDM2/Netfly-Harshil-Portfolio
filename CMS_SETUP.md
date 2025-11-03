# Netlify CMS Setup Guide

This project now includes Netlify CMS for managing artwork data through an admin interface.

## 🚀 Quick Start

### Local Development

1. **Start the development server:**
   ```bash
   yarn dev
   ```

2. **Start the Netlify CMS proxy (in a separate terminal):**
   ```bash
   npx netlify-cms-proxy-server
   ```

3. **Access the CMS:**
   - Open your browser and navigate to: `http://localhost:3000/admin`
   - You should see the Netlify CMS interface

### What You Can Edit

Through the CMS admin interface, you can:
- ✅ Add new artwork years/collections
- ✅ Add/edit/delete artworks within each year
- ✅ Update artwork details (title, dimensions, medium)
- ✅ Update Cloudinary image URLs
- ✅ Reorder artworks

## 📁 Project Structure

```
harshil-portfolio-v2/
├── content/
│   └── artwork/
│       ├── 2022.md
│       ├── 2023.md
│       ├── 2024.md
│       └── 2025.md
├── public/
│   └── admin/
│       ├── config.yml      # CMS configuration
│       └── index.html      # CMS interface
├── src/
│   ├── app/
│   │   └── admin/
│   │       └── page.tsx    # Admin page route
│   ├── constants/
│   │   ├── ArtWorkData.tsx    # Original data (legacy)
│   │   └── ArtWorkDataCMS.tsx # CMS-powered data
│   └── lib/
│       └── content.ts      # CMS data reading utilities
```

## 🔄 How It Works

1. **Content Storage**: Artwork data is stored in markdown files in `content/artwork/`
2. **CMS Interface**: Netlify CMS provides a user-friendly interface at `/admin`
3. **Data Loading**: The app reads markdown files and converts them to the expected format
4. **Cloudinary Integration**: Images are stored on Cloudinary; CMS manages the URLs

## 📝 Content Format

Each artwork collection is a markdown file with YAML frontmatter:

```yaml
---
year: "2025"
slug: "2025"
galleryImage: ""
artworks:
  - id: 1
    title: "All Eyes on YOU"
    dimensions: "38cm x 56cm"
    medium: "Charcoal on Paper"
    imageURL: "https://res.cloudinary.com/..."
    thumbnailURL: ""
---
```

## 🔧 Using CMS Data in Your App

### Option 1: Import CMS Data Directly (Server Components)

```tsx
import { getArtWorkDataPerYearFromCMS } from '@/constants/ArtWorkDataCMS';

export default function Page() {
  const artworkData = getArtWorkDataPerYearFromCMS();
  // Use artworkData...
}
```

### Option 2: Keep Using Original Data (Backward Compatible)

The original `ArtWorkData.tsx` file still works. You can gradually migrate to CMS-managed content.

## 🌐 Deployment to Netlify

### First Time Setup

1. **Push your code to GitHub**

2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository

3. **Enable Netlify Identity:**
   - In your Netlify site dashboard, go to "Identity"
   - Click "Enable Identity"
   - Go to "Settings and usage" → "Registration preferences"
   - Set to "Invite only" (recommended for security)

4. **Enable Git Gateway:**
   - In Identity settings, scroll to "Services"
   - Click "Enable Git Gateway"

5. **Invite yourself:**
   - Go to "Identity" tab
   - Click "Invite users"
   - Enter your email address

6. **Accept invitation:**
   - Check your email
   - Click the invite link
   - Set your password

### Accessing the CMS on Production

1. Go to `https://your-site-name.netlify.app/admin`
2. Log in with your Netlify Identity credentials
3. Make changes through the CMS
4. Changes are committed directly to your GitHub repository
5. Netlify automatically rebuilds and deploys your site

## 🔐 Security Notes

- The CMS is protected by Netlify Identity
- Only invited users can access the admin panel
- All changes are version-controlled through Git
- You can review changes before they go live

## 🛠️ Configuration

### CMS Config (`public/admin/config.yml`)

Key settings:
- `backend`: Uses Git Gateway for production, local backend for development
- `media_folder`: Where uploaded images are stored
- `collections`: Defines the content structure

### Local Backend

For local development without Netlify:
- Runs `npx netlify-cms-proxy-server`
- Allows editing content locally
- Changes are saved directly to your local files
- No authentication required in local mode

## 📸 Image Management

### Current Setup
- Images are hosted on Cloudinary
- CMS stores Cloudinary URLs in the markdown files
- Images are optimized automatically using Cloudinary transformations

### To Add New Images
1. Upload image to Cloudinary
2. Copy the Cloudinary URL
3. Paste the URL in the CMS when creating/editing artwork

### Future Enhancement
You can configure Cloudinary as a media backend:
- Install `netlify-cms-media-library-cloudinary`
- Update `config.yml` with Cloudinary credentials
- Upload images directly through CMS

## 🐛 Troubleshooting

### CMS not loading locally
- Make sure `npx netlify-cms-proxy-server` is running
- Check that you're accessing `http://localhost:3000/admin`
- Check browser console for errors

### Changes not appearing
- Make sure you clicked "Publish" in the CMS
- Restart the Next.js dev server
- Check that files in `content/artwork/` were updated

### Can't access CMS on production
- Verify Netlify Identity is enabled
- Check that you've been invited as a user
- Make sure Git Gateway is enabled

## 📚 Additional Resources

- [Netlify CMS Documentation](https://www.netlifycms.org/docs/)
- [Netlify Identity Documentation](https://docs.netlify.com/visitor-access/identity/)
- [Next.js Documentation](https://nextjs.org/docs)

## 🔄 Migration Path

If you want to fully migrate to CMS-managed content:

1. **Update imports** in your components:
   ```tsx
   // Before
   import { ArtWorkDataPerYear } from '@/constants/ArtWorkData';
   
   // After
   import { getArtWorkDataPerYearFromCMS } from '@/constants/ArtWorkDataCMS';
   const ArtWorkDataPerYear = getArtWorkDataPerYearFromCMS();
   ```

2. **Test thoroughly** to ensure everything works

3. **Optional**: Remove `ArtWorkData.tsx` once migration is complete

## 💡 Tips

- Always use the CMS to edit content (don't edit markdown files manually when using CMS)
- The CMS interface is accessible at `/admin` on any environment
- Use "Draft" status in CMS to preview changes before publishing
- Content changes trigger automatic rebuilds on Netlify

