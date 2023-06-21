import styles from './AccessoriesDetail.module.css';

const imgUrl = 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg';

export default function AccessoriesDetail() {
  return (
    <section className={styles.container}>
      <div>
        <div className={styles.text}>
          <ul className={styles.fashionUl}>
            <li className={styles.fashionItem}>악세서리</li>
            <li className={styles.fashionItem}>
              John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <figure className={styles.imgboby}>
          <img className={styles.img} src={imgUrl} alt="상세페이지" />
        </figure>
        <div className={styles.cardText}>
          <h2 className={styles.cardTitle}>
            John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet
            <span className={styles.badge}>NEW</span>
          </h2>
          <p className={styles.cardInfo}>
            From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's
            pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.
          </p>
          <div></div>
          <p className={styles.momey}>$695</p>
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
