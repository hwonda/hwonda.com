import { useState } from 'react';

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
  const [isCopied, setIsCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="text-center">
        <div className="mx-auto mb-4 h-40 w-40">
          <img
            src={profileImage}
            alt={`${name} 프로필 이미지`}
            className="h-full w-full rounded-full"
          />
        </div>
        <h2 className="font-paperlogy text-2xl font-bold">{name}</h2>
        <p className="font-paperlogy text-sub">{title}</p>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-sub transition-opacity duration-300">
          +82) 010-6518-8253
        </span>
        <button
          type="button"
          onClick={copyEmail}
          className={`text-accent-2 ml-2 underline-offset-4 transition-all duration-300 hover:underline hover:opacity-100 sm:opacity-60 ${isCopied ? 'text-accent-1 outline-accent-1/60 rounded-sm px-3 opacity-100 outline' : ''}`}
        >
          {isCopied ? 'Copied!' : email}
        </button>
        <div className="mt-1.5 flex items-center gap-1">
          <a
            href={`https://github.com/${github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:outline-accent-2 rounded-full p-2 hover:outline"
          >
            <img
              src="/images/github-white.webp"
              alt="GitHub"
              className="h-6 w-6"
            />
          </a>
          <a
            href={`https://linkedin.com/in/${linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:outline-accent-3 relative rounded-sm p-2 hover:outline"
          >
            <img
              src="/images/linkedin-white.webp"
              alt="LinkedIn"
              className="h-6 w-6"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
