import { useState, useEffect } from "react";
import landingLogo from "../../assets/RSSLanding.png";

export default function LoadingPage() {
  const [isRolledUp, setIsRolledUp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRolledUp(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: isRolledUp ? "0%" : "100vh",
        overflow: "hidden",
        transition: "height 2s cubic-bezier(0.45, 0.05, 0.55, 0.95)",
        zIndex: 9999,
      }}
    >
      <img
        src={landingLogo}
        style={{
          height: "100vh",
          width: "100vw",
          objectFit: "cover",

          display: "block",
        }}
      />
    </div>
  );
}
