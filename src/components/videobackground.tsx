import React from 'react';

const VideoBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover filter "
      >
        <source src="/bg.webm" type="video/webm" />
      </video>

      {/* Optional: subtle dark gradient to add mood */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#051011] opacity-70" />
    </div>
  );
};

export default VideoBackground;
