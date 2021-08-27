import './styles.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import ControlCenter from './components/ControlCenter';
import FilmStrip from './components/FilmStrip';
import Footer from './components/Footer';


function App() {

  const [endpoint, setEndpoint] = useState({name: "Kate Winslet", id: "nm0001234"})

  return (
    <div className="App">
      <Header endpoint={endpoint} />
      <Gallery />
      <ControlCenter />
      <FilmStrip  actor="Gabe Kaplan"/>
      <Footer />
    </div>
  );
}

export default App;
