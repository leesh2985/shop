import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import FashionPage from './components/Fashion/FashionPage';
import AccessoriesPage from './components/Accessories/AccessoriesPage';
import DigitalPage from './components/Digital/DigitalPage';
import Footer from './components/Footer';
import Slide from './components/Carousel/Slide';

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <Header />
        <section className="body">
          <Slide />
          <FashionPage />
          <AccessoriesPage />
          <DigitalPage />
        </section>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
