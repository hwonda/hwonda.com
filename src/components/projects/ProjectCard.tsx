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
      {/* 썸네일 이미지 */}
      <div className="relative overflow-hidden">
        <img
          src={project.images.thumbnail}
          alt={project.title}
          className="aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* 그라데이션 오버레이 */}
        <div className="from-gray-9/80 absolute inset-0 bg-gradient-to-t to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-40" />
      </div>

      {/* 프로젝트 정보 */}
      <div className="flex flex-1 flex-col justify-between p-3">
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
