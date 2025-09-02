import type { techStack } from './AboutPage';

interface TechStackProps {
  techStacks: techStack[];
}

export default function TechStackSection({ techStacks }: TechStackProps) {
  return (
    <div className="border-gray9 rounded-lg border p-4 sm:p-6">
      <h3 className="mb-6 text-2xl font-semibold">기술 스택</h3>
      {techStacks.map((skillGroup, index) => (
        <div className="mb-6" key={index}>
          <h4 className="text-accent-2 mb-2 font-medium">
            {skillGroup.category}
          </h4>
          <div className="flex flex-wrap gap-2">
            {skillGroup.skills.map((skill, idx) => (
              <div
                key={idx}
                className="group text-gray4 hover:text-sub grid grid-cols-[126px_1fr] gap-2 transition-all duration-300"
              >
                <span className="border-gray7 group-hover:border-accent-2 relative h-7 rounded-full border px-3 py-0.5 text-center text-sm">
                  <span className="from-accent-2 to-accent-4 absolute inset-0 rounded-full bg-gradient-to-r opacity-0 group-hover:opacity-20" />
                  <span className="bg-gray-8 absolute inset-[1px] rounded-full opacity-0 group-hover:opacity-30" />
                  <span className="text-sub group-hover:text-main relative z-10">
                    {skill.name}
                  </span>
                </span>
                <span className="mt-[3px] text-sm">{skill.description}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
