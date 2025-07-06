// import '../../styles/hero-gradient.css';

import React from 'react';

export default function Hero() {
  return (
    <section className="relative flex h-screen w-screen items-center justify-center overflow-hidden">
      {/* <div className="gradient-background absolute inset-0 -z-10"></div>
      <div className="wave wave1 absolute inset-0 -z-10"></div> */}

      {/* 배경 이미지 */}
      <div className="absolute inset-0 -z-10 blur-xs">
        <img
          src="/images/background.webp"
          alt="배경 이미지"
          className="h-full w-full object-cover"
        />
        {/* 하단으로 갈수록 검은 그라데이션 오버레이 */}
        <div className="to-background absolute inset-0 bg-gradient-to-b from-transparent opacity-100"></div>
      </div>

      <div className="relative z-10 container flex size-full items-end justify-center px-4 pb-24 sm:px-8 sm:pb-48">
        <div className="flex flex-col">
          <h1 className="mb-6 leading-tight font-bold">
            <span className="bg-gradient-to-r from-[var(--color-accent-1)] via-[var(--color-accent-2)] to-[var(--color-accent-4)] bg-clip-text text-6xl text-transparent md:text-8xl">
              HOT DEV
            </span>
          </h1>
          <p className="text-main font-paperlogy text-2xl font-bold">
            뜨겁게 성장하고, 따듯하게 협업합니다
          </p>
          <p className="text-sub font-pretendard max-w-2xl text-lg">
            깔끔한 코드, 부드러운 사용자 경험, 그리고 창의적인 아이디어를
          </p>
          <p className="text-sub font-pretendard mb-10 max-w-2xl text-lg">
            현실로 구현하는 것에 열정을 가지고 있습니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-foreground hover:bg-foreground/80 text-inverse rounded-lg px-6 py-3 font-medium transition-colors">
              프로젝트 보기
            </button>
            <button className="border-gray3 text-main hover:bg-gray9 rounded-lg border px-6 py-3 font-medium transition-colors">
              연락하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
