// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import './App.css';
import CarouselRoot from './components/CarouselRoot';
import Header from './components/Header';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <main className="App">
      <Header />
      <section className="body">
        <CarouselRoot />
      </section>

      {/* <div className={styles.body}>
        <div className={styles.carouselSlide}>carousel-slide</div>
        <div className={styles.fashion}>fashion</div>
        <div className={styles.accessories}>accessories</div>
        <div className={styles.digital}>digital</div>
      </div>
      <div className={styles.footer}>footer</div> */}
    </main>
  );
}

export default App;
