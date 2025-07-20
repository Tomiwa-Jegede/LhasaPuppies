import React, { useContext } from 'react';
import { SliderContent } from './content';

const SliderNav = () => {
  const { currentIndex } = useContext(SliderContent);
  return (
    <div className="absolute bottom-16 z-50 flex w-full items-center justify-center">
      <ul className="flex w-[50%] justify-between p-2">
        <li
          className={`h-[1rem] w-[1rem] ${currentIndex === 0 ? 'bg-primary-color' : 'bg-[#ffffff98]'} rounded-[1rem]`}
        ></li>
        <li
          className={`h-[1rem] w-[1rem] ${currentIndex === 1 ? 'bg-primary-color' : 'bg-[#ffffff98]'} rounded-[1rem]`}
        ></li>
        <li
          className={`h-[1rem] w-[1rem] ${currentIndex === 2 ? 'bg-primary-color' : 'bg-[#ffffff98]'} rounded-[1rem]`}
        ></li>
        <li
          className={`h-[1rem] w-[1rem] ${currentIndex === 3 ? 'bg-primary-color' : 'bg-[#ffffff98]'} rounded-[1rem]`}
        ></li>
        <li
          className={`h-[1rem] w-[1rem] ${currentIndex === 4 ? 'bg-primary-color' : 'bg-[#ffffff98]'} rounded-[1rem]`}
        ></li>
      </ul>
    </div>
  );
};

export default SliderNav;
