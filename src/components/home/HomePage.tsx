import React from 'react';

import Header from '../ui/Header';
import About from './About';
import Hero from './Hero';
import Projects from './Projects';

export default function HomePage() {
  return (
    <>
      <div className="fixed top-4 z-50 w-full px-4 sm:top-8 sm:px-8 md:px-40">
        <Header />
      </div>
      <div className="flex flex-col gap-10">
        <Hero />
        <Projects />
        <About />
      </div>
    </>
  );
}
