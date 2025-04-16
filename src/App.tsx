import React from 'react';
import { LinkedInWidget } from './components/LinkedInWidget';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Simulated LinkedIn Profile Page */}
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">John Doe</h1>
          <p className="text-gray-600">Software Engineer at TechCorp</p>
          <p className="mt-4 text-gray-700">
            Experienced Software Engineer with a demonstrated history of working in the computer software industry.
            Skilled in React, TypeScript, and Cloud Technologies.
          </p>
        </div>

        {/* More profile sections would go here */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Experience</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900">Senior Software Engineer</h3>
              <p className="text-gray-600">TechCorp · Full-time</p>
              <p className="text-gray-600">Jan 2020 - Present · 4 yrs</p>
            </div>
          </div>
        </div>
      </div>

      {/* LinkedIn Profile Enhancer Widget */}
      <LinkedInWidget />
    </div>
  );
}

export default App;