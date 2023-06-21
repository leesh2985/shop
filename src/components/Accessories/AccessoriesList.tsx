import AccessoriesCard from './AccessoriesCard';
import styles from './AccessoriesList.module.css';

export default function AccessoriesList() {
  const imageUrls = [
    'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
    'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
  ];

  const accessoriesData = [
    {
      title: 'John Hardy Womens Legends Naga Gold & Silver Dragon Station Chain Bracelet',
      price: '$695',
    },
    {
      title: 'Solid Gold Petite Micropave',
      price: '$168',
    },
    {
      title: 'White Gold Plated Princess',
      price: '$10',
    },
    {
      title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
      price: '$11',
    },
  ];

  return (
    <ul className={styles.list}>
      {imageUrls.map((imageUrl, index) => {
        const { title, price } = accessoriesData[index];
        return <AccessoriesCard key={index} imgUrl={imageUrl} title={title} price={price} />;
      })}
    </ul>
  );
}
