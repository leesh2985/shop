import styles from './DigitalPage.module.css';
import DigitalPageNav from './DigitalPageNav';

export default function DigitalPage() {
  return (
    <section className={styles.digitalContainer}>
      <h2 className={styles.title}>디지털</h2>
      <DigitalPageNav />
    </section>
  );
}
