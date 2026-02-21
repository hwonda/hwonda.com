import '@/styles/animation.css';

import { useEffect, useState } from 'react';

import {
  ActionButtons,
  BackgroundImage,
  Description,
  Title,
} from './heroSection';

const LAST_MODIFIED = '25/09/11';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <BackgroundImage isLoaded={isLoaded} />

      <div className="relative z-10 container flex size-full items-end justify-center px-4 pb-24 sm:px-8 sm:pb-48">
        <div className="flex flex-col">
          <Title isLoaded={isLoaded} />
          <Description isLoaded={isLoaded} />
          <ActionButtons isLoaded={isLoaded} />
        </div>
      </div>

      <p className="absolute right-4 bottom-4 text-sm">
        <span className="text-gray6 text-xs">Last Modified</span>
        <span className="text-gray3 ml-2 font-bold">{LAST_MODIFIED}</span>
      </p>
    </section>
  );
}
