import styles from './Header.module.css';

export default function Header() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <h1 className={styles.logo}>
          <a className={styles.link} href="/">
            React Shop
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
          <label>
            <input type="checkbox" />
          </label>
          <input className={styles.sreach} placeholder="검색" />
          <div className={styles.cart}>icon</div>
        </div>
      </div>
    </nav>
  );
}
