import React from 'react';

interface AboutMeProps {
  paragraphs: string[];
}

export default function AboutMe({ paragraphs }: AboutMeProps) {
  return (
    <div className="bg-gray9 mb-8 rounded-lg p-6">
      <h2 className="font-pretendard mb-6 text-2xl font-bold">자기소개</h2>
      <div className="text-gray-1 space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
