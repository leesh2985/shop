import styles from './Header.module.css';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { BiSun } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <h1 className={styles.logo}>
          <a className={styles.link} href="/">
            <Link to="/"> React Shop</Link>
          </a>
        </h1>
        <div className={styles.left}>
          <ul className={styles.ulContainer}>
            <li className={styles.ulItem}>
              <a className={styles.linkLi} href="/fashion">
                패션
              </a>
            </li>
            <li className={styles.ulItem}>
              <a className={styles.linkLi} href="/accessory">
                악세사리
              </a>
            </li>
            <li className={styles.ulItem}>
              <a className={styles.linkLi} href="/digital">
                디지털
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          <label className={styles.label}>
            <button className={styles.mode}>
              <BiSun />
            </button>
          </label>
          <input className={styles.sreach} placeholder="검색" />
          <button className={styles.bag}>
            <a className={styles.linkbag} href="/cart">
              <HiOutlineShoppingBag />
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
}
