import React, { useState, useEffect } from 'react';
import { X, ChevronUp, ChevronDown } from 'lucide-react';

interface ProfileData {
  companyName: string;
  matchScore: number;
  accountStatus: 'Target' | 'Not Target';
}

const sampleData: ProfileData = {
  companyName: "TechCorp",
  matchScore: 86,
  accountStatus: "Target"
};

export const LinkedInWidget: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [data] = useState<ProfileData>(sampleData);

  useEffect(() => {
    // Simulate chrome.storage.sync.get
    const savedVisibility = localStorage.getItem('widgetVisibility');
    if (savedVisibility !== null) {
      setIsVisible(JSON.parse(savedVisibility));
    }
  }, []);

  const toggleVisibility = () => {
    const newVisibility = !isVisible;
    setIsVisible(newVisibility);
    // Simulate chrome.storage.sync.set
    localStorage.setItem('widgetVisibility', JSON.stringify(newVisibility));
  };

  if (!isVisible) {
    return (
      <button
        onClick={toggleVisibility}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      >
        Show Widget
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-[300px] bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-[#0a66c2] p-3 flex justify-between items-center">
        <h3 className="text-white font-semibold">Profile Enhancer</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-white hover:bg-blue-700 p-1 rounded"
          >
            {isMinimized ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          <button
            onClick={toggleVisibility}
            className="text-white hover:bg-blue-700 p-1 rounded"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Content */}
      {!isMinimized && (
        <div className="p-4 space-y-4">
          {/* Company Name */}
          <div>
            <label className="text-sm text-gray-600">Company</label>
            <p className="font-bold text-gray-900">{data.companyName}</p>
          </div>

          {/* Match Score */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-sm text-gray-600">Match Score</label>
              <span className="text-sm font-medium">{data.matchScore}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${data.matchScore}%` }}
              ></div>
            </div>
          </div>

          {/* Account Status */}
          <div>
            <label className="text-sm text-gray-600">Account Status</label>
            <div className={`mt-1 inline-block px-2 py-1 rounded-full text-sm font-medium ${
              data.accountStatus === 'Target'
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}>
              {data.accountStatus}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};