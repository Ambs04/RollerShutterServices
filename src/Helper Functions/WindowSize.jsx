import { useEffect, useState } from "react";

const fetchWindowSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

export default function WindowSize() {
  const [size, setSize] = useState(() => fetchWindowSize());
  useEffect(() => {
    const onResize = () => {
      setSize(fetchWindowSize());
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return size;
}
