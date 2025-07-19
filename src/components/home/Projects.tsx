import { useEffect, useRef } from 'react';

import { projectsData } from '@/constants/projectsData';

export default function Projects() {
  const projectRefs = useRef<(HTMLAnchorElement | null)[][]>([]);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-10% 0px',
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
          const delay = parseInt(target.dataset.index || '0') * 100 + 300; // 제목 이후에 시작하도록 300ms 추가
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
          프로젝트
        </h2>
        <div className="grid grid-cols-1 gap-10 space-y-16 sm:grid-cols-2">
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
                <div className="grid grid-cols-2 gap-1.5">
                  {yearData.projects.map((project, projectIndex) => {
                    const globalIndex =
                      yearData.projects.length * yearIndex + projectIndex;

                    return (
                      <a
                        ref={(el) => {
                          projectRefs.current[yearIndex][projectIndex] = el;
                        }}
                        href={`/projects/${project.id}`}
                        key={project.id}
                        data-index={globalIndex}
                        className="group bg-gray-9 border-gray8 relative aspect-video rounded-lg border opacity-0 shadow-sm transition-all hover:cursor-pointer hover:shadow-md"
                      >
                        <img
                          src={project.images.thumbnail}
                          alt={project.title}
                          className="h-full w-full rounded-lg object-cover"
                        />
                        <div className="bg-opacity-50 absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                          <h4 className="font-pretendard px-4 text-center text-lg font-bold text-white">
                            {project.title}
                          </h4>
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
