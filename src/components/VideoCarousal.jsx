import React, { useState, useRef, useEffect } from "react";

const videos = [
  process.env.PUBLIC_URL +
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rixen-B6vCSuwkgfByVB2PoW9X0oNGottA3h.mp4",
  process.env.PUBLIC_URL +
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rixen-B6vCSuwkgfByVB2PoW9X0oNGottA3h.mp4",
  process.env.PUBLIC_URL +
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rixen-B6vCSuwkgfByVB2PoW9X0oNGottA3h.mp4",
];

const fallbackImages = [
  process.env.PUBLIC_URL +
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abibbasBanner-dPiTt6UDS7BEiWawtLcXIm4xlklVzO.png",
  process.env.PUBLIC_URL +
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abibbasBanner-dPiTt6UDS7BEiWawtLcXIm4xlklVzO.png",
  process.env.PUBLIC_URL +
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abibbasBanner-dPiTt6UDS7BEiWawtLcXIm4xlklVzO.png",
];

function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoSupported, setIsVideoSupported] = useState(true);
  const videoRef = useRef(null);

  const nextItem = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevItem = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      const currentVideo = videoRef.current;

      const handleCanPlay = () => {
        setIsVideoSupported(true);
        currentVideo.play().catch((error) => {
          console.error("Error playing video:", error);
          setIsVideoSupported(false);
        });
      };

      const handleError = () => {
        console.error("Video failed to load:", videos[currentIndex]);
        setIsVideoSupported(false);
      };

      currentVideo.addEventListener("canplay", handleCanPlay);
      currentVideo.addEventListener("error", handleError);

      return () => {
        currentVideo.removeEventListener("canplay", handleCanPlay);
        currentVideo.removeEventListener("error", handleError);
      };
    }
  }, [currentIndex]);

  return (
    <div className="video-carousel">
      {isVideoSupported ? (
        <video
          ref={videoRef}
          src={videos[currentIndex]}
          className="video-carousel__video"
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <img
          src={
            fallbackImages[currentIndex] ||
            process.env.PUBLIC_URL + "/images/placeholder.jpg"
          }
          alt={`Slide ${currentIndex + 1}`}
          className="video-carousel__image"
        />
      )}
      <div className="video-carousel__controls">
        <button
          onClick={prevItem}
          className="video-carousel__control video-carousel__control--prev"
          aria-label="Previous item"
        >
          ❮
        </button>
        <button
          onClick={nextItem}
          className="video-carousel__control video-carousel__control--next"
          aria-label="Next item"
        >
          ❯
        </button>
      </div>
    </div>
  );
}

export default VideoCarousel;
// const bannerImage =
//   "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abibbasBanner-dPiTt6UDS7BEiWawtLcXIm4xlklVzO.png";

// function BannerCarousel() {
//   return (
//     <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
//       <img
//         src={bannerImage || "/placeholder.svg"}
//         alt="ABIBAS Motors Republic Day Banner - Rev up your life"
//         className="w-full h-auto object-cover"
//         style={{
//           width: "100%",
//           maxHeight: "500px",
//           minHeight: "300px",
//         }}
//       />
//       {/* Commenting out video and controls since we only need the banner image
//       {/* <div className="video-carousel__controls">
//         <button
//           onClick={prevItem}
//           className="video-carousel__control video-carousel__control--prev"
//           aria-label="Previous item"
//         >
//           ❮
//         </button>
//         <button
//           onClick={nextItem}
//           className="video-carousel__control video-carousel__control--next"
//           aria-label="Next item"
//         >
//           ❯
//         </button>
//       </div> */}
//     </div>
//   );
// }

// export default BannerCarousel;
