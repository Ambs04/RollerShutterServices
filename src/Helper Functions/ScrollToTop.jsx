import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly jump to the top of the viewport
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use "smooth" if you prefer an animated scroll transition
    });
  }, [pathname]);

  return null; // This component handles side effects and does not render HTML
}
