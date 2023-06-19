import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import styles from './CarouselRoot.module.css';

const NextArrow = ({ onClick }) => {
  return (
    <button className={styles.rightArrow} onClick={onClick} type="button">
      <IoMdArrowDropright />
    </button>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <button className={styles.leftArrow} onClick={onClick} type="button">
      <IoMdArrowDropleft />
    </button>
  );
};

export default function CarouselRoot() {
  const sliderRef = useRef(null);

  const handleNext = () => {
    sliderRef.current.slickNext(); // 다음 슬라이드로 이동하는 함수 호출
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev(); // 이전 슬라이드로 이동하는 함수 호출
  };

  const settings = {
    dots: true, // 캐러셀 밑에 ... 을 표시할지
    infinite: true, // 슬라이드가 끝까지 가면 다시 처음으로 반복
    speed: 3000, // 속도
    autoplay: true, // 자동 재생
    autoplaySpeed: 3000, // 자동 재생 속도
    slidesToShow: 1, // 한 번에 보여줄 슬라이드 개수
    slidesToScroll: 1, // 한 번에 넘어가는 슬라이드 개수
    nextArrow: <NextArrow onClick={handleNext} />,
    prevArrow: <PrevArrow onClick={handlePrev} />,
  };

  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        <div className="carouselImg">
          <img src="./img/img_shop_digital.jpeg" alt="digital" />
        </div>
        <div className="carouselImg">
          <img src="./img/img_shop_fashion.jpeg" alt="fashion" />
        </div>
        <div className="carouselImg">
          <img src="./img/img_shop_grocery.jpeg" alt="grocery" />
        </div>
      </Slider>
    </div>
  );
}
