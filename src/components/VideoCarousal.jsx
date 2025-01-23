import React, { useState, useRef, useEffect } from "react";

const videos = [
  process.env.PUBLIC_URL +
    "https://cdn.pixabay.com/video/2019/10/21/28146-368238542_large.mp4",
  process.env.PUBLIC_URL +
    "https://media.istockphoto.com/id/1888618257/video/skycraper-of-corporate-buildings-with-trees.mp4?s=mp4-640x640-is&k=20&c=Bpb6QL8DajRUx4WrLHn-C4uxd5O0YfvcyJBMo_lxTe8=",
  process.env.PUBLIC_URL +
    "https://media.istockphoto.com/id/2172309753/video/aerial-view-of-young-man-riding-motorcycle-on-palm-tree-surrounded-road-near-bali-tibumana.mp4?s=mp4-640x640-is&k=20&c=695ZZyTsevfAPXIGQrnQq4FdoNxlJP4xYzW78jHYVig=",
];

const fallbackImages = [
  process.env.PUBLIC_URL + "/images/car-image-1.jpg",
  process.env.PUBLIC_URL + "/images/car-image-2.jpg",
  process.env.PUBLIC_URL + "/images/car-image-3.jpg",
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
