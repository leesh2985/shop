import styles from './FashionPage.module.css';
import FashionPageNav from './FashionPageNav';

export default function FashionPage() {
  return (
    <section className={styles.fashionContainer}>
      <h2 className={styles.title}>패션</h2>
      <FashionPageNav />
    </section>
  );
}
