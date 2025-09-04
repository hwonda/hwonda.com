import React from 'react';

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description?: string;
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export default function ExperienceSection({ experiences }: ExperienceProps) {
  return (
    <div className="group border-gray9 hover:bg-gray9 rounded-lg border p-4 transition-all duration-500 sm:p-6">
      <h2 className="text-gray3 group-hover:text-main mb-4 font-bold transition-all duration-500">
        경력
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border-gray8 border-b pb-6 last:border-0 last:pb-0"
          >
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-main text-xl font-semibold">{exp.title}</h3>
              <span className="text-gray2 text-sm">{exp.period}</span>
            </div>
            <p className="text-accent-2 mb-2 font-medium">{exp.company}</p>
            <p className="text-gray1">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
