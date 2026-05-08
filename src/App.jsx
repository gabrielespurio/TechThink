import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Process from './components/Process';

import CTA from './components/CTA';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <hr className="divider" />
        <About />
        <hr className="divider" />
        <Services />
        <hr className="divider" />
        <Process />
        <hr className="divider" />
        <Benefits />

        <hr className="divider" />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
