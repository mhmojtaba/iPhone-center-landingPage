import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils/assets";
import VideoCarousel from "./VideoCarousel";

const Highlights = ({ ref1 }) => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.3 });
  }, []);
  return (
    <section
      ref={ref1}
      id="highlights"
      className="w-screen h-full common-padding overflow-hidden bg-zinc"
    >
      <div className="screen-max-width">
        <div className="w-full md:flex items-end justify-between mb-12">
          <h1 id="title" className="section-heading">
            Highlights
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              watch the event
              <img src={rightImg} alt="rightImg" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
