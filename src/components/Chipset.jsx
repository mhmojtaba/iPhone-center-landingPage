import { useGSAP } from "@gsap/react";
import { chipImg, frameImg, frameVideo } from "../utils/assets";
import gsap from "gsap";
import { useRef } from "react";
import { animateWithGsap } from "../utils/animation";

const ChipSet = ({ ref4 }) => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to("#frameVideo", {
      scrollTrigger: {
        trigger: "#frameVideo",
        toggleActions: "play pause reverse restart", // 'onStart onLeave enterBack leaveBack'
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });
  }, []);

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });
    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section className="common-padding" id="chip" ref={ref4}>
      <div className="screen-max-width">
        <div className="flex-center w-full my-20" id="chip">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>
        <div className="flex flex-col items-center ">
          <h2 className="hiw-title">
            A17 Pro chip
            <br />A monster win for gaming.
          </h2>
          <p className="hiw-subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ut.
          </p>
        </div>
        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                className="bg-transparent relative z-10   "
                alt="frame"
              />
            </div>
            <div className="hiw-video">
              <video
                playsInline
                id="frameVideo"
                preload="none"
                muted
                autoPlay
                ref={videoRef}
                className="pointer-events-none z-10"
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className=" text-gray font-semibold mt-4 text-center">
            Honkai: star Rail
          </p>
        </div>
        <div className="hiw-text-container">
          <div className="flex-1 flex flex-col justify-center">
            <p className="hiw-text g_fadeIn">
              A17 Pro is an entirely {""}
              <span className="text-white">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                voluptas!
              </span>
            </p>

            <p className="hiw-text g_fadeIn">
              Mobile {""}
              <span className="text-white">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                voluptas!
              </span>
              using the sane alloy that....
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text">New</p>
            <p className="hiw-bigtext">Pro class GPU</p>
            <p className="hiw-text">with 18 cores</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChipSet;
