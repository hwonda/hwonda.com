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
              <div className="grid grid-cols-2 gap-1.5">
                {yearData.projects.map((project) => (
                  <a
                    href={`/projects/${project.id}`}
                    key={project.id}
                    className="group bg-gray-9 border-gray9 relative aspect-video overflow-hidden rounded-lg border shadow-sm transition-all hover:cursor-pointer hover:shadow-md"
                  >
                    <img
                      src={project.images.thumbnail}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="bg-opacity-50 absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                      <h4 className="font-pretendard px-4 text-center text-lg font-bold text-white">
                        {project.title}
                      </h4>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
