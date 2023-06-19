import AccessoriesList from './AccessoriesList';
import styles from './AccessoriesPage.module.css';

export default function AccessoriesPage() {
  return (
    <section className={styles.accessoriesContainer}>
      <h2 className={styles.title}>악세사리</h2>
      <AccessoriesList />
    </section>
  );
}
