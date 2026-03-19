import type { AboutPageProps } from '@/types/about';

import {
  AboutMeSection,
  EducationSection,
  ExperienceSection,
  PageTitle,
  ProfileCard,
  TechStackSection,
} from './index';

export default function About({
  name,
  title,
  profileImage,
  email,
  github,
  linkedin,
  techStacks,
  aboutParagraphs,
  experiences,
  education,
  role,
}: AboutPageProps) {
  return (
    <div className="mx-auto mt-24 max-w-[1000px] px-4 sm:top-8 md:mt-44 md:px-10 2xl:max-w-[1200px]">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="animate-intro relative sm:mt-32 md:col-span-1">
          <div className="sticky top-32">
            <ProfileCard
              name={name}
              title={title}
              profileImage={profileImage}
              email={email}
              github={github}
              linkedin={linkedin}
            />
          </div>
        </div>

        <div className="animate-intro-next flex flex-col gap-8 md:col-span-2">
          <PageTitle name={name} role={role} />
          <AboutMeSection paragraphs={aboutParagraphs} />
          <ExperienceSection experiences={experiences} />
          <EducationSection education={education} />
          <TechStackSection techStacks={techStacks} />
        </div>
      </div>
    </div>
  );
}
