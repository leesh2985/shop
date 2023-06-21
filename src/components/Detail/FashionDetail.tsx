import styles from './FashionDetail.module.css';

const imgUrl = 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg';

export default function FashionDetail() {
  return (
    <section className={styles.container}>
      <div>
        <div className={styles.text}>
          <ul className={styles.fashionUl}>
            <li className={styles.fashionItem}>패션</li>
            <li className={styles.fashionItem}>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</li>
          </ul>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <figure className={styles.imgboby}>
          <img className={styles.img} src={imgUrl} alt="상세페이지" />
        </figure>
        <div className={styles.cardText}>
          <h2 className={styles.cardTitle}>
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops<span className={styles.badge}>NEW</span>
          </h2>
          <p className={styles.cardInfo}>
            Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the
            padded sleeve, your everyday
          </p>
          <div></div>
          <p className={styles.momey}>$110</p>
          <div className={styles.cardClick}>
            <button className={styles.cardBtn}>장바구니에 담기</button>
            <a className={styles.cardBag} href="/cart">
              장바구니로 이동
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
