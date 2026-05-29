"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  image: string;
  video?: string;
}

interface Props {
  eyebrow?: string;
  title: string[];
  subtitle?: string;
  items: TestimonialItem[];
}

const CARD_W = 376;
const CARD_H = 540;
const GAP = 36;

export function TestimonialsCarousel({
  eyebrow,
  title,
  subtitle,
  items
}: Props) {
  const [active, setActive] = useState(1);
  const [playingIdx, setPlayingIdx] = useState<number | null>(null);
  // cardW is CARD_W on SSR / initial render, then updated client-side
  const [cardW, setCardW] = useState(CARD_W);
  const count = items.length;
  const touchX = useRef<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Recompute actual card width whenever viewport resizes
  useEffect(() => {
    function update() {
      setCardW(Math.min(CARD_W, Math.floor(window.innerWidth * 0.86)));
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const cardH = Math.round(CARD_H / CARD_W * cardW);
  const step = cardW + GAP;

  function goTo(i: number) {
    if (playingIdx !== null) {
      const vid = videoRefs.current[playingIdx];
      if (vid) vid.pause();
      setPlayingIdx(null);
    }
    setActive(i);
  }

  const prev = () => goTo((active - 1 + count) % count);
  const next = () => goTo((active + 1) % count);

  function handlePlayPause(e: React.MouseEvent, i: number) {
    e.stopPropagation();
    if (i !== active) {
      goTo(i);
      return;
    }
    const vid = videoRefs.current[i];
    if (!vid) return;
    if (vid.paused) {
      vid.muted = false;
      vid.play().catch(() => {});
      setPlayingIdx(i);
    } else {
      vid.pause();
      setPlayingIdx(null);
    }
  }

  function handleTouchStart(e: React.TouchEvent) {
    touchX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchX.current === null) return;
    const delta = touchX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 44) delta > 0 ? next() : prev();
    touchX.current = null;
  }

  function dist(i: number) {
    const d = Math.abs(i - active);
    return Math.min(d, count - d);
  }

  return (
    <section className="overflow-hidden bg-warm pb-[clamp(88px,10vw,132px)] pt-[clamp(96px,11vw,152px)] text-teal">
      <div className="site-container">
        {eyebrow &&
          <p className="eyebrow text-teal reveal">
            {eyebrow}
          </p>}
        <h2 className="display max-w-[560px] text-[3rem] text-teal max-md:text-[2.25rem] reveal">
          {title.map(line =>
            <span key={line} className="block">
              {line}
            </span>
          )}
        </h2>
        {subtitle &&
          <p className="mt-3 text-[2rem] font-bold leading-tight text-charcoal reveal max-md:text-[1.25rem]">
            {subtitle}
          </p>}
      </div>

      <div
        className="mt-[68px] select-none max-md:mt-10"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex items-end transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
          style={{
            gap: `${GAP}px`,
            // JS-computed transform so centering is exact at every viewport width
            transform: `translateX(calc(50vw - ${active * step +
              cardW / 2}px))`,
            willChange: "transform"
          }}
        >
          {items.map((item, i) => {
            const isActive = i === active;
            const d = dist(i);
            const opacity = d === 0 ? 1 : d === 1 ? 0.58 : 0.24;
            const scale = isActive ? 1 : d === 1 ? 0.82 : 0.68;
            const isPlaying = playingIdx === i;

            return (
              <div
                key={item.author + item.role}
                className="relative flex-shrink-0 overflow-hidden rounded-[1px] bg-[#d7d7ca] text-left"
                style={{
                  width: `${cardW}px`,
                  height: `${cardH}px`,
                  opacity,
                  transform: `scale(${scale})`,
                  transformOrigin: "bottom center",
                  transition:
                    "opacity 0.5s ease, transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)",
                  cursor: isActive ? "default" : "pointer"
                }}
                onClick={() => {
                  if (!isActive) goTo(i);
                }}
              >
                {item.video
                  ? <video
                      ref={(el: HTMLVideoElement | null) => {
                        videoRefs.current[i] = el;
                      }}
                      src={item.video}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  : <Image
                      src={item.image}
                      alt={item.author}
                      fill
                      className="object-cover"
                      sizes="(max-width: 820px) 86vw, 344px"
                    />}

                <div className="absolute inset-0 bg-gradient-to-t from-[#193435]/88 via-[#193435]/16 to-[#f0f0e5]/18" />

                {/* Play button — sits just above the name, disappears once playing */}
                {!isPlaying &&
                  <button
                    type="button"
                    aria-label="Play"
                    onClick={e =>
                      item.video ? handlePlayPause(e, i) : e.stopPropagation()}
                    // className="absolute bottom-[72px] left-1/2 -translate-x-1/2 grid h-12 w-12 place-items-center rounded-full bg-warm/70 backdrop-blur-[2px]"
                    className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-warm/70 backdrop-blur-[2px] transition-opacity duration-300"
                  >
                    <span className="ml-1 block h-0 w-0 border-y-[8px] border-l-[13px] border-y-transparent border-l-teal" />
                  </button>}

                {isActive &&
                  <span
                    className="pointer-events-none absolute inset-0"
                    style={{ boxShadow: "inset 0 0 0 1px rgba(25,52,53,0.18)" }}
                  />}

                <span className="absolute bottom-6 left-6 right-6">
                  <span className="block font-display text-[1rem] font-black uppercase leading-none text-warm">
                    {item.author}
                  </span>
                  <span className="mt-[7px] block text-[0.58rem] font-black uppercase tracking-[0.08em] text-warm">
                    {item.role}
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="site-container mt-[42px] flex items-center justify-center gap-[8px] max-md:justify-between">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonial"
          className="hidden h-11 w-11 items-center justify-center text-teal max-md:flex"
        >
          <span className="block h-4 w-4 rotate-45 border-b-2 border-l-2 border-teal" />
        </button>

        <div className="flex items-center justify-center gap-[8px]">
          {items.map((item, i) =>
            <button
              key={item.author + i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`View testimonial ${i + 1}`}
              className="h-2 w-2 transition-colors duration-300"
              style={{
                background:
                  i === active ? "rgb(25 52 53)" : "rgb(25 52 53 / 20%)"
              }}
            />
          )}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next testimonial"
          className="hidden h-11 w-11 items-center justify-center text-teal max-md:flex"
        >
          <span className="block h-4 w-4 -rotate-45 border-b-2 border-r-2 border-teal" />
        </button>
      </div>
    </section>
  );
}
