import React from 'react';
import Hero from './components/Hero';
import Details from './components/Details';
import Experience from './components/Experience';
import Speaker from './components/Speaker';
import Testimonials from './components/Testimonials';
import Urgency from './components/Urgency';
import StickyBar from './components/StickyBar';
import Footer from './components/Footer';

function App() {
  return (
    <main className="w-full overflow-x-hidden min-h-screen">
      <Hero />
      <Details /> 
      <Experience />
      <Speaker />
      <Testimonials />
      <Urgency />
      <Footer />
      <StickyBar />
    </main>
  );
}

export default App;