import { useState } from 'react';

interface ExpandableImageGridProps {
  images: string[];
  projectTitle: string;
}

const ExpandableImageGrid = ({
  images,
  projectTitle,
}: ExpandableImageGridProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);

    if (!isExpanded) {
      // 펼쳐질 때 스크롤 효과
      setTimeout(() => {
        document.getElementById('bottomImagesContainer')?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 200);
    }
  };

  return (
    <div className="mb-16 w-full">
      <div
        id="bottomImagesContainer"
        className={`grid grid-cols-2 gap-3 rounded-lg transition-all lg:grid-cols-4 ${
          isExpanded ? 'h-auto opacity-100' : 'h-0 w-0 opacity-0'
        }`}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="image-gallery border-gray8 aspect-video cursor-pointer rounded-lg border opacity-90 hover:opacity-100"
            data-image-index={index + 5}
          >
            <img
              src={image}
              alt={`${projectTitle} 이미지 ${index + 5}`}
              className="h-full w-full rounded-lg object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
      <button
        onClick={toggleExpand}
        className={`bg-accent-1 hover:bg-accent-1/90 text-inverse ${isExpanded ? '' : 'mt-0'} my-2 cursor-pointer rounded px-4 py-2 font-bold transition-colors`}
      >
        {isExpanded ? '이미지 접기' : '이미지 더보기'}
      </button>
    </div>
  );
};

export default ExpandableImageGrid;
