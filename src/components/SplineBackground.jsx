
import React, { useEffect } from 'react';

const SplineBackground = () => {
  useEffect(() => {
    // Dynamically create and append the Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.38/build/spline-viewer.js';
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <spline-viewer
      url="https://prod.spline.design/R5uGnGLgRfl3fPoJ/scene.splinecode"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -10,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    ></spline-viewer>
  );
};

export default SplineBackground;