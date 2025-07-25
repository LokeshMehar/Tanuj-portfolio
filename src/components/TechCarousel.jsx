/* eslint-disable react/prop-types */
import { useState, useEffect, useMemo, useRef } from 'react';


const TechCarousel = ({ title, items }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredKey, setHoveredKey] = useState(null);
  const [offset, setOffset] = useState(0);
  const [sectionHovered, setSectionHovered] = useState(false);
  const carouselRef = useRef(null);

  // Calculate item width based on screen size
  const itemWidth = 80; // Base width: icon (48px) + gap (24px) + padding

  // Create optimized carousel items (reduced repetition)
  const carouselItems = useMemo(() => 
    Array.from({ length: items.length * 5 }, (_, index) => ({ // Reduced from 10x to 5x
      tech: items[index % items.length],
      key: `${items[index % items.length]}-${index}`,
    })), [items]
  );

  const formatTechName = (tech) => {
    return tech
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/\+/g, 'plus')
      .replace(/#/g, 'sharp')
      .replace(/\./g, '')
      .replace(/&/g, 'and');
  };

  // Continuous scrolling - OPTIMIZED
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setOffset((prev) => prev - 0.5); // Slower, smoother movement
      }, 16); // 60fps instead of 33fps
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  // Seamless loop by resetting offset - now properly calculated per carousel
  useEffect(() => {
    const totalWidth = itemWidth * items.length;
    if (Math.abs(offset) >= totalWidth) {
      setOffset((prev) => prev + totalWidth);
    }
  }, [offset, items.length, itemWidth]);

  return (
    <div
      className="w-full py-6"
      onMouseEnter={() => setSectionHovered(true)}
      onMouseLeave={() => setSectionHovered(false)}
    >
      <div 
        className="relative bg-gradient-to-r from-white/20 via-white/10 to-transparent backdrop-blur-2xl rounded-2xl border border-white/20 h-[180px] md:h-[220px] overflow-hidden transition-all duration-300"
        style={{
          boxShadow: sectionHovered 
            ? '0 25px 50px -12px rgba(147, 51, 234, 0.4), 0 0 0 1px rgba(147, 51, 234, 0.2)' 
            : '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1)',
          transform: sectionHovered ? 'scale(1.02)' : 'scale(1)',
        }}
      >
        {/* Title */}
        <h3 
          className="absolute top-0 left-0 z-20 text-white text-lg md:text-xl font-bold px-4 py-2 rounded-br-xl transition-all duration-300"
          style={{
            background: sectionHovered 
              ? 'linear-gradient(135deg, #8b5cf6, #a855f7, #9333ea)' 
              : 'linear-gradient(135deg, #7c3aed, #8b5cf6)',
          }}
        >
          {title}
        </h3>

        {/* Carousel Container - OPTIMIZED */}
        <div className="h-full overflow-visible relative">
          <div
            ref={carouselRef}
            className="h-full flex gap-6 md:gap-8 items-center pt-16 pb-4 overflow-hidden"
            style={{
              width: `${itemWidth * carouselItems.length}px`,
              transform: `translate3d(${offset}px, 0, 0)`, // GPU acceleration
              willChange: 'transform',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {carouselItems.map(({ tech, key }) => {
              const formattedTech = formatTechName(tech);
              const iconSrc = `/tech-icons/${formattedTech}.svg`;

              // console.log(`Attempting to load icon: ${iconSrc}`);

              return (
                <div
                  key={key}
                  className="relative flex flex-col items-center justify-center flex-shrink-0"
                  style={{ 
                    width: `${itemWidth - 24}px`,
                    transform: hoveredKey === key ? 'scale3d(1.2, 1.2, 1)' : 'scale3d(1, 1, 1)', // GPU acceleration
                    transition: 'transform 0.15s ease-out', // Faster transition
                  }}
                  onMouseEnter={() => setHoveredKey(key)}
                  onMouseLeave={() => setHoveredKey(null)}
                >
                  {/* Icon container with fixed size - OPTIMIZED */}
                  <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                    <img
                      src={iconSrc}
                      alt={tech}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy" // Lazy loading for performance
                      onError={(e) => {
                        e.target.src = '/tech-icons/fallback.svg';
                      }}
                    />
                  </div>
                  
                  {/* Tooltip - OPTIMIZED */}
                  <div
                    className="absolute bottom-[calc(100%+0.5rem)] left-1/2 z-40 rounded-lg px-3 py-2 text-sm md:text-base font-medium text-center whitespace-nowrap pointer-events-none"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.95), rgba(168, 85, 247, 0.95))',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(147, 51, 234, 0.3)',
                      boxShadow: '0 8px 32px rgba(147, 51, 234, 0.3)',
                      color: '#ffffff',
                      textShadow: '0 1px 2px rgba(0,0,0,0.5)',
                      minWidth: 'max-content',
                      opacity: hoveredKey === key ? 1 : 0,
                      transform: `translate3d(-50%, ${hoveredKey === key ? '0' : '-10px'}, 0) scale3d(${hoveredKey === key ? 1 : 0.8}, ${hoveredKey === key ? 1 : 0.8}, 1)`, // GPU acceleration
                      transition: 'all 0.15s ease-out', // Faster transition
                      visibility: hoveredKey === key ? 'visible' : 'hidden', // Prevent unnecessary rendering
                    }}
                  >
                    <div className="relative z-10">
                      {tech}
                    </div>
                    {/* Tooltip arrow */}
                    <div 
                      className="absolute top-full left-1/2 w-0 h-0"
                      style={{
                        transform: 'translateX(-50%)',
                        borderLeft: '6px solid transparent',
                        borderRight: '6px solid transparent',
                        borderTop: '6px solid rgba(139, 92, 246, 0.95)',
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechCarousel;