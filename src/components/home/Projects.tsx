import { useEffect, useRef } from 'react';

import { projectsData as feProjectsData } from '@/constants/fe/projectsData';
import { projectsData as tpmProjectsData } from '@/constants/tpm/projectsData';

interface ProjectsProps {
  basePath: '/fe' | '/tpm';
  role: 'fe' | 'tpm';
}

export default function Projects({ basePath, role }: ProjectsProps) {
  const projectRefs = useRef<(HTMLAnchorElement | null)[][]>([]);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const projectsData = role === 'fe' ? feProjectsData : tpmProjectsData;

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerTitles = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.classList.add('animate-intro');
          observerTitles.unobserve(target);
        }
      });
    }, options);

    const observerProjects = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const projectIndex = parseInt(target.dataset.index || '0');
          const delay = projectIndex * 100;
          target.style.animationDelay = `${delay}ms`;
          target.classList.add('animate-intro');
          observerProjects.unobserve(target);
        }
      });
    }, options);

    // 모든 제목 요소에 대해 observer 설정
    titleRefs.current.forEach((title) => {
      if (title) observerTitles.observe(title);
    });

    // 모든 프로젝트 요소에 대해 observer 설정
    projectRefs.current.forEach((yearProjects) => {
      yearProjects.forEach((project) => {
        if (project) observerProjects.observe(project);
      });
    });

    return () => {
      observerTitles.disconnect();
      observerProjects.disconnect();
    };
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-paperlogy mb-12 text-3xl font-bold md:text-4xl">
          Projects
        </h2>
        <div className="grid grid-cols-1 gap-10 space-y-16">
          {projectsData.map((yearData, yearIndex) => {
            // 각 연도별 프로젝트 배열 초기화
            projectRefs.current[yearIndex] =
              projectRefs.current[yearIndex] || [];

            return (
              <div key={yearData.year} className="flex flex-col space-y-6">
                <h3
                  ref={(el) => {
                    titleRefs.current[yearIndex] = el;
                  }}
                  className="font-paperlogy text-2xl font-bold opacity-0"
                >
                  {yearData.year} ({yearData.projects.length})
                </h3>
                <div className="grid grid-cols-1 space-y-4 space-x-1.5 sm:grid-cols-2 sm:space-y-6 md:space-y-8 lg:space-y-10">
                  {yearData.projects.map((project, projectIndex) => {
                    return (
                      <a
                        ref={(el) => {
                          projectRefs.current[yearIndex][projectIndex] = el;
                        }}
                        href={`${basePath}/projects/${project.id}`}
                        key={project.id}
                        data-index={projectIndex}
                        className="group border-background hover:border-accent-2 relative flex aspect-video flex-col gap-1 rounded-lg border p-1 opacity-0 shadow-sm transition-all duration-300 hover:cursor-pointer hover:shadow-md"
                      >
                        {project.inProgress ? (
                          <>
                            <div className="bg-accent-1 absolute top-0 right-0 z-10 flex items-center justify-center rounded-lg px-2 py-1 font-bold opacity-100 transition-all duration-300 group-hover:opacity-0">
                              In Progress
                            </div>
                            <div className="text-main absolute top-0 left-0 z-10 flex size-full items-center justify-center rounded-lg bg-black/50 px-2 py-1 font-bold opacity-0 transition-all duration-300 group-hover:opacity-100">
                              진행 중인 프로젝트
                            </div>
                          </>
                        ) : null}
                        <img
                          src={project.images.thumbnail.url}
                          alt={project.title}
                          className="h-full w-full rounded-lg object-cover opacity-85 transition-all duration-300 group-hover:p-1 group-hover:opacity-100"
                        />
                        <div className="flex flex-col gap-1 p-1">
                          <h4 className="font-pretendard text-gray1 group-hover:text-accent-1 text-base font-bold lg:text-lg">
                            {project.title}
                          </h4>
                          <div className="text-gray1 group-hover:text-main text-sm">
                            {project.subtitle}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
