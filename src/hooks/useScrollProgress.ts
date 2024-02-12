import { useEffect, useRef, useState } from 'react';

/**
 *
 * @param target scrollArea element. Should at least have 100vh height
 * @returns progress: scroll area progress.
 * 0 -> top of scroll area is at the top of view port or above.
 * 1 -> bottom of scroll area is at the bottom of view port or above.
 */
export const useScrollAreaProgress = () => {
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (scrollAreaRef) {
      const target = scrollAreaRef.current;
      const targetOffsetTop = target?.offsetTop || 0;
      const targetHeight = target?.clientHeight || 0;
      const viewportHeight = window.innerHeight;
      const progressHeight = targetHeight - viewportHeight;

      const updateProgress = () => {
        if (
          progressHeight &&
          scrollY >= targetOffsetTop - viewportHeight &&
          scrollY <= targetHeight + targetOffsetTop
        ) {
          const currentPos = Math.max(scrollY - targetOffsetTop, 0);
          setProgress(Math.min(currentPos / progressHeight, 1));
        }
      };
      window.addEventListener('scroll', updateProgress);

      return () => {
        window.removeEventListener('scroll', updateProgress);
      };
    }
  }, [scrollAreaRef]);

  return { progress, scrollAreaRef };
};
