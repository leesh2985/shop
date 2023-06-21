import { useNavigate } from 'react-router-dom';
import styles from './DigitalCard.module.css';

export default function DigitalCard() {
  const imgUrl = 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg';
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/digital/디지털`);
  };

  return (
    <a className={styles.cardBtn} onClick={handleClick}>
      <li className={styles.item}>
        <figure className={styles.imgFlex}>
          <img className={styles.img} src={imgUrl} alt="상품이미지" />
        </figure>

        <div className={styles.info}>
          <p className={styles.title}>WD 2TB Elements Portable External Hard Drive - USB 3.0</p>
          <p className={styles.text}>$64</p>
        </div>
      </li>
    </a>
  );
}
