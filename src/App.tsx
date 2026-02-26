import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';

export default function App() {
  return (
    <ThemeProvider>
      <header
        id="site-header"
        className="group fixed top-0 left-0 w-full flex justify-between items-center py-10 max-md:py-6 px-[5vw] z-10 border-b-2 transition-all duration-[600ms]"
        style={{ borderColor: 'var(--navbar-border)' }}
      >
        <Navbar />
      </header>
      <main>
        <Hero />
        <Projects />
      </main>
    </ThemeProvider>
  );
}
