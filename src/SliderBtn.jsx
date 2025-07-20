import React, { useContext } from 'react';
import { SliderContent } from './content';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SliderBtn = () => {
  const { prevBtn, nextBtn } = useContext(SliderContent);
  return (
    <div className="absolute z-50 flex w-full items-center justify-between p-2">
      <button
        onClick={prevBtn}
        className="bg-primary-color flex h-[2rem] w-[2rem] items-center justify-center rounded-[2rem] p-2"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        onClick={nextBtn}
        className="bg-primary-color flex h-[2rem] w-[2rem] items-center justify-center rounded-[2rem] p-2"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default SliderBtn;
