import FashionCard from './FashionCard';
import styles from './FashionList.module.css';

export default function FashionList() {
  return (
    <ul className={styles.list}>
      {Array.from({ length: 4 }).map((_, index) => {
        return <FashionCard key={index} />;
      })}
    </ul>
  );
}
