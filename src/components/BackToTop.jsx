import React from "react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  //   const bookBtn = () => {
  //     document
  //       .querySelector("#booking-section")
  //       .scrollIntoView({ behavior: "smooth" });
  //   };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div
      onClick={scrollToTop}
      className={`scroll-up ${goUp ? "show-scroll" : ""}`}
    >
      <i className="fa-solid fa-angle-up"></i>
    </div>
  );
}
