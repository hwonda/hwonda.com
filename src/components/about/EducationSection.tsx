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

export default function EducationSection({ education }: EducationProps) {
  return (
    <div className="border-gray9 hover:bg-gray9 rounded-lg border p-4 transition-all duration-500 sm:p-6">
      <h2 className="text-gray3 mb-4 font-bold">교육</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index}>
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-main text-xl font-semibold">{edu.degree}</h3>
              <span className="text-gray2 text-sm">{edu.period}</span>
            </div>
            <p className="text-accent-2 mb-2 font-medium">{edu.institution}</p>
            <p className="text-gray1">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
