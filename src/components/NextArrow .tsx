import React from 'react';

type NextArrowProps = {
  onClick: () => void;
};

export default function NextArrow({ onClick: NextArrowProps }) {
  return (
    <button onClick={onclick} type="button">
      {/* ... 내용 생략 */}
    </button>
  );
}
