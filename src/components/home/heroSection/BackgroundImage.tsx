interface BackgroundImageProps {
  isLoaded: boolean;
}

export default function BackgroundImage({ isLoaded }: BackgroundImageProps) {
  return (
    <div
      className={`absolute inset-0 -z-10 blur-xs ${
        isLoaded ? 'animate-fade-in' : 'opacity-0'
      }`}
    >
      <img
        src="/images/background.webp"
        alt="주다훤 포트폴리오 배경 이미지"
        className="h-full w-full object-cover object-[center_30%]"
        loading="eager"
      />
      {/* 하단으로 갈수록 검은 그라데이션 오버레이 */}
      <div className="to-background absolute inset-0 bg-gradient-to-b from-transparent opacity-100" />
    </div>
  );
}
