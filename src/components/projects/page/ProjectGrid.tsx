import type { YearProjects } from '@/types/projects';

import ProjectCard from '../ProjectCard';

interface ProjectGridProps {
  filteredProjects: YearProjects[];
  activeYear: string;
  isAnimating: boolean;
  basePath?: string;
}

export default function ProjectGrid({
  filteredProjects,
  activeYear,
  isAnimating,
  basePath = '',
}: ProjectGridProps) {
  const getAnimationStyle = (index: number) => ({
    transitionDelay: `${index * (activeYear === 'all' ? 50 : 100)}ms`,
    opacity: isAnimating ? 0 : 1,
    transform: isAnimating ? 'translateY(20px)' : 'translateY(0)',
  });

  if (activeYear === 'all') {
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProjects.flatMap((yearData) =>
          yearData.projects.map((project, index) => (
            <div
              key={project.id}
              className="transition-all duration-500"
              style={getAnimationStyle(index)}
            >
              <ProjectCard project={project} basePath={basePath} />
            </div>
          )),
        )}
      </div>
    );
  }

  return (
    <>
      {filteredProjects.map((yearData) => (
        <div key={yearData.year} className="transition-all duration-500">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {yearData.projects.map((project, index) => (
              <div
                key={project.id}
                className="transition-all duration-500"
                style={getAnimationStyle(index)}
              >
                <ProjectCard project={project} basePath={basePath} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
