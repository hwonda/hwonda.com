import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: '프로젝트 1',
    description: '첫 번째 프로젝트에 대한 간략한 설명입니다.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    imageUrl: '/placeholder.jpg',
  },
  {
    id: 2,
    title: '프로젝트 2',
    description: '두 번째 프로젝트에 대한 간략한 설명입니다.',
    tags: ['Astro', 'React', 'Tailwind CSS'],
    imageUrl: '/placeholder.jpg',
  },
  {
    id: 3,
    title: '프로젝트 3',
    description: '세 번째 프로젝트에 대한 간략한 설명입니다.',
    tags: ['Next.js', 'TypeScript', 'Styled Components'],
    imageUrl: '/placeholder.jpg',
  },
];

export default function Projects() {
  return (
    <section className="h-screen">
      <div className="container mx-auto px-4">
        <h2 className="font-pretendard mb-12 text-center text-3xl font-bold md:text-4xl">
          프로젝트
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="border-gray-8 bg-gray8 overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md"
            >
              <div className="bg-gray-9 aspect-video w-full">
                {/* <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="h-full w-full object-cover"
                /> */}
              </div>
              <div className="p-6">
                <h3 className="font-pretendard mb-2 text-xl font-bold">
                  {project.title}
                </h3>
                <p className="text-gray-3 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-9 text-gray-1 rounded-full px-3 py-1 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
