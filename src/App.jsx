import React from 'react';
import Header from './components/Header';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Banner from './sections/Banner';

function App() {
  return (
    <div className="app">
      <Header />
    <Banner />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;