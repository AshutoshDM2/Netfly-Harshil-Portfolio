# Harshil Portfolio v2

A modern, elegant portfolio website built with Next.js 16, featuring a headless CMS for easy content management.

## 🎨 Features

- **Modern Tech Stack**: Built with Next.js 16, React 19, TypeScript, and Tailwind CSS
- **Content Management**: Integrated Netlify CMS for easy artwork management
- **Performance Optimized**: Image optimization with Cloudinary CDN
- **Smooth Animations**: GSAP and Framer Motion for beautiful transitions
- **Responsive Design**: Fully responsive across all devices
- **SEO Optimized**: Built-in meta tags and optimizations

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Install dependencies
yarn install
```

### Development

#### Option 1: Run with CMS (Recommended)
```bash
yarn dev:cms
```
This starts both the Next.js development server and the CMS proxy server.

#### Option 2: Run separately
```bash
# Terminal 1: Next.js dev server
yarn dev

# Terminal 2: CMS proxy server (if you want to use the CMS)
yarn cms:proxy
```

### Access the CMS

Open `http://localhost:3000/admin` to manage your artwork content.

## 📚 Documentation

- **[QUICK_START.md](./QUICK_START.md)** - Get up and running in 5 minutes
- **[CMS_SETUP.md](./CMS_SETUP.md)** - Complete CMS setup and deployment guide
- **[EXAMPLES.md](./EXAMPLES.md)** - Code examples for using CMS data

## 🎯 Project Structure

```
harshil-portfolio-v2/
├── assets/                    # Static assets (images, fonts)
├── content/                   # CMS-managed content
│   └── artwork/              # Artwork collections (markdown files)
├── public/
│   ├── admin/                # Netlify CMS admin interface
│   └── images/               # Public images
├── src/
│   ├── app/                  # Next.js app directory
│   │   ├── admin/           # CMS admin page
│   │   ├── api/             # API routes
│   │   ├── gallery/         # Gallery pages
│   │   └── ...
│   ├── common/              # Reusable components
│   ├── components/          # UI components
│   ├── constants/           # Data and constants
│   │   ├── ArtWorkData.tsx      # Original static data
│   │   └── ArtWorkDataCMS.tsx   # CMS-powered data
│   ├── lib/                 # Utilities
│   │   ├── content.ts       # CMS data utilities
│   │   └── cloudinary.ts    # Image optimization
│   └── modules/             # Feature modules
├── netlify.toml             # Netlify configuration
└── package.json
```

## 🛠️ Available Scripts

```bash
yarn dev          # Start development server
yarn build        # Build for production
yarn start        # Start production server
yarn lint         # Run ESLint
yarn cms:proxy    # Start CMS proxy server
yarn dev:cms      # Run dev server + CMS proxy
```

## 🎨 Using the CMS

### Adding New Artwork

1. Navigate to `http://localhost:3000/admin`
2. Click "Artwork Collections"
3. Select a year or create a new collection
4. Add artwork details:
   - Title
   - Dimensions
   - Medium
   - Cloudinary Image URL
5. Click "Publish"

### Using CMS Data in Components

```tsx
// Server Component
import { getArtWorkDataPerYearFromCMS } from '@/constants/ArtWorkDataCMS';

export default function GalleryPage() {
  const artworkData = getArtWorkDataPerYearFromCMS();
  
  return (
    <div>
      {artworkData.map((collection) => (
        <div key={collection.slug}>
          <h2>{collection.title}</h2>
          {/* Render artworks */}
        </div>
      ))}
    </div>
  );
}
```

See [EXAMPLES.md](./EXAMPLES.md) for more usage examples.

## 🚀 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository on [Netlify](https://netlify.com)
3. Enable Netlify Identity in your site settings
4. Enable Git Gateway
5. Invite users who should have CMS access
6. Access the CMS at `https://your-site.netlify.app/admin`

For detailed deployment instructions, see [CMS_SETUP.md](./CMS_SETUP.md#deployment-to-netlify).

## 🔧 Technologies

- **Framework**: Next.js 16
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP, Framer Motion
- **CMS**: Netlify CMS
- **CDN**: Cloudinary
- **Forms**: Formik + Yup
- **State Management**: React Context

## 📝 Content Management

This portfolio uses a hybrid approach:
- **Static Assets**: Images and fonts in the `assets/` folder
- **CMS-Managed Content**: Artwork metadata in markdown files
- **Cloudinary**: Image hosting and optimization

You can:
- Continue using static data from `ArtWorkData.tsx` (legacy)
- Migrate to CMS-managed content from `ArtWorkDataCMS.tsx`
- Use both simultaneously during migration

## 🔐 Security

- CMS access is protected by Netlify Identity
- Only invited users can access the admin panel
- All changes are version-controlled through Git
- Local development mode requires no authentication

## 📄 License

© 2025 Harshil Portfolio. All rights reserved.

## 🤝 Contributing

This is a personal portfolio project. If you have suggestions or find bugs, feel free to open an issue.

## 📞 Contact

For inquiries, please use the contact form on the website.
