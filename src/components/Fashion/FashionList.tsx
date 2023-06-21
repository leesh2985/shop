import FashionCard from './FashionCard';
import styles from './FashionList.module.css';

export default function FashionList() {
  const imageUrls = [
    'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
  ];

  const fashionData = [
    {
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: '$110',
    },
    {
      title: 'Mens Casual Premium Slim Fit T-Shirts',
      price: '$22',
    },
    {
      title: 'Mens Cotton Jacket',
      price: '$56',
    },
    {
      title: 'Mens Casual Slim Fit',
      price: '$16',
    },
  ];

  return (
    <ul className={styles.list}>
      {imageUrls.map((imageUrl, index) => {
        const { title, price } = fashionData[index];
        return <FashionCard key={index} imgUrl={imageUrl} title={title} price={price} />;
      })}
    </ul>
  );
}
