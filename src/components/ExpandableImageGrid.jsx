import { useState } from 'react';

export default function ExpandableImageGrid({ images, projectTitle }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    
    if (!isExpanded) {
      // 펼쳐질 때 스크롤 효과
      setTimeout(() => {
        document.getElementById('bottomImagesContainer')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
  };

  return (
    <div className="mb-16">
      <div 
        id="bottomImagesContainer"
        className={`grid grid-cols-2 gap-3 lg:grid-cols-4 transition-all duration-300 overflow-hidden ${
          isExpanded ? 'h-auto opacity-100' : 'h-0 opacity-0'
        }`}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="image-gallery border-gray8 aspect-video cursor-pointer overflow-hidden rounded-lg border opacity-90 hover:opacity-100"
            data-image-index={index + 5}
          >
            <img
              src={image}
              alt={`${projectTitle} 이미지 ${index + 5}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      <button 
        onClick={toggleExpand}
        className={`bg-accent-1 hover:bg-accent-1/90 text-inverse ${isExpanded ? 'mt-3' : 'mt-0'} rounded px-4 py-2 font-medium transition-colors`}
      >
        {isExpanded ? '접기' : '더보기'}
      </button>
    </div>
  );
} 