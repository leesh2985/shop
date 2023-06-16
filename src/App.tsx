// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import styles from "./App.module.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <h1 className={styles.logo}>
            <a className={styles.link} href="/">
              React Shop
            </a>
          </h1>
          <div className={styles.left}>
            <ul className={styles.ulContainer}>
              <li className={styles.ulItem}>패션</li>
              <li className={styles.ulItem}>악세사리</li>
              <li className={styles.ulItem}>디지털</li>
            </ul>
          </div>
          <div className={styles.right}>
            <label>
              <input  type="checkbox" />
            </label>
            <input className={styles.sreach} placeholder="검색" />
            <div className={styles.cart}>icon</div>
          </div>
        </div>
      </nav>
      <div className={styles.body}>
        <div className={styles.carouselSlide}>carousel-slide</div>
        <div className={styles.fashion}>fashion</div>
        <div className={styles.accessories}>accessories</div>
        <div className={styles.digital}>digital</div>
      </div>
      <div className={styles.footer}>footer</div>
    </>
  );
}

export default App;
