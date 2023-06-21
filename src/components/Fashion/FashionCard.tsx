import { useNavigate } from 'react-router-dom';
import styles from './FashionCard.module.css';

export default function FashionCard({ imgUrl }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/fashion/패션`);
  };

  return (
    <a className={styles.cardBtn} onClick={handleClick}>
      <li className={styles.item}>
        <figure className={styles.imgFlex}>
          <img className={styles.img} src={imgUrl} alt="상품이미지" />
        </figure>

        <div className={styles.info}>
          <p className={styles.title}>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
          <p className={styles.text}>$110</p>
        </div>
      </li>
    </a>
  );
}
