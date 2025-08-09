import React from 'react';

interface SkillGroup {
  category: string;
  items: string[];
}

interface ProfileCardProps {
  name: string;
  title: string;
  profileImage: string;
  email: string;
  github: string;
  linkedin: string;
  skills: SkillGroup[];
}

export default function ProfileCard({
  name,
  title,
  profileImage,
  email,
  github,
  linkedin,
  skills,
}: ProfileCardProps) {
  return (
    <div className="bg-gray9 overflow-hidden rounded-lg p-6">
      <div className="mb-6 text-center">
        <div className="bg-gray9 mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full">
          <img
            src={profileImage}
            alt={`${name} 프로필 이미지`}
            className="h-full w-full object-cover"
          />
        </div>
        <h2 className="font-pretendard text-2xl font-bold">{name}</h2>
        <p className="text-gray-3">{title}</p>
      </div>

      <div className="mb-4">
        <h3 className="font-pretendard mb-2 text-lg font-semibold">연락처</h3>
        <ul className="text-gray-3 space-y-2">
          <li>
            <span className="font-medium">이메일:</span> {email}
          </li>
          <li>
            <span className="font-medium">GitHub:</span>
            <a
              href={`https://github.com/${github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-1 hover:underline"
            >
              github.com/{github}
            </a>
          </li>
          <li>
            <span className="font-medium">LinkedIn:</span>
            <a
              href={`https://linkedin.com/in/${linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-1 hover:underline"
            >
              linkedin.com/in/{linkedin}
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="font-pretendard mb-2 text-lg font-semibold">
          기술 스택
        </h3>
        {skills.map((skillGroup, index) => (
          <div className="mb-4" key={index}>
            <h4 className="text-gray-2 mb-1 text-sm font-medium">
              {skillGroup.category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, idx) => (
                <span
                  className="text-gray-1 border-accent-2 relative rounded-full border px-3 py-1 text-sm"
                  key={idx}
                >
                  <span className="from-accent-2 to-accent-4 absolute inset-0 rounded-full bg-gradient-to-r opacity-20" />
                  <span className="bg-gray-8 absolute inset-[1px] rounded-full" />
                  <span className="text-gray-1 relative z-10">{skill}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
