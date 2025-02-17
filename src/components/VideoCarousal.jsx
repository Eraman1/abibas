import React, { useState, useRef, useEffect } from "react";
import axiosInstance from "../api/axios"; // Adjust the import as per your file structure

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoSupported, setIsVideoSupported] = useState(true);
  const videoRef = useRef(null);

  const [banners, setBanners] = useState([]);

  // Fetch banners from the API
  const fetchSlider = async () => {
    try {
      const response = await axiosInstance.get("/slider/getsliders");
      setBanners(response.data.sliders); // Assuming response.data.sliders contains the banners
    } catch (error) {
      console.error("Error fetching banners:", error);
    }
  };

  useEffect(() => {
    fetchSlider();
  }, []);

  // Handle the carousel navigation
  const nextItem = () => {
    if (banners.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }
  };

  const prevItem = () => {
    if (banners.length > 0) {
      setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
    }
  };

  // Auto slide every 3-5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextItem();
    }, Math.random() * (5000 - 3000) + 3000); // Random time between 3-5 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [banners]);

  // Handle video loading and fallback if needed
  useEffect(() => {
    if (videoRef.current && banners.length > 0) {
      const currentVideo = videoRef.current;

      const handleCanPlay = () => {
        setIsVideoSupported(true);
        currentVideo.play().catch((error) => {
          console.error("Error playing video:", error);
          setIsVideoSupported(false);
        });
      };

      const handleError = () => {
        setIsVideoSupported(false);
      };

      currentVideo.addEventListener("canplay", handleCanPlay);
      currentVideo.addEventListener("error", handleError);

      return () => {
        currentVideo.removeEventListener("canplay", handleCanPlay);
        currentVideo.removeEventListener("error", handleError);
      };
    }
  }, [currentIndex, banners]);

  return (
    <div className="video-carousel">
      {/* Ensure banners have data before rendering video or image */}
      {banners.length > 0 ? (
        isVideoSupported && banners[currentIndex]?.image ? (
          <video
            ref={videoRef}
            src={banners[currentIndex]?.image} // Video URL from banner
            className="video-carousel__video"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={banners[currentIndex]?.image}
            alt={`Banner ${currentIndex + 1}`}
            className="video-carousel__image"
          />
        )
      ) : (
        <p>Loading...</p> // Show a loading message while banners are being fetched
      )}

      <div className="video-carousel__controls">
        <button
          onClick={prevItem}
          className="video-carousel__control video-carousel__control--prev"
          aria-label="Previous item"
          disabled={banners.length === 0} // Disable button when banners are loading
        >
          ❮
        </button>
        <button
          onClick={nextItem}
          className="video-carousel__control video-carousel__control--next"
          aria-label="Next item"
          disabled={banners.length === 0} // Disable button when banners are loading
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default VideoCarousel;
