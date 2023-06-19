import FashionList from './FashionList';
import styles from './FashionPage.module.css';

export default function FashionPage() {
  return (
    <section className={styles.fashionContainer}>
      <h2 className={styles.title}>패션</h2>
      <FashionList />
    </section>
  );
}
