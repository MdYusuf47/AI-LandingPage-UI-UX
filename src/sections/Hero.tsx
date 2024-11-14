import Button from "@/components/Button";
import React from "react";
import startBg from "@/assets/stars.png";

const Hero = () => {
  return (
    <section
      className="h-[492px] flex items-center"
      style={{ backgroundImage: `url(${startBg.src})` }}
    >
      <div className="absolute h-64 w-64 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))]"></div>
      <div className="container relative">
        <h1 className="text-8xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">
          AI SEO
        </h1>
        <p className="text-lg text-white/70 mt-5 text-center">
          Elevate your site's visible effortlessly with AI, where smart
          technology meets user-friendly SEO tools
        </p>
        <div className="flex justify-center mt-5">
          <Button>Join waitlist</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
