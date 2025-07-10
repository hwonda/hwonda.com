import Header from '../ui/Header';
import About from './About';
import Hero from './Hero';
import Projects from './Projects';

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="fixed top-4 z-50 w-full px-4 sm:top-8 sm:px-8 md:px-10 lg:px-20 xl:px-40">
        <Header />
      </div>
      <div className="flex w-screen flex-col px-4 sm:px-8 md:px-10 lg:px-20 xl:px-40">
        <Projects />
        <About />
      </div>
    </>
  );
}
