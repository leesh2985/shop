import { useNavigate } from 'react-router-dom';
import styles from './AccessoriesCard.module.css';

interface AccessoriesCardProps {
  imgUrl: string;
  title: string;
  price: string;
}

export default function AccessoriesCard({ imgUrl, title, price }: AccessoriesCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/accessories/악세서리`);
  };
  return (
    <a className={styles.cardBtn} onClick={handleClick}>
      <li className={styles.item}>
        <figure className={styles.imgFlex}>
          <img className={styles.img} src={imgUrl} alt="상품이미지" />
        </figure>

        <div className={styles.info}>
          <p className={styles.title}>{title}</p>
          <p className={styles.text}>{price}</p>
        </div>
      </li>
    </a>
  );
}
