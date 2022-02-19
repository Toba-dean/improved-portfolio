import { useEffect } from 'react';
import './App.scss';

import { About, Footer, Header, Skills, Work, Testimonial } from './containers';
import { Navbar } from './components'

function App() {

  useEffect(() => {
    document.title = 'Dean'
  }, [])

  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
