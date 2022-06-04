import { useEffect, useRef } from "react";

const useOnMount = (effect) => {
  const effectCalled = useRef(false);

  useEffect(() => {
    if (!effectCalled.current) {
      effect();
      effectCalled.current = true;
    }
  }, [effect]);
};

export default useOnMount;
