import DigitalCard from './DigitalCard';
import styles from './DigitalList.module.css';

export default function DigitalList() {
  const imageUrls = [
    'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
    'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
    'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
    'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
  ];

  const digitalData = [
    {
      title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0',
      price: '$64',
    },
    {
      title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
      price: '$109',
    },
    {
      title: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
      price: '$109',
    },
    {
      title: 'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
      price: '$114',
    },
  ];

  return (
    <ul className={styles.list}>
      {imageUrls.map((imageUrl, index) => {
        const { title, price } = digitalData[index];
        return <DigitalCard key={index} imgUrl={imageUrl} title={title} price={price} />;
      })}
    </ul>
  );
}
