import React, { useState, useEffect } from 'react';

interface Size {
  width: number | undefined;
  height: number | undefined;
}
// Hook
const useCarouselRect = (
  ref: React.MutableRefObject<HTMLDivElement | null>,
): Size => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/

  const [refSize, setRefSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setRefSize({
        width: ref.current?.clientWidth,
        height: ref.current?.clientHeight,
      });
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [ref]); // Empty array ensures that effect is only run on mount
  return refSize;
};

export default useCarouselRect;
