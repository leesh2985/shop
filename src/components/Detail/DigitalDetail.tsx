import BagBtn from './BagBtn';
import styles from './DigitalDetail.module.css';

const imgUrl = 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg';

export default function DigitalDetail() {
  return (
    <section className={styles.container}>
      <div>
        <div className={styles.text}>
          <ul className={styles.fashionUl}>
            <li className={styles.fashionItem}>디지털</li>
            <li className={styles.fashionItem}>WD 2TB Elements Portable External Hard Drive - USB 3.0</li>
          </ul>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <figure className={styles.imgboby}>
          <img className={styles.img} src={imgUrl} alt="상세페이지" />
        </figure>
        <div className={styles.cardText}>
          <h2 className={styles.cardTitle}>
            WD 2TB Elements Portable External Hard Drive - USB 3.0
            <span className={styles.badge}>NEW</span>
          </h2>
          <p className={styles.cardInfo}>
            USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility
            Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating
            systems; Compatibility may vary depending on user’s hardware configuration and operating system
          </p>
          <div></div>
          <p className={styles.momey}>$64</p>
          <BagBtn />
        </div>
      </div>
    </section>
  );
}
