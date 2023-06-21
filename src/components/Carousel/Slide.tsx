// import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import styles from './Slide.module.css';

export default function Slide() {
  const slideUrls = [
    'https://react-shop-oinochoe.vercel.app/img_shop_fashion.jpeg',
    'https://react-shop-oinochoe.vercel.app/img_shop_digital.jpeg',
    'https://react-shop-oinochoe.vercel.app/img_shop_grocery.jpeg',
  ];

  return (
    <div className={styles.window}>
      <div className={styles.flexbox}>
        {slideUrls.map((url, index) => (
          <div key={index} className={styles.slideImg} style={{ backgroundImage: `url(${url})` }}></div>
        ))}
      </div>
    </div>
  );
}
