import React from 'react';

interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  description: string;
}

interface EducationProps {
  education: EducationItem[];
}

export default function Education({ education }: EducationProps) {
  return (
    <div className="bg-gray9 rounded-lg p-6">
      <h2 className="font-pretendard mb-6 text-2xl font-bold">교육</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index}>
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-pretendard text-xl font-semibold">
                {edu.degree}
              </h3>
              <span className="text-gray-3 text-sm">{edu.period}</span>
            </div>
            <p className="text-accent-2 mb-2 font-medium">{edu.institution}</p>
            <p className="text-gray-2">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
