interface SkillGroup {
  category: string;
  items: string[];
}

interface TechStackProps {
  skills: SkillGroup[];
}

export default function TechStackSection({ skills }: TechStackProps) {
  return (
    <div>
      <h3 className="font-pretendard mb-2 text-lg font-semibold">기술 스택</h3>
      {skills.map((skillGroup, index) => (
        <div className="mb-4" key={index}>
          <h4 className="text-gray-2 mb-1 text-sm font-medium">
            {skillGroup.category}
          </h4>
          <div className="flex flex-wrap gap-2">
            {skillGroup.items.map((skill, idx) => (
              <span
                className="text-gray-1 border-accent-2 relative rounded-full border px-3 py-1 text-sm"
                key={idx}
              >
                <span className="from-accent-2 to-accent-4 absolute inset-0 rounded-full bg-gradient-to-r opacity-20" />
                <span className="bg-gray-8 absolute inset-[1px] rounded-full" />
                <span className="text-gray-1 relative z-10">{skill}</span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
