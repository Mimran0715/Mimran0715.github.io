// pages/about.jsx
import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-4">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-lg max-w-2xl text-center">
        I'm currently pursuing a Master's in Computer Science at Georgia Tech with a focus on Machine Learning. 
        My work includes developing applications with Python, Node.js, and Express.js, as well as collaborating on research in AI-driven systems.
      </p>
      <div className="mt-8">
        <Link href="/">
          <a className="text-blue-500 hover:underline">← Back to Home</a>
        </Link>
      </div>
    </div>
  );
};

export default About;
