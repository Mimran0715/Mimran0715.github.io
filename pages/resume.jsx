// pages/resume.jsx
import React from 'react';
import Link from 'next/link';

const Resume = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-4">
      <h1 className="text-3xl font-bold mb-4">Resume</h1>
      <p className="text-lg">
        You can view my full resume{' '}
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          here
        </a>.
      </p>
      <div className="mt-8">
        <Link href="/">
          <a className="text-blue-500 hover:underline">← Back to Home</a>
        </Link>
      </div>
    </div>
  );
};

export default Resume;
