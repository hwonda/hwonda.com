import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

import type { ImageItem, ProjectPoints } from '@/types/projects';

import MarkdownContent from '../common/MarkdownContent';
import ImageCarousel from './ImageCarousel';

interface ProjectPointsAccordionProps {
  points: ProjectPoints[];
}

const ProjectPointsAccordion = ({ points }: ProjectPointsAccordionProps) => {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(
    new Set(points.length > 0 ? [0] : []),
  );
  const [isAllExpanded, setIsAllExpanded] = useState(false);
  const [carouselImages, setCarouselImages] = useState<ImageItem[]>([]);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [isCarouselClosing, setIsCarouselClosing] = useState(false);

  const handleToggle = (index: number) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const handleExpandAll = () => {
    if (isAllExpanded) {
      setOpenIndexes(new Set());
    } else {
      setOpenIndexes(new Set(points.map((_, index) => index)));
    }
    setIsAllExpanded(!isAllExpanded);
  };

  const handleImageClick = (images: ImageItem[], imageIndex: number) => {
    setCarouselImages(images);
    setCarouselIndex(imageIndex);
    setIsCarouselClosing(false);
    setIsCarouselOpen(true);
  };

  const handleCarouselClose = () => {
    setIsCarouselClosing(true);
  };

  const handleCarouselAnimationEnd = () => {
    if (isCarouselClosing) {
      setIsCarouselOpen(false);
      setIsCarouselClosing(false);
    }
  };

  return (
    <>
      <div className="my-16 space-y-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-pretendard text-sub text-xl font-bold">
            프로젝트 회고
          </h2>
          <div className="group flex items-center gap-2">
            <span className="text-gray1 group-hover:text-sub text-sm">
              하이라이트
            </span>
            <button
              onClick={handleExpandAll}
              className={`relative h-6 w-[42px] rounded-full transition-colors duration-300 ${
                isAllExpanded ? 'bg-accent-2' : 'bg-gray7'
              }`}
              aria-label="하이라이트 토글"
            >
              <div
                className={`bg-background absolute top-0.5 h-5 w-5 rounded-full shadow-md transition-transform duration-300 ${
                  isAllExpanded ? 'translate-x-5' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>
        </div>
        {points.map((point, index) => {
          const isOpen = openIndexes.has(index);

          return (
            <div key={index}>
              {point.situation && (
                <div className="flex flex-col gap-2">
                  <div
                    className={`accordion-header bg-gray9 flex h-full cursor-pointer items-center justify-between gap-6 rounded-lg p-6 transition-colors hover:bg-gray-800 ${isOpen ? 'rounded-b-none' : ''} ${isOpen ? 'outline-accent-2/60 outline-b-none outline' : ''}`}
                    onClick={() => handleToggle(index)}
                  >
                    <div
                      className={`flex items-start whitespace-pre-line ${isOpen ? 'text-gray2' : 'text-sub'}`}
                    >
                      <span className="text-gray1 mr-1">{index + 1}.</span>
                      <MarkdownContent content={point.situation} />
                    </div>
                    <ChevronDown
                      className={`flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                      size={20}
                    />
                  </div>
                </div>
              )}
              <div
                className={`grid rounded-b-lg transition-[grid-template-rows] duration-400 ease-in-out ${
                  isOpen
                    ? 'outline-accent-2/60 outline-t-none grid-rows-[1fr] outline'
                    : 'grid-rows-[0fr]'
                }`}
              >
                <div className="min-h-0 overflow-hidden">
                  <div
                    className={`accordion-content border-gray8 border-t transition-opacity duration-300 ${
                      isOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    {point.images && point.images.length > 0 && (
                      <div className="bg-gray9 px-6 py-4">
                        <div
                          className={`grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3`}
                        >
                          {point.images.map((image, imgIndex) => (
                            <div
                              key={imgIndex}
                              className="group cursor-pointer overflow-hidden rounded-lg"
                              onClick={() =>
                                handleImageClick(point.images!, imgIndex)
                              }
                            >
                              <img
                                src={image.url}
                                alt={
                                  image.caption ||
                                  `${point.situation || ''} 관련 이미지 ${imgIndex + 1}`
                                }
                                loading="lazy"
                                className="aspect-video w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              {image.caption && (
                                <p className="text-gray4 mt-1 text-center text-sm">
                                  {image.caption}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {point.task && (
                      <div
                        className={`bg-gray9 border-gray8 px-6 py-4 ${point.images && point.images.length > 0 ? 'border-t' : ''}`}
                      >
                        <h3 className="font-pretendard text-accent-3/80 mb-2 text-lg font-bold">
                          Task
                        </h3>
                        <div className="text-sub whitespace-pre-line">
                          <MarkdownContent content={point.task} />
                        </div>
                      </div>
                    )}
                    {point.action && (
                      <div
                        className={`bg-gray9 border-gray8 px-6 py-4 ${point.task ? 'border-t' : ''}`}
                      >
                        <h3
                          className={`font-pretendard text-accent-2/80 mb-2 text-lg font-bold`}
                        >
                          Action
                        </h3>
                        <div className="text-sub whitespace-pre-line">
                          <MarkdownContent content={point.action} />
                        </div>
                      </div>
                    )}
                    {point.result && (
                      <div className="bg-gray9 border-gray8 border-t px-6 py-4">
                        <h3 className="font-pretendard text-accent-1/80 mb-2 text-lg font-bold">
                          Result
                        </h3>
                        <div className="text-sub whitespace-pre-line">
                          <MarkdownContent content={point.result} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {isCarouselOpen && (
        <ImageCarousel
          images={carouselImages}
          initialIndex={carouselIndex}
          isClosing={isCarouselClosing}
          onClose={handleCarouselClose}
          onAnimationEnd={handleCarouselAnimationEnd}
        />
      )}
    </>
  );
};

export default ProjectPointsAccordion;
