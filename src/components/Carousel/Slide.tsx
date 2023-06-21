import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import styles from './Slide.module.css';
import { useState } from 'react';

export default function Slide() {
  const slideUrls = [
    'https://react-shop-oinochoe.vercel.app/img_shop_fashion.jpeg',
    'https://react-shop-oinochoe.vercel.app/img_shop_digital.jpeg',
    'https://react-shop-oinochoe.vercel.app/img_shop_grocery.jpeg',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === 0 ? slideUrls.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === slideUrls.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className={styles.window}>
      <div className={styles.flexbox}>
        <div className={styles.slideImg} style={{ backgroundImage: `url(${slideUrls[currentSlide]})` }}></div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.previousButton} onClick={goToPreviousSlide}>
          <IoMdArrowDropleft />
        </button>
        <button className={styles.nextButton} onClick={goToNextSlide}>
          <IoMdArrowDropright />
        </button>
      </div>
    </div>
  );
}
