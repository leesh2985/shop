import { useNavigate } from 'react-router-dom';
import styles from './FashionCard.module.css';

interface FashionCardProps {
  imgUrl: string;
  title: string;
  price: string;
}

export default function FashionCard({ imgUrl, title, price }: FashionCardProps) {
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
          <p className={styles.title}>{title}</p>
          <p className={styles.text}>{price}</p>
        </div>
      </li>
    </a>
  );
}
