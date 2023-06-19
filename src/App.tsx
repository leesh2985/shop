// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import CarouselRoot from './components/Carousel/CarouselRoot';
import FashionPage from './components/Fashion/FashionPage';
import AccessoriesPage from './components/Accessories/AccessoriesPage';
import DigitalPage from './components/Digital/DigitalPage';
import Footer from './components/Footer';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <main className="App">
        <Header />
        <section className="body">
          <CarouselRoot />
          <FashionPage />
          <AccessoriesPage />
          <DigitalPage />
        </section>
        <Footer />

        {/* 
      <div className={styles.footer}>footer</div> */}
      </main>
    </BrowserRouter>
  );
}

export default App;
