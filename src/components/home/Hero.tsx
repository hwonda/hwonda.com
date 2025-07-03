import React from 'react';

export default function Hero() {
  return (
    <section className="flex h-screen items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-pretendard mb-6 text-5xl leading-tight font-bold md:text-6xl">
            <span className="font-paperlogy text-primary">RED</span>
            <span className="font-paperlogy text-gray2">DEV</span>
          </h1>
          <p className="text-gray3 font-paperlogy text-2xl font-bold">
            뜨겁게 성장하고, 따듯하게 협업합니다
          </p>
          <p className="text-gray5 font-pretendard mb-10 max-w-2xl text-lg">
            깔끔한 코드, 부드러운 사용자 경험, 그리고 창의적인 아이디어를 현실로
            구현하는 것에 열정을 가지고 있습니다.
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
