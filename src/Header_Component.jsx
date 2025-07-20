import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Header_Component = () => {
  const [hidden, setHidden] = useState(true);
  const handleClick = () => {
    setHidden((prev) => !prev);
  };
  return (
    <div className="text-primary-color fixed z-[1000] w-full bg-[#ffffff] p-4 text-[1.2rem] border-b  border-b-[#e6e3e3]">
      <div className="Header_Container flex items-center justify-between">
        <div className="logo">Lhasa Apso</div>
        {/* menu */}
        <div onClick={handleClick} className="menu">
          <FontAwesomeIcon icon={faBars} />
        </div>
        {/* Drop-Down */}
        <div
          className={`${hidden ? 'w-0' : 'w-[45%]'} DropDown absolute top-0 right-0 bg-[#ffffff] transition-all duration-500`}
        >
          <ul className="relative p-5 pt-[4rem] pr-[5rem]">
            <li onClick={handleClick} className="absolute top-3 right-5">
              <FontAwesomeIcon icon={faXmark} />
            </li>
            <li className="mb-[4rem]">Home</li>
            <li className="mb-[4rem]">About</li>
            <li className="mb-[4rem]">Dogs</li>
            <li className="mb-[4rem]">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header_Component;
