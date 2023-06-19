import AccessoriesCard from './AccessoriesCard';
import styles from './AccessoriesList.module.css';

export default function AccessoriesList() {
  return (
    <ul className={styles.list}>
      {Array.from({ length: 4 }).map((_, index) => {
        return <AccessoriesCard key={index} />;
      })}
    </ul>
  );
}
