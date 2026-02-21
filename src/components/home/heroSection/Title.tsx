interface TitleProps {
  isLoaded: boolean;
}

export default function Title({ isLoaded }: TitleProps) {
  return (
    <h1
      className={`mb-6 leading-tight font-bold ${isLoaded ? 'animate-intro delay-300' : 'opacity-0'}`}
    >
      <span className="bg-gradient-to-r from-[var(--color-accent-1)] via-[var(--color-accent-2)] to-[var(--color-accent-4)] bg-clip-text text-6xl text-transparent md:text-8xl">
        HOT DEV
      </span>
    </h1>
  );
}
