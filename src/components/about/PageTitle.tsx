import React from 'react';

interface PageTitleProps {
  name: string;
  suffix?: string;
}

export default function PageTitle({
  name,
  suffix = '에 대하여',
}: PageTitleProps) {
  return (
    <h1 className="font-pretendard relative mb-0 text-4xl font-bold sm:mb-12 md:text-5xl">
      <span className="from-accent-3 to-accent-1 bg-gradient-to-b bg-clip-text text-transparent">
        {name}
      </span>
      {suffix}
      <div className="from-accent-1 to-accent-3 absolute bottom-[-16px] left-0 h-[12px] w-[102px] rounded-full bg-gradient-to-b opacity-30 md:w-[132px]"></div>
    </h1>
  );
}
