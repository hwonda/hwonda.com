import React from 'react';

interface AboutMeProps {
  paragraphs: string[];
}

export default function AboutMeSection({ paragraphs }: AboutMeProps) {
  return (
    <div className="bg-gray9 rounded-lg p-4 sm:p-6">
      <h2 className="text-gray3 mb-4 font-bold">자기소개</h2>
      <div className="space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-main">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
