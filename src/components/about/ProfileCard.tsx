interface ProfileCardProps {
  name: string;
  title: string;
  profileImage: string;
  email: string;
  github: string;
  linkedin: string;
}

export default function ProfileCard({
  name,
  title,
  profileImage,
  email,
  github,
  linkedin,
}: ProfileCardProps) {
  return (
    <div className="p-6">
      <div className="mb-6 text-center">
        <div className="mx-auto mb-4 h-40 w-40">
          <img
            src={profileImage}
            alt={`${name} 프로필 이미지`}
            className="h-full w-full rounded-full"
          />
        </div>
        <h2 className="font-pretendard text-2xl font-bold">{name}</h2>
        <p className="text-gray-3">{title}</p>
      </div>

      <div className="mb-4">
        <h3 className="font-pretendard mb-2 text-lg font-semibold">연락처</h3>
        <ul className="text-gray-3 space-y-2">
          <li>
            <span className="font-medium">이메일:</span> {email}
          </li>
          <li>
            <span className="font-medium">GitHub:</span>
            <a
              href={`https://github.com/${github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-1 hover:underline"
            >
              github.com/{github}
            </a>
          </li>
          <li>
            <span className="font-medium">LinkedIn:</span>
            <a
              href={`https://linkedin.com/in/${linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-1 hover:underline"
            >
              linkedin.com/in/{linkedin}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
