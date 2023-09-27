import { useEffect, useRef } from 'react';

const useObserver = (ref, loading, canLoad, callback) => {
  const observer = useRef();

  useEffect(() => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    const cb = function(entries) {
      if (entries[0].isIntersecting && canLoad) {
        callback();
      }
    };

    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current);
  }, [loading]);
};

export default useObserver;
