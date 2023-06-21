import FashionCard from './FashionCard';
import styles from './FashionList.module.css';

export default function FashionList() {
  const imageUrls = [
    'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
  ];

  return (
    <ul className={styles.list}>
      {imageUrls.map((imageUrl, index) => (
        <FashionCard key={index} imgUrl={imageUrl} />
      ))}
    </ul>
  );
}
