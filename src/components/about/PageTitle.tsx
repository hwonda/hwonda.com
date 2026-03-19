import { Download } from 'lucide-react';

interface PageTitleProps {
  name: string;
  suffix?: string;
  role?: 'fe' | 'tpm';
}

export default function PageTitle({
  name,
  suffix = '에 대하여',
  role = 'fe',
}: PageTitleProps) {
  const fileSuffix = role === 'fe' ? '' : '(pm)';

  return (
    <div className="flex justify-between">
      <h1 className="font-pretendard relative mb-0 text-4xl font-bold sm:mb-12 md:text-5xl">
        <span className="from-accent-3 to-accent-1 bg-gradient-to-b bg-clip-text text-transparent">
          {name}
        </span>
        {suffix}
        <div className="from-accent-1 to-accent-3 absolute bottom-[-16px] left-0 h-[12px] w-[102px] rounded-full bg-gradient-to-b opacity-30 md:w-[132px]"></div>
      </h1>
      <div className="flex items-center gap-4">
        <a
          href={`/resume_dahwon_ju${fileSuffix}.pdf`}
          download
          className="text-main hover:text-accent-1 flex items-center gap-1 pb-6 font-medium transition-colors duration-300"
        >
          <Download className="h-4 w-4" />
          이력서
        </a>
        <a
          href={`/career_description_dahwon_ju${fileSuffix}.pdf`}
          download
          className="text-main hover:text-accent-1 flex items-center gap-1 pb-6 font-medium transition-colors duration-300"
        >
          <Download className="h-4 w-4" />
          경력 기술서
        </a>
      </div>
    </div>
  );
}
