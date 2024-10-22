// pages/blog.jsx
import React from 'react';
import Link from 'next/link';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <ul className="space-y-4">
          <li>
            <a href="/blog#blog1" className="text-blue-500 hover:underline text-xl">
              Blog Post 1: Exploring Machine Learning in Real-World Applications
            </a>
          </li>
          <li>
            <a href="/blog#blog2" className="text-blue-500 hover:underline text-xl">
              Blog Post 2: Using AI for Better Web Experiences
            </a>
          </li>
        </ul>
        <div className="mt-8">
          <Link href="/">
            <a className="text-blue-500 hover:underline">← Back to Home</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
