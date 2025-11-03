'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';

// Dynamically import CMS with no SSR
const CMS = dynamic(
  () => import('netlify-cms-app').then((cms) => {
    cms.init();
    return () => null;
  }),
  { ssr: false, loading: () => <p>Loading CMS...</p> }
);

export default function AdminPage() {
  useEffect(() => {
    // Redirect to the actual CMS interface
    if (typeof window !== 'undefined') {
      window.location.href = '/admin/index.html';
    }
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Redirecting to CMS...</h1>
      <p>If you are not redirected, <a href="/admin/index.html">click here</a>.</p>
    </div>
  );
}

