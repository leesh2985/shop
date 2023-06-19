import styles from './DigitalCard.module.css';

export default function DigitalCard() {
  const imgUrl = 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg';
  return (
    <a className={styles.cardBtn}>
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
