import DigitalCard from './DigitalCard';
import styles from './DigitalList.module.css';

export default function DigitalList() {
  const imageUrls = [
    'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
    'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
    'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
    'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
  ];

  return (
    <ul className={styles.list}>
      {imageUrls.map((imageUrl, index) => (
        <DigitalCard key={index} imgUrl={imageUrl} />
      ))}
    </ul>
  );
}
