import React from 'react';

interface AboutMeProps {
  paragraphs: string[];
}

export default function AboutMeSection({ paragraphs }: AboutMeProps) {
  return (
    <div className="group bg-gray9 hover:outline-gray7 rounded-lg p-4 hover:outline sm:p-6">
      <h2 className="text-gray3 group-hover:text-main mb-4 font-bold transition-all duration-500">
        자기소개
      </h2>
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
