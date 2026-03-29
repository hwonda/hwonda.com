interface TitleProps {
  isLoaded: boolean;
  role: 'fe' | 'pm';
}

const titleText = {
  fe: {
    full: 'Front-End Developer',
    short: 'FE DEV',
  },
  pm: {
    full: 'Technical Project Manager',
    short: 'TPM',
  },
};

export default function Title({ isLoaded, role }: TitleProps) {
  return (
    <h1
      className={`mb-6 leading-tight font-bold ${isLoaded ? 'animate-intro delay-300' : 'opacity-0'}`}
    >
      <span className="bg-gradient-to-r from-[var(--color-accent-1)] via-[var(--color-accent-2)] to-[var(--color-accent-4)] bg-clip-text text-6xl text-transparent md:text-8xl">
        <span>{titleText[role].short}</span>
        <span className="hidden text-base md:inline">
          {titleText[role].full}
        </span>
      </span>
    </h1>
  );
}
