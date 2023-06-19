import DigitalList from './DigitalList';
import styles from './DigitalPage.module.css';

export default function DigitalPage() {
  return (
    <section className={styles.digitalContainer}>
      <h2 className={styles.title}>디지털</h2>
      <DigitalList />
    </section>
  );
}
