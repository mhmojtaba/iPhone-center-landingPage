import { useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "../constants";
import gsap from "gsap";
import { pauseImg, playImg, replayImg } from "../utils/assets";
import { useGSAP } from "@gsap/react";

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState([]);

  const { isEnd, isLastVideo, isPlaying, startPlay, videoId } = video;

  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((prev) => ({
          ...prev,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [isEnd, videoId]);

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [videoId, isPlaying, loadedData, startPlay]);

  const handleLoadedMetadata = (e, i) => {
    setLoadedData((prev) => [...prev, e]);
  };

  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current;

    if (span[videoId]) {
      let animate = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(animate.progress() * 100);
          if (progress !== currentProgress) {
            currentProgress = progress;

            gsap.to(videoDivRef.current[videoId], {
              width:
                window.innerWidth < 760
                  ? "10vw"
                  : window.innerWidth < 1200
                  ? "10vw"
                  : "4vw",
            });
            // console.log(currentProgress)

            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },
        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: "12px",
            });
            gsap.to(span[videoId], {
              backgroundColor: "#afafaf",
            });
          }
        },
      });
      if (videoId === 0) {
        animate.restart();
      }

      const animationUpdate = () => {
        animate.progress(
          videoRef.current[videoId].currentTime /
            hightlightsSlides[videoId].videoDuration
        );
      };

      if (isPlaying) {
        gsap.ticker.add(animationUpdate);
      } else {
        gsap.ticker.remove(animationUpdate);
      }
    }
  }, [videoId, startPlay, isPlaying]);

  const handleVideoPrecess = (type, i) => {
    switch (type) {
      case "video-end":
        setVideo((prev) => ({
          ...prev,
          isEnd: true,
          videoId: i + 1,
        }));
        break;
      case "video-last":
        setVideo((prev) => ({
          ...prev,
          isLastVideo: true,
        }));
        break;
      case "video-reset":
        setVideo((prev) => ({
          ...prev,
          isLastVideo: false,
          videoId: 0,
        }));
        break;
      case "play":
        setVideo((prev) => ({
          ...prev,
          isPlaying: !isPlaying,
        }));
        break;
      case "pause":
        setVideo((prev) => ({
          ...prev,
          isPlaying: !isPlaying,
        }));
        break;
      default:
        return video;
    }
  };

  return (
    <div>
      <div className="flex items-center">
        {hightlightsSlides.map((slide, index) => (
          <div key={slide.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl bg-black overflow-hidden">
                <video
                  id="video"
                  className={`pointer-events-none , ${
                    slide.id === 2 && "translate-x-44"
                  }`}
                  preload="auto"
                  playsInline={true}
                  muted
                  ref={(el) => (videoRef.current[index] = el)}
                  onPlay={() =>
                    setVideo((prev) => ({
                      ...prev,
                      isPlaying: true,
                    }))
                  }
                  onEnded={() =>
                    index !== 3
                      ? handleVideoPrecess("video-end", index)
                      : handleVideoPrecess("video-last")
                  }
                  onLoadedMetadata={(e) => handleLoadedMetadata(index, e)}
                >
                  <source src={slide.video} type="video/mp4" />
                </video>
              </div>
              <div className="absolute top-12 left-[5%] z-10">
                {slide.textLists.map((item) => (
                  <p key={item} className="md:text-2xl text-xl font-medium">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {videoRef.current.map((_, index) => (
            <span
              key={index}
              ref={(el) => (videoDivRef.current[index] = el)}
              className="mx-2 w-3 h-4 bg-gray-200 cursor-pointer rounded-full relative"
            >
              <span
                className="absolute h-4 w-4 rounded-full "
                ref={(el) => (videoSpanRef.current[index] = el)}
              />
            </span>
          ))}
        </div>
        <button
          type="button"
          className="control-btn"
          onClick={
            isLastVideo
              ? () => handleVideoPrecess("video-reset")
              : isPlaying
              ? () => handleVideoPrecess("pause")
              : () => handleVideoPrecess("play")
          }
        >
          <img
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt={
              isLastVideo ? "replayImg" : !isPlaying ? "playImg" : "pauseImg"
            }
          />
        </button>
      </div>
    </div>
  );
};

export default VideoCarousel;
