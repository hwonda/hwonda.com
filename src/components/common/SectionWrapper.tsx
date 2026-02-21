interface SectionWrapperProps {
  title: string;
  children: React.ReactNode;
  variant?: 'filled' | 'outlined';
}

export default function SectionWrapper({
  title,
  children,
  variant = 'outlined',
}: SectionWrapperProps) {
  const baseClasses = 'group rounded-lg p-4 sm:p-6';
  const variantClasses =
    variant === 'filled'
      ? 'bg-gray9 hover:outline hover:outline-gray7'
      : 'border-gray9 hover:bg-gray9 border';

  return (
    <div className={`${baseClasses} ${variantClasses}`}>
      <h2 className="text-gray3 group-hover:text-main mb-4 font-bold transition-all duration-500">
        {title}
      </h2>
      {children}
    </div>
  );
}
