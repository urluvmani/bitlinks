// app/about/page.js (or /app/about/page.tsx)
'use client';
import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen px-6 py-10 bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About BitLinks</h1>
        <p className="text-lg mb-4">
          <strong>BitLinks</strong> is a simple and fast URL shortener designed to turn long and complex web addresses into short, easy to remember links.
        </p>
        <p className="text-lg mb-4">
          Whether you are sharing links on social media, tracking click performance, or just want a cleaner way to share URLs — BitLinks helps you do it quickly and securely.
        </p>
        <p className="text-lg mb-4">
          Built using <span className="font-semibold">Next.js</span>, <span className="font-semibold">MongoDB</span>, and deployed with <span className="font-semibold">Vercel</span>, this app ensures performance, reliability, and scalability.
        </p>
        <p className="text-lg">
          BitLinks was built by <span className="font-semibold">Mani</span> as a modern and minimal tool to make web navigation simpler and smoother.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
