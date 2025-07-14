import { projectsData } from '../../constants/projectsData';

export default function Projects() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-paperlogy mb-12 text-3xl font-bold md:text-4xl">
          기여한 프로젝트
        </h2>
        <div className="grid grid-cols-1 gap-10 space-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((yearData) => (
            <div key={yearData.year} className="flex flex-col space-y-6">
              <h3 className="font-paperlogy text-2xl font-bold">
                {yearData.year}년
              </h3>
              <div className="grid grid-cols-3">
                {yearData.projects.map((project) => (
                  <a
                    href={`/projects/${project.projectId}`}
                    key={project.id}
                    className="group bg-gray-9 relative aspect-square overflow-hidden rounded-lg shadow-sm transition-all hover:cursor-pointer hover:shadow-md"
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="bg-opacity-50 absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                      <h4 className="font-pretendard px-4 text-center text-lg font-bold text-white">
                        {project.title}
                      </h4>
                    </div>
                    {/* <h3 className="font-pretendard bg-gray-9 absolute right-0 bottom-0 left-0 p-4 text-center text-lg font-bold">
                      {project.subtitle}
                    </h3> */}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 프로젝트 미리보기 섹션 */}
        {/* <div className="mt-24">
          <h2 className="font-pretendard mb-12 text-center text-3xl font-bold md:text-4xl">
            주요 프로젝트
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="border-gray-8 bg-gray-8 overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-md"
              >
                <div className="bg-gray-9 aspect-video w-full">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-pretendard mb-2 text-xl font-bold">
                    {project.title}
                  </h3>
                  <p className="text-gray-3 mb-4">{project.description}</p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-9 text-gray-1 rounded-full px-3 py-1 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`/projects/${project.projectId}`}
                    className="bg-accent-1 hover:bg-accent-1/90 inline-block rounded px-6 py-2 font-medium text-white transition-colors"
                  >
                    상세 보기
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
