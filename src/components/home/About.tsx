import React from 'react';

export default function About() {
  return (
    <section className="bg-gray-9 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-pretendard mb-8 text-center text-3xl font-bold md:text-4xl">
            소개
          </h2>
          <div className="text-gray-1 space-y-4">
            <p>
              안녕하세요, 프론트엔드 개발자 주다훤입니다. 사용자 경험을 중심으로
              한 웹 개발에 관심이 많으며, 최신 기술 트렌드를 따라가며 지속적으로
              성장하고 있습니다.
            </p>
            <p>
              React, TypeScript, Tailwind CSS 등의 기술 스택을 활용하여 사용자
              친화적이고 성능이 뛰어난 웹 애플리케이션을 개발하는 것을
              좋아합니다.
            </p>
            <p>
              함께 일하고 싶거나 궁금한 점이 있으시면 언제든지 연락해 주세요.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
