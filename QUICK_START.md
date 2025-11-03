# 🚀 Quick Start - Netlify CMS

## Step 1: Install Dependencies (if not already done)
```bash
yarn install
```

## Step 2: Start Development with CMS

### Option A: Run both servers with one command
```bash
yarn dev:cms
```
This starts both the Next.js dev server and the CMS proxy server.

### Option B: Run separately (two terminals)

**Terminal 1:**
```bash
yarn dev
```

**Terminal 2:**
```bash
yarn cms:proxy
```

## Step 3: Access the CMS
Open your browser and go to:
```
http://localhost:3000/admin
```

## Step 4: Edit Your Content
- Click on "Artwork Collections" in the CMS
- Select a year (2022, 2023, 2024, or 2025)
- Edit existing artworks or add new ones
- Click "Publish" to save changes

## Step 5: See Changes Live
Your Next.js app will automatically reload with the updated content!

---

## 📋 What's Included

✅ **Netlify CMS Admin Interface** at `/admin`
✅ **4 Artwork Collections** (2022-2025) pre-populated with your existing data
✅ **Local Backend** for development (no Netlify account needed for local dev)
✅ **Markdown Files** in `content/artwork/` folder for each year
✅ **Automatic Cloudinary URL Optimization**
✅ **TypeScript Support** for all CMS data

---

## 🔄 Using CMS Data in Your Components

### Current Usage (Static Data)
```tsx
// src/constants/ArtWorkData.tsx
export const ArtWorkDataPerYear = [ /* hardcoded data */ ];
```

### New Usage (CMS-Managed Data)
```tsx
// In any Server Component
import { getArtWorkDataPerYearFromCMS } from '@/constants/ArtWorkDataCMS';

export default function MyComponent() {
  const artworkData = getArtWorkDataPerYearFromCMS();
  
  return (
    <div>
      {artworkData.map((year) => (
        <div key={year.slug}>
          <h2>{year.title}</h2>
          {year.images.map((artwork) => (
            <div key={artwork.id}>
              <h3>{artwork.title}</h3>
              <p>{artwork.dimensions} - {artwork.medium}</p>
              <img src={artwork.ImageURL} alt={artwork.title} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
```

---

## 🎨 Adding a New Artwork

1. Go to `http://localhost:3000/admin`
2. Click "Artwork Collections"
3. Select the year you want to add to
4. Scroll to the "Artworks" section
5. Click "Add Artworks"
6. Fill in:
   - **ID**: Sequential number (e.g., 15)
   - **Title**: Name of the artwork
   - **Dimensions**: Size (e.g., "24x30" or "38cm x 56cm")
   - **Medium**: Type (e.g., "Oil on Canvas")
   - **Cloudinary Image URL**: Full Cloudinary URL
   - **Cloudinary Thumbnail URL**: (optional) or leave blank to auto-generate
7. Click "Publish"

---

## 📁 File Structure

```
content/artwork/
├── 2022.md          ← Edit via CMS
├── 2023.md          ← Edit via CMS
├── 2024.md          ← Edit via CMS
└── 2025.md          ← Edit via CMS

public/admin/
├── config.yml       ← CMS configuration
└── index.html       ← CMS interface

src/
├── app/admin/
│   └── page.tsx     ← Admin route
├── constants/
│   ├── ArtWorkData.tsx     ← Original (legacy)
│   └── ArtWorkDataCMS.tsx  ← New CMS-powered
└── lib/
    └── content.ts   ← CMS utilities
```

---

## 🚀 Deploy to Netlify

See full instructions in [CMS_SETUP.md](./CMS_SETUP.md#deployment-to-netlify)

**Quick Steps:**
1. Push code to GitHub
2. Connect repository on Netlify
3. Enable Netlify Identity
4. Enable Git Gateway
5. Invite yourself as a user
6. Access CMS at `https://your-site.netlify.app/admin`

---

## ❓ Need Help?

- **Full Documentation**: See [CMS_SETUP.md](./CMS_SETUP.md)
- **Netlify CMS Docs**: https://www.netlifycms.org/docs/
- **Issues**: Check the troubleshooting section in CMS_SETUP.md

---

## 💡 Pro Tips

- Changes in the CMS are saved to markdown files in `content/artwork/`
- You can edit markdown files directly, but use the CMS for consistency
- The CMS validates your data structure automatically
- Image URLs should be from Cloudinary for optimization
- IDs should be unique within each year

