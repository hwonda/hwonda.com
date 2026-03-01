interface ActionButton {
  href: string;
  label: string;
  variant: 'primary' | 'secondary';
  download?: boolean;
}

interface ActionButtonsProps {
  isLoaded: boolean;
  role: 'fe' | 'tpm';
}

export default function ActionButtons({ isLoaded, role }: ActionButtonsProps) {
  const actionButtons: ActionButton[] = [
    {
      href: `/${role}/projects`,
      label: '프로젝트 보기',
      variant: 'primary',
    },
    {
      href: '/resume_dahwon_ju.pdf',
      label: '이력서 다운로드',
      variant: 'secondary',
      download: true,
    },
  ];

  const variantClasses = {
    primary:
      'bg-foreground hover:bg-foreground/80 text-inverse rounded-lg px-6 pt-3.5 pb-2.5 font-bold transition-colors',
    secondary:
      'border-gray3 text-main hover:bg-gray9 rounded-lg border px-6 py-3 font-medium transition-colors',
  };

  return (
    <div
      className={`flex flex-wrap justify-center gap-4 sm:justify-start ${isLoaded ? 'animate-intro delay-900' : 'opacity-0'}`}
    >
      {actionButtons.map((button) => (
        <a
          key={button.href}
          href={button.href}
          className={variantClasses[button.variant]}
          {...(button.download && { download: true })}
        >
          {button.label}
        </a>
      ))}
    </div>
  );
}
