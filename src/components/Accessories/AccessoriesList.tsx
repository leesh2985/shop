import AccessoriesCard from './AccessoriesCard';
import styles from './AccessoriesList.module.css';

export default function AccessoriesList() {
  const imageUrls = [
    'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
    'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
  ];

  return (
    <ul className={styles.list}>
      {imageUrls.map((imageUrl, index) => (
        <AccessoriesCard key={index} imgUrl={imageUrl} />
      ))}
    </ul>
  );
}
