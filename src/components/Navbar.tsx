import { useTheme } from '../context/ThemeContext';
import OctovalentsSVG from '../icons/OctovalentsSVG';
import { useSticky } from '../hooks/useSticky';

const LOGO_COLORS = {
  default: { bgColor: '#212326', bodyColor: '#00ba34' },
  dark:    { bgColor: '#201a30', bodyColor: '#0df6e3' },
} as const;

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[25px] h-[25px] max-md:w-[20px] max-md:h-[20px] transition-colors duration-[600ms]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[25px] h-[25px] max-md:w-[20px] max-md:h-[20px] transition-colors duration-[600ms]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    </svg>
  );
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  useSticky('site-header');

  return (
    <>
      {/* Logo */}
      <a href="#" className="logo flex flex-row items-center no-underline text-[1.5em] ml-[6.5vw] max-nav:ml-[3vw] max-md:ml-[1vw]">
        <OctovalentsSVG {...LOGO_COLORS[theme]} size={35} />
        <p className="logo-text font-bold uppercase tracking-[2px] ml-[1vw] transition-colors duration-[600ms]">
          Benidictus
        </p>
      </a>

      <div />

      {/* Nav */}
      <nav className="flex mr-[0.5vw]">
        <a onClick={toggleTheme} className="nav-link cursor-pointer px-[15px] py-[10px] mx-5">
          {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
        </a>
      </nav>
    </>
  );
}
