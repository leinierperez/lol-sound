import React, { ElementRef, useEffect, useRef } from 'react';

interface Props extends React.ComponentPropsWithRef<'div'> {
  loadMore: () => any;
  hasMore: boolean;
  loader: React.ReactNode;
  rootMargin?: string;
  threshold?: number | number[];
}

export default function InfiniteScroller({
  loadMore,
  hasMore,
  loader,
  rootMargin = '100px',
  threshold,
  children,
  ...rest
}: Props) {
  const observerTarget = useRef<ElementRef<'div'>>(null);

  useEffect(() => {
    const currentObserverTarget = observerTarget.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (hasMore && entries[0]?.isIntersecting) {
          loadMore();
        }
      },
      { threshold, rootMargin }
    );

    if (currentObserverTarget) {
      observer.observe(currentObserverTarget);
    }

    return () => {
      if (currentObserverTarget) {
        observer.unobserve(currentObserverTarget);
      }
    };
  }, [loadMore, hasMore, rootMargin, threshold]);

  return (
    <div {...rest}>
      {children}
      <div ref={observerTarget}></div>
      {hasMore && loader}
    </div>
  );
}
