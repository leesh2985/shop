import DigitalCard from './DigitalCard';
import styles from './DigitalList.module.css';

export default function DigitalList() {
  return (
    <ul className={styles.list}>
      {Array.from({ length: 4 }).map((_, index) => {
        return <DigitalCard key={index} />;
      })}
    </ul>
  );
}
