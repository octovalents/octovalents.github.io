export default function Banner() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-banner">
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
  );
}
