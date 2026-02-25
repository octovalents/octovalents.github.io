import { useState } from 'react';
import Hero from './Hero';

export default function Banner() {
  const [bannerDone, setBannerDone] = useState(false);

  return (
    <section className="relative min-h-screen">
      {/* Banner layer — fades out after reveal completes */}
      {!bannerDone && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-banner animate-banner-out"
          onAnimationEnd={(e) => {
            if (e.animationName === 'fade-out') setBannerDone(true);
          }}
        >
          <div className="flex flex-row justify-center items-baseline">
            <span className="banner-accent whitespace-nowrap uppercase font-bold animate-reveal">
              Creating
            </span>
            <span className="banner-muted whitespace-nowrap uppercase animate-reveal [animation-delay:1s]">
              &nbsp;impact
            </span>
          </div>
          <div className="flex flex-row justify-center items-baseline">
            <span className="banner-muted whitespace-nowrap uppercase animate-reveal [animation-duration:200ms] [animation-delay:2.5s]">
              with&nbsp;
            </span>
            <span className="banner-accent whitespace-nowrap uppercase font-bold animate-reveal [animation-delay:3s]">
              IT solution
            </span>
          </div>
        </div>
      )}

      {/* Hero layer — reveals after banner fades */}
      <div className={bannerDone ? 'hero-visible' : ''}>
        <Hero />
      </div>
    </section>
  );
}
