// pages/index.jsx
// pages/index.jsx
import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-900 p-4">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-8">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-800">Welcome to My Portfolio</h1>
          <p className="text-lg text-gray-700">
            Hi, I'm Maleeha Imran, a Master's student in Computer Science specializing in Machine Learning at Georgia Institute of Technology. 
            I have experience in software engineering, machine learning, and informatics research, and have contributed to projects involving OpenAI API, 
            prompt engineering, and building scalable backend systems.
          </p>
        </header>
        
        <nav className="text-center mb-8">
          <ul className="flex justify-center space-x-6">
            <li><Link href="/resume"><a className="text-blue-600 hover:text-blue-800 font-medium">Resume</a></Link></li>
            <li><Link href="/about"><a className="text-blue-600 hover:text-blue-800 font-medium">About</a></Link></li>
            <li><Link href="/projects"><a className="text-blue-600 hover:text-blue-800 font-medium">Projects</a></Link></li>
            <li><Link href="/blog"><a className="text-blue-600 hover:text-blue-800 font-medium">Blog</a></Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Home;

// import React from 'react';
// import Link from 'next/link';

// const Home = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
//       <header className="text-center mb-8">
//         <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
//         <p className="text-lg">
//           Hi, I'm Maleeha Imran, a Master's student in Computer Science specializing in Machine Learning at Georgia Institute of Technology. 
//           I have experience in software engineering, machine learning, and informatics research, and have contributed to projects involving OpenAI API, 
//           prompt engineering, and building scalable backend systems.
//         </p>
//       </header>
      
//       <nav className="mb-8">
//         <ul className="flex space-x-4">
//           <li><Link href="/resume"><a className="text-blue-500 hover:underline">Resume</a></Link></li>
//           <li><Link href="/about"><a className="text-blue-500 hover:underline">About</a></Link></li>
//           <li><Link href="/projects"><a className="text-blue-500 hover:underline">Projects</a></Link></li>
//           <li><Link href="/blog"><a className="text-blue-500 hover:underline">Blog</a></Link></li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Home;
