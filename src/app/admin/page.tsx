'use client';

import { useEffect } from 'react';

export default function AdminPage() {
  useEffect(() => {
    // Redirect to the actual CMS interface
    if (typeof window !== 'undefined') {
      window.location.href = '/admin/index.html';
    }
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center', marginTop: '50px' }}>
      <h1>Redirecting to CMS...</h1>
      <p>If you are not redirected, <a href="/admin/index.html">click here</a>.</p>
    </div>
  );
}

