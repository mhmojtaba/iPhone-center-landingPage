import { useGSAP } from "@gsap/react";
import React, { useEffect } from "react";
import { animateWithGsap } from "../utils/animation";
import { explore1Img, explore2Img, exploreVideo } from "../utils/assets";
import { useRef } from "react";
import gsap from "gsap";

const Features = ({ ref3 }) => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart", // 'onStart onLeave enterBack leaveBack'
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });
    animateWithGsap("#features-title", {
      y: 0,
      opacity: 1,
    });
    animateWithGsap(
      ".g_grow",
      {
        scale: 1,
        opacity: 1,
        ease: "power1",
      },
      {
        scrub: 1,
      }
    );
    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);
  return (
    <section
      id="features"
      ref={ref3}
      className="h-full common-padding bg-zinc overflow-hidden relative"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features-title" className="section-heading">
            Explore ....
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl mb-10 font-semibold">
              {" "}
              iPhone
            </h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">
              Forged in titanium
            </h2>
          </div>
          <div className="flex-center flex-col px-10">
            <div className="relative h-[50vh] w-full flex items-center">
              <video
                playsInline
                id="exploreVideo"
                className="w-full h-full object-cover object-center"
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    className="feature-video g_grow"
                    src={explore1Img}
                    alt="titanium"
                  />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    className="feature-video g_grow"
                    src={explore2Img}
                    alt="titanium2"
                  />
                </div>
              </div>
              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    iphone 13 pro is {""}
                    <span className="text-white">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quae, voluptas!
                    </span>
                    using the sane alloy that....
                  </p>
                </div>
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    titanium has one of the best ..... {""}
                    <span className="text-white">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quae, voluptas!
                    </span>
                    using the sane alloy that....
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
