import React from 'react';

import AboutMe from './AboutMe';
import Education from './Education';
import Experience from './Experience';
import PageTitle from './PageTitle';
import ProfileCard from './ProfileCard';

// 타입 정의
export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string;
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  description: string;
}

interface AboutProps {
  name: string;
  title: string;
  profileImage: string;
  email: string;
  github: string;
  linkedin: string;
  skills: SkillGroup[];
  aboutParagraphs: string[];
  experiences: ExperienceItem[];
  education: EducationItem[];
}

export default function About({
  name,
  title,
  profileImage,
  email,
  github,
  linkedin,
  skills,
  aboutParagraphs,
  experiences,
  education,
}: AboutProps) {
  return (
    <div className="mx-auto mt-24 px-4 sm:top-8 sm:px-8 md:mt-44 md:px-10 lg:px-20 xl:px-40">
      <PageTitle name={name} />

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <ProfileCard
            name={name}
            title={title}
            profileImage={profileImage}
            email={email}
            github={github}
            linkedin={linkedin}
            skills={skills}
          />
        </div>

        <div className="md:col-span-2">
          <AboutMe paragraphs={aboutParagraphs} />
          <Experience experiences={experiences} />
          <Education education={education} />
        </div>
      </div>
    </div>
  );
}
