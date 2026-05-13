import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Challenge from './components/Challenge.jsx';
import Capabilities from './components/Capabilities.jsx';
import Approach from './components/Approach.jsx';
import Cases from './components/Cases.jsx';
import Industries from './components/Industries.jsx';
import Engagement from './components/Engagement.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundGradient />
      <Nav />
      <main>
        <Hero />
        <Challenge />
        <Capabilities />
        <Approach />
        <Cases />
        <Industries />
        <Engagement />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function BackgroundGradient() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60rem] overflow-hidden">
      <div className="absolute -top-40 left-1/2 h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-accent-500/10 blur-[120px]" />
      <div className="absolute top-40 left-1/4 h-[24rem] w-[24rem] rounded-full bg-ink-800/40 blur-[100px]" />
    </div>
  );
}
