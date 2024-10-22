// pages/projects.jsx
import React from 'react';
import Link from 'next/link';

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Projects</h1>
        <ul className="space-y-4">
          <li>
            <a href="/projects#project1" className="text-blue-500 hover:underline text-xl">
              ADS Chat - Chatbot for Astronomy Research
            </a>
          </li>
          <li>
            <a href="/projects#project2" className="text-blue-500 hover:underline text-xl">
              AI-Powered Chrome Extension for Calmer Browsing
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

export default Projects;
