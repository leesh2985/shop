import { Link } from 'react-router-dom';
import styles from './BagBtn.module.css';

export default function BagBtn() {
  return (
    <div className={styles.cardClick}>
      <button className={styles.cardBtn}>장바구니에 담기</button>
      <Link className={styles.cardBag} to="/cart">
        장바구니로 이동
      </Link>
    </div>
  );
}
