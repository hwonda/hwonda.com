import { type Project } from '@/types/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={`/projects/${project.id}`}
      className="group flex flex-col gap-1 overflow-hidden opacity-100 sm:opacity-80 sm:hover:opacity-100"
    >
      {project.inProgress ? (
        <>
          <div className="bg-accent-1 absolute top-0 right-0 z-10 flex items-center justify-center px-2 py-1 text-sm opacity-100 transition-all duration-300 group-hover:opacity-0">
            In Progress
          </div>
          <div className="text-main bg-background group-hover:border-accent-1 absolute top-0 left-0 z-10 flex size-full items-center justify-center px-2 py-1 font-bold opacity-0 group-hover:border group-hover:opacity-80">
            진행 중인 프로젝트
          </div>
        </>
      ) : null}
      {/* 썸네일 이미지 */}
      <div className="relative overflow-hidden">
        <img
          src={project.images.thumbnail}
          alt={project.title}
          className="aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* 프로젝트 정보 */}
      <div className="flex flex-1 flex-col justify-between p-1">
        <h3 className="font-pretendard text-accent-1 md:text-gray1 group-hover:text-accent-1 text-base font-bold transition-colors duration-300 lg:text-lg">
          {project.title}
        </h3>
        <div className="text-main md:text-gray2 group-hover:text-main text-sm transition-colors duration-300">
          {project.subtitle}
        </div>
      </div>
    </a>
  );
}
