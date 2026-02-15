"use client";

import { useEffect, useRef } from "react";

import { assetPath, HERO_VIDEO_SRC } from "@/lib/constants";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play();
    }
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col md:flex-row">
      {/* Video side */}
      <div className="relative h-[50vh] w-full md:h-auto md:w-[70%]">
        <video
          ref={videoRef}
          src={assetPath(HERO_VIDEO_SRC)}
          autoPlay
          muted
          playsInline
          disablePictureInPicture
          className="h-full w-full object-cover"
        />
      </div>

      {/* Dark panel */}
      <div className="bg-dark-brown flex w-full flex-col items-center justify-center px-8 py-16 md:w-[30%] md:py-0">
        <div className="max-w-md text-center">
          <h1 className="text-gold font-serif text-4xl font-bold tracking-[0.25em] md:text-5xl lg:text-6xl">
            ВМ-ТОРГ
          </h1>
          <div className="bg-gold/60 mx-auto my-6 h-px w-24" />
          <p className="text-cream/90 font-serif text-xl leading-relaxed md:text-2xl">
            Мебель, созданная для вас
          </p>
          <p className="text-cream/50 mt-4 text-sm leading-relaxed">
            Эксклюзивный представитель «Мобили Концепт» в России
          </p>
          <a
            href="#gallery"
            className="border-gold/60 text-gold hover:bg-gold/10 mt-8 inline-block border px-8 py-3 text-sm font-medium tracking-wider transition-colors"
          >
            СМОТРЕТЬ РАБОТЫ
          </a>
        </div>
      </div>
    </section>
  );
}
