import styles from './FashionCard.module.css';

export default function FashionCard() {
  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <p className={styles.title}>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
        <p className={styles.text}>$110</p>
      </div>
    </li>
  );
}
